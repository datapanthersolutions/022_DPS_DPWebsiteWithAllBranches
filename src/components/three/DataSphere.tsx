"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Points distributed on a sphere (fibonacci), with short connecting lines between
// nearby points, an orbiting ring of "data packets", and soft additive glow.
function Network({ count = 900, radius = 2.2 }) {
  const group = useRef<THREE.Group>(null);
  const packets = useRef<THREE.Points>(null);
  const { pointer } = useThree();

  const { positions, colors, lines } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const a = new THREE.Color("#001AFF"), b = new THREE.Color("#C68FFF"), c = new THREE.Color("#5D8FFF");
    const pts: THREE.Vector3[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const t = golden * i;
      const jitter = 1 + (Math.random() - 0.5) * 0.08;
      const v = new THREE.Vector3(Math.cos(t) * r, y, Math.sin(t) * r).multiplyScalar(radius * jitter);
      pts.push(v);
      pos.set([v.x, v.y, v.z], i * 3);
      const mix = (y + 1) / 2;
      const cc = a.clone().lerp(mix > 0.5 ? b : c, Math.abs(mix - 0.5) * 2);
      col.set([cc.r, cc.g, cc.b], i * 3);
    }
    const seg: number[] = [];
    for (let i = 0; i < count; i += 2) {
      for (let j = i + 1; j < Math.min(count, i + 40); j++) {
        if (pts[i].distanceTo(pts[j]) < 0.34 && Math.random() > 0.35) seg.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
      }
    }
    return { positions: pos, colors: col, lines: new Float32Array(seg) };
  }, [count, radius]);

  const packetPos = useMemo(() => {
    const n = 140, p = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const ang = (i / n) * Math.PI * 2, rr = radius * (1.45 + Math.random() * 0.35);
      p.set([Math.cos(ang) * rr, (Math.random() - 0.5) * 0.25, Math.sin(ang) * rr], i * 3);
    }
    return p;
  }, [radius]);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const scroll = typeof window !== "undefined" ? window.scrollY / window.innerHeight : 0;
    g.rotation.y += dt * 0.08;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, pointer.y * 0.3 + scroll * 0.4, 0.05);
    g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, -pointer.x * 0.15, 0.05);
    g.position.y = THREE.MathUtils.lerp(g.position.y, scroll * 1.2, 0.1);
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.015;
    g.scale.setScalar(s);
    if (packets.current) packets.current.rotation.y -= dt * 0.25;
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.035} vertexColors transparent opacity={0.95} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#3348FF" transparent opacity={0.22} depthWrite={false} blending={THREE.AdditiveBlending} />
      </lineSegments>
      <mesh>
        <sphereGeometry args={[radius * 0.92, 48, 48]} />
        <meshBasicMaterial color="#040038" transparent opacity={0.55} />
      </mesh>
      <group rotation={[0.35, 0, 0.2]}>
        <points ref={packets}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[packetPos, 3]} />
          </bufferGeometry>
          <pointsMaterial size={0.05} color="#C68FFF" transparent opacity={0.9} depthWrite={false} blending={THREE.AdditiveBlending} />
        </points>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius * 1.55, 0.004, 8, 200]} />
          <meshBasicMaterial color="#5D8FFF" transparent opacity={0.45} />
        </mesh>
      </group>
      <mesh rotation={[Math.PI / 2.3, 0.4, 0]}>
        <torusGeometry args={[radius * 1.9, 0.003, 8, 200]} />
        <meshBasicMaterial color="#C68FFF" transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

function Dust() {
  const ref = useRef<THREE.Points>(null);
  const p = useMemo(() => {
    const n = 500, a = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) a.set([(Math.random() - 0.5) * 18, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 8 - 2], i * 3);
    return a;
  }, []);
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.01; });
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[p, 3]} /></bufferGeometry>
      <pointsMaterial size={0.02} color="#DDE8FF" transparent opacity={0.5} depthWrite={false} />
    </points>
  );
}

export default function DataSphere({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
        <Network />
        <Dust />
      </Canvas>
    </div>
  );
}
