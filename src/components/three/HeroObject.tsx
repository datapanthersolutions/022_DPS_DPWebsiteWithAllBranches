"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment, Lightformer, Float, MeshTransmissionMaterial, MeshDistortMaterial, RoundedBox,
} from "@react-three/drei";
import { useMemo, useRef, useState, useEffect, createContext, useContext } from "react";
import * as THREE from "three";

export type ObjectVariant = "knot" | "crystal" | "rings" | "blob" | "blocks" | "helix" | "shield" | "orbit";

// Shared studio lighting built from light panels (no HDR file download needed).
export { ToneCtx };
export function Studio() {
  return (
    <Environment resolution={256}>
      <group rotation={[-Math.PI / 3, 0, 1]}>
        <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
        <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
        <Lightformer form="ring" color="#5D8FFF" intensity={6} rotation-y={Math.PI / 2} position={[-3, -1, -1]} scale={6} />
        <Lightformer form="rect" color="#C68FFF" intensity={4} rotation-y={-Math.PI / 2} position={[6, 1, 0]} scale={[10, 4, 1]} />
        <Lightformer form="rect" color="#001AFF" intensity={3} position={[0, -4, 4]} scale={[10, 2, 1]} />
      </group>
    </Environment>
  );
}

// Gently turns the whole object toward the cursor.
export function Follow({ children, strength = 0.35 }: { children: React.ReactNode; strength?: number }) {
  const g = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  useFrame((_, dt) => {
    if (!g.current) return;
    g.current.rotation.y = THREE.MathUtils.damp(g.current.rotation.y, pointer.x * strength, 3, dt);
    g.current.rotation.x = THREE.MathUtils.damp(g.current.rotation.x, -pointer.y * strength * 0.6, 3, dt);
  });
  return <group ref={g}>{children}</group>;
}

const glass = { thickness: 0.6, roughness: 0.05, transmission: 1, ior: 1.35, chromaticAberration: 0.06, anisotropy: 0.2, distortion: 0.25, distortionScale: 0.4, temporalDistortion: 0.1, samples: 4, resolution: 256 } as const;

// Phones and small screens get a cheaper glass look (no extra render passes).
const lite = typeof window !== "undefined" && (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
// Glass refracts what is behind it; on a transparent canvas that would be black,
// so give it the tone of the page it sits on.
const ToneCtx = createContext<"light" | "dark">("dark");
function Glass({ color = "#dfe6ff", thickness = 0.6 }: { color?: string; thickness?: number }) {
  const tone = useContext(ToneCtx);
  const bg = useMemo(() => new THREE.Color(tone === "light" ? "#eef1ff" : "#0a0656"), [tone]);
  if (lite) return <meshPhysicalMaterial color={color} roughness={0.08} metalness={0.1} transmission={0.9} thickness={thickness} ior={1.35} clearcoat={1} envMapIntensity={1.4} />;
  return <MeshTransmissionMaterial {...glass} color={color} thickness={thickness} background={bg} />;
}

function Knot() {
  const m = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => { if (m.current) { m.current.rotation.x += dt * 0.15; m.current.rotation.y += dt * 0.2; } });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={m} scale={0.95}>
        <torusKnotGeometry args={[1, 0.34, 220, 36]} />
        <Glass color="#dfe6ff" />
      </mesh>
    </Float>
  );
}

function Crystal() {
  const inner = useRef<THREE.Mesh>(null), outer = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (inner.current) inner.current.rotation.y += dt * 0.3;
    if (outer.current) { outer.current.rotation.y -= dt * 0.12; outer.current.rotation.z += dt * 0.08; }
  });
  return (
    <Float speed={1.2} floatIntensity={1}>
      <mesh ref={inner} scale={1.15}>
        <icosahedronGeometry args={[1, 0]} />
        <Glass color="#c9b8ff" thickness={1.2} />
      </mesh>
      <mesh ref={outer} scale={1.9}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#5D8FFF" wireframe transparent opacity={0.35} />
      </mesh>
    </Float>
  );
}

