"use client";

import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function TerrainMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const panelsGroupRef = useRef<THREE.Group>(null);
  const sunGizmoRef = useRef<THREE.Group>(null);

  // Generate terrain geometry with gentle undulating hills
  const { geometry, panelPositions } = useMemo(() => {
    const width = 12;
    const depth = 12;
    const segments = 48;
    const geo = new THREE.PlaneGeometry(width, depth, segments, segments);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position;
    const panels: { x: number; y: number; z: number; angle: number }[] = [];

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);

      // Organic dual-frequency elevation function
      const elevation =
        Math.sin(x * 0.45) * Math.cos(z * 0.45) * 0.9 +
        Math.sin(x * 0.9 + 1.2) * 0.35 +
        Math.cos(z * 0.8) * 0.3;

      pos.setY(i, elevation);

      // Collect plateaus for solar panels
      if (
        i % 7 === 0 &&
        Math.abs(x) < 4.2 &&
        Math.abs(z) < 4.2 &&
        elevation > -0.2 &&
        elevation < 0.8
      ) {
        panels.push({
          x,
          y: elevation + 0.08,
          z,
          angle: -Math.atan2(x, z) * 0.1,
        });
      }
    }

    geo.computeVertexNormals();
    return { geometry: geo, panelPositions: panels };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.04;
    }
    if (panelsGroupRef.current) {
      panelsGroupRef.current.rotation.y = t * 0.04;
    }
    if (sunGizmoRef.current) {
      sunGizmoRef.current.rotation.y = t * 0.04;
    }
  });

  return (
    <group position={[0, -0.6, 0]}>
      {/* Terrain Base Mesh */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          color="#121824"
          roughness={0.7}
          metalness={0.2}
          wireframe={false}
          flatShading={false}
        />
      </mesh>

      {/* Wireframe Contour Overlay for engineering elevation look */}
      <mesh geometry={geometry}>
        <meshBasicMaterial
          color="#3B82F6"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Array of Photovoltaic Panels on Terrain */}
      <group ref={panelsGroupRef}>
        {panelPositions.slice(0, 32).map((p, idx) => (
          <group key={idx} position={[p.x, p.y, p.z]} rotation={[0.2, p.angle, 0]}>
            {/* Panel Module */}
            <mesh>
              <boxGeometry args={[0.55, 0.02, 0.38]} />
              <meshStandardMaterial
                color="#1D4ED8"
                metalness={0.85}
                roughness={0.15}
              />
            </mesh>
            {/* Mounting Post */}
            <mesh position={[0, -0.06, 0]}>
              <cylinderGeometry args={[0.015, 0.015, 0.12, 6]} />
              <meshStandardMaterial color="#64748B" metalness={0.9} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Sun Vector Indicator */}
      <group ref={sunGizmoRef} position={[4.5, 3.2, 4]}>
        <mesh>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshBasicMaterial color="#FBBF24" />
        </mesh>
      </group>
    </group>
  );
}

export default function SolvixTerrain3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[380px] bg-[#0E1117] flex items-center justify-center">
        <span className="text-xs font-mono text-[#8E8E93]">GENERATING TERRAIN MESH...</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[380px] rounded-xl overflow-hidden bg-[#0A0D14] border border-white/[0.08]">
      {/* Engineering HUD / Telemetry Watermark */}
      <div className="absolute top-4 left-4 z-10 font-mono text-[10px] space-y-1 text-white/70 select-none pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white tracking-widest">SOLVIX ENGINE // TERRAIN 3D</span>
        </div>
        <p className="text-[#8E8E93]">GRID: 48x48 MESH · SLOPE THRESHOLD: 14°</p>
      </div>

      <div className="absolute bottom-4 right-4 z-10 font-mono text-[10px] text-right text-[#8E8E93] select-none pointer-events-none">
        <div>SUN AZIMUTH: <span className="text-white">142° / EL: 48°</span></div>
        <div>OPTIMAL ARRAY DENSITY: <span className="text-blue-400">94.8%</span></div>
      </div>

      <Canvas
        camera={{ position: [0, 6, 8.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <color attach="background" args={["#080C14"]} />
        <ambientLight intensity={0.4} />
        {/* Warm Sunlight directional light */}
        <directionalLight position={[10, 15, 8]} intensity={2.2} color="#FEF3C7" />
        {/* Cool Sky Ambient fill */}
        <directionalLight position={[-8, -5, -8]} intensity={0.5} color="#3B82F6" />

        <Suspense fallback={null}>
          <TerrainMesh />
        </Suspense>
      </Canvas>
    </div>
  );
}
