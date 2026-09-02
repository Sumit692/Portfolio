"use client";

import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import AtelierSculpture from "./AtelierSculpture";

export default function HeroCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full min-h-[420px] lg:min-h-[580px] flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border border-white/10 border-t-white/40 animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[580px] select-none pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        {/* Architectural Studio Lighting */}
        <ambientLight intensity={0.6} />
        
        {/* Soft key light from top right */}
        <directionalLight position={[6, 8, 5]} intensity={1.8} color="#FFFFFF" />
        
        {/* Cobalt rim accent light from behind/left */}
        <pointLight position={[-6, -4, -4]} intensity={2.2} color="#3B82F6" />
        
        {/* Subtle warm fill light */}
        <pointLight position={[3, -5, 3]} intensity={0.8} color="#F5F5F0" />

        <Suspense fallback={null}>
          <AtelierSculpture />
        </Suspense>
      </Canvas>
    </div>
  );
}