function Rings() {
  const refs = [useRef<THREE.Mesh>(null), useRef<THREE.Mesh>(null), useRef<THREE.Mesh>(null)];
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    refs[0].current?.rotation.set(t * 0.5, t * 0.2, 0);
    refs[1].current?.rotation.set(0, t * 0.6, t * 0.3);
    refs[2].current?.rotation.set(t * 0.3, 0, t * 0.5);
  });
  const colors = ["#001AFF", "#7341AD", "#22C36F"];
  return (
    <Float speed={1} floatIntensity={0.8}>
      {refs.map((r, i) => (
        <mesh key={i} ref={r} scale={1.6 - i * 0.35}>
          <torusGeometry args={[1, 0.07, 32, 160]} />
          <meshStandardMaterial color={colors[i]} metalness={1} roughness={0.15} />
        </mesh>
      ))}
      <mesh scale={0.42}>
        <sphereGeometry args={[1, 64, 64]} />
        <Glass color="#ffffff" />
      </mesh>
    </Float>
  );
}

function Blob() {
  return (
    <Float speed={1.5} floatIntensity={1.4}>
      <mesh scale={1.45}>
        <sphereGeometry args={[1, 160, 160]} />
        <MeshDistortMaterial color="#3348FF" roughness={0.08} metalness={0.6} distort={0.42} speed={2.2} envMapIntensity={1.4} />
      </mesh>
    </Float>
  );
}

// A small grid of data blocks that rise and fall like a live bar chart.
function Blocks() {
  const N = 5;
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  const phases = useMemo(() => Array.from({ length: N * N }, () => Math.random() * Math.PI * 2), []);
  const g = useRef<THREE.Group>(null);
  useFrame((s, dt) => {
    const t = s.clock.elapsedTime;
    refs.current.forEach((m, i) => {
      if (!m) return;
      const h = 0.4 + (Math.sin(t * 1.2 + phases[i]) + 1) * 0.9;
      m.scale.y = THREE.MathUtils.damp(m.scale.y, h, 4, dt);
      m.position.y = m.scale.y / 2 - 1;
    });
    if (g.current) g.current.rotation.y += dt * 0.15;
  });
  const palette = ["#001AFF", "#3348FF", "#5D8FFF", "#7341AD", "#C68FFF"];
  return (
    <group ref={g} rotation={[0.55, 0.6, 0]} scale={0.62}>
      {Array.from({ length: N * N }, (_, i) => {
        const x = (i % N) - (N - 1) / 2, z = Math.floor(i / N) - (N - 1) / 2;
        return (
          <RoundedBox key={i} ref={(el: THREE.Mesh | null) => { refs.current[i] = el; }} args={[0.78, 1, 0.78]} radius={0.08} position={[x, 0, z]}>
            <meshStandardMaterial color={palette[(i + Math.floor(i / N)) % palette.length]} metalness={0.4} roughness={0.25} />
          </RoundedBox>
        );
      })}
    </group>
  );
}

// Double helix of glowing nodes (healthcare / life sciences).
function Helix() {
  const g = useRef<THREE.Group>(null);
  const pts = useMemo(() => Array.from({ length: 28 }, (_, i) => i), []);
  useFrame((_, dt) => { if (g.current) g.current.rotation.y += dt * 0.5; });
  return (
    <Float speed={1} floatIntensity={0.6}>
      <group ref={g} rotation={[0, 0, 0.35]}>
        {pts.map((i) => {
          const y = (i - 14) * 0.17, a = i * 0.45;
          return (
            <group key={i} position={[0, y, 0]} rotation={[0, a, 0]}>
              <mesh position={[1, 0, 0]}><sphereGeometry args={[0.11, 24, 24]} /><meshStandardMaterial color="#5D8FFF" emissive="#001AFF" emissiveIntensity={0.6} /></mesh>
              <mesh position={[-1, 0, 0]}><sphereGeometry args={[0.11, 24, 24]} /><meshStandardMaterial color="#C68FFF" emissive="#7341AD" emissiveIntensity={0.6} /></mesh>
              <mesh rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.025, 0.025, 2, 8]} /><meshStandardMaterial color="#DDE8FF" transparent opacity={0.55} /></mesh>
            </group>
          );
        })}
      </group>
    </Float>
  );
}

