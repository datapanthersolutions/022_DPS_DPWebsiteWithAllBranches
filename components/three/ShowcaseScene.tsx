"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Studio, Follow, objectMap, type ObjectVariant } from "./HeroObject";

// One canvas holding several objects; the active one scales and spins in, the rest shrink away.
function Slot({ active, children }: { active: boolean; children: React.ReactNode }) {
  const g = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (!g.current) return;
    const target = active ? 1 : 0.0001;
    const s = THREE.MathUtils.damp(g.current.scale.x, target, 6, dt);
    g.current.scale.setScalar(s);
    g.current.rotation.y = THREE.MathUtils.damp(g.current.rotation.y, active ? 0 : Math.PI, 4, dt);
    g.current.visible = s > 0.01;
  });
  return <group ref={g} scale={0.0001}>{children}</group>;
}

export default function ShowcaseScene({ variants, active, className }: { variants: ObjectVariant[]; active: number; className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    if (wrap.current) io.observe(wrap.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={wrap} className={className}>
      <Canvas frameloop={visible ? "always" : "never"} camera={{ position: [0, 0, 5.4], fov: 42 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 5]} intensity={1.4} />
        <Studio />
        <Follow>
          {variants.map((v, i) => {
            const O = objectMap[v];
            return <Slot key={v + i} active={i === active}><O /></Slot>;
          })}
        </Follow>
      </Canvas>
    </div>
  );
}