// Glass shield with a hexagon wire cage (security / risk / compliance).
function Shield() {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 1.25); s.bezierCurveTo(0.6, 1.0, 1.0, 1.0, 1.05, 0.95); s.lineTo(1.05, 0.1);
    s.bezierCurveTo(1.0, -0.7, 0.5, -1.1, 0, -1.35); s.bezierCurveTo(-0.5, -1.1, -1.0, -0.7, -1.05, 0.1);
    s.lineTo(-1.05, 0.95); s.bezierCurveTo(-1.0, 1.0, -0.6, 1.0, 0, 1.25);
    return s;
  }, []);
  const cage = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => { if (cage.current) cage.current.rotation.y += dt * 0.25; });
  return (
    <Float speed={1.3} floatIntensity={1}>
      <mesh position={[0, 0, -0.2]}>
        <extrudeGeometry args={[shape, { depth: 0.4, bevelEnabled: true, bevelSize: 0.08, bevelThickness: 0.08, bevelSegments: 6 }]} />
        <Glass color="#cfe0ff" thickness={0.9} />
      </mesh>
      <mesh ref={cage} scale={2}>
        <cylinderGeometry args={[1, 1, 1.6, 6, 4, true]} />
        <meshBasicMaterial color="#22C36F" wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

// Planet with orbiting satellites (global / partnerships / growth).
function Orbit() {
  const sats = useRef<THREE.Group>(null);
  useFrame((_, dt) => { if (sats.current) sats.current.rotation.y += dt * 0.6; });
  return (
    <Float speed={1} floatIntensity={0.8}>
      <mesh>
        <sphereGeometry args={[0.9, 64, 64]} />
        <meshStandardMaterial color="#0A0656" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh scale={0.93}><sphereGeometry args={[1, 32, 32]} /><meshBasicMaterial color="#5D8FFF" wireframe transparent opacity={0.25} /></mesh>
      <group ref={sats} rotation={[0.4, 0, 0.25]}>
        {[0, 1, 2, 3, 4].map((i) => (
          <mesh key={i} position={[Math.cos((i / 5) * Math.PI * 2) * 1.7, 0, Math.sin((i / 5) * Math.PI * 2) * 1.7]}>
            <sphereGeometry args={[0.12 + (i % 2) * 0.05, 32, 32]} />
            <meshStandardMaterial color={["#001AFF", "#C68FFF", "#22C36F", "#F47A48", "#FED340"][i]} metalness={0.3} roughness={0.2} />
          </mesh>
        ))}
        <mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[1.7, 0.006, 8, 200]} /><meshBasicMaterial color="#C68FFF" transparent opacity={0.5} /></mesh>
      </group>
    </Float>
  );
}

export const objectMap: Record<ObjectVariant, () => JSX.Element> = { knot: Knot, crystal: Crystal, rings: Rings, blob: Blob, blocks: Blocks, helix: Helix, shield: Shield, orbit: Orbit };

// Renders only while visible on screen, to keep scrolling smooth.
export default function HeroObject({ variant = "knot", className, tone = "dark" }: { variant?: ObjectVariant; className?: string; tone?: "light" | "dark" }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Obj = objectMap[variant];
  return (
    <div ref={wrap} className={className}>
      <Canvas frameloop={visible ? "always" : "never"} camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 5]} intensity={1.4} />
        <Studio />
        <ToneCtx.Provider value={tone}><Follow><Obj /></Follow></ToneCtx.Provider>
      </Canvas>
    </div>
  );
}
