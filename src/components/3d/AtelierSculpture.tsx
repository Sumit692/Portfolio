"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export default function AtelierSculpture() {
  const groupRef = useRef<THREE.Group>(null);
  const outerGlassRef = useRef<THREE.Mesh>(null);
  const innerMetalRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const secondaryRingRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Subtle ambient particle dust
  const particleCount = 70;
  const particlePositions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 1.8 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [particleCount]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Mouse parallax reaction with smooth lerp
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        state.pointer.x * 0.4 + t * 0.08,
        0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -state.pointer.y * 0.25 + Math.sin(t * 0.3) * 0.08,
        0.04
      );
    }

    // Outer geometric glass facets rotate slowly
    if (outerGlassRef.current) {
      outerGlassRef.current.rotation.y = t * 0.05;
      outerGlassRef.current.rotation.z = t * 0.03;
    }

    // Inner brushed metal core rotates counter-directionally
    if (innerMetalRef.current) {
      innerMetalRef.current.rotation.y = -t * 0.07;
      innerMetalRef.current.rotation.x = t * 0.04;
    }

    // Thin architectural orbit rings
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.12;
      ringRef.current.rotation.x = 1.1 + Math.sin(t * 0.2) * 0.1;
    }

    if (secondaryRingRef.current) {
      secondaryRingRef.current.rotation.y = -t * 0.1;
      secondaryRingRef.current.rotation.z = 0.6 + Math.cos(t * 0.25) * 0.1;
    }

    // Micro drift for dust particles
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.015;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Soft Float behavior for weightlessness */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        {/* 1. Translucent Architectural Glass Shell (Dodecahedron/Icosahedron hybrid) */}
        <mesh ref={outerGlassRef}>
          <dodecahedronGeometry args={[1.5, 0]} />
          <meshPhysicalMaterial
            roughness={0.12}
            transmission={0.88}
            thickness={1.2}
            ior={1.48}
            reflectivity={0.7}
            clearcoat={0.9}
            clearcoatRoughness={0.1}
            color="#EAEAEA"
            wireframe={false}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Delicate wireframe outline of the glass facets for precision engineering look */}
        <mesh>
          <dodecahedronGeometry args={[1.503, 0]} />
          <meshBasicMaterial
            color="#FFFFFF"
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>

        {/* 2. Inner Brushed Titanium Core (Octahedron with bevels) */}
        <mesh ref={innerMetalRef}>
          <octahedronGeometry args={[0.85, 0]} />
          <meshStandardMaterial
            color="#1E2430"
            metalness={0.9}
            roughness={0.25}
            envMapIntensity={1.2}
          />
        </mesh>

        {/* Inner geometric accent core */}
        <mesh>
          <icosahedronGeometry args={[0.42, 0]} />
          <meshStandardMaterial
            color="#3B82F6"
            metalness={0.8}
            roughness={0.2}
            emissive="#1E3A8A"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* 3. Thin Architectural Ring Axis 1 */}
        <mesh ref={ringRef}>
          <torusGeometry args={[2.0, 0.008, 16, 100]} />
          <meshStandardMaterial
            color="#A1A1AA"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>

        {/* 4. Thin Architectural Ring Axis 2 */}
        <mesh ref={secondaryRingRef}>
          <torusGeometry args={[2.3, 0.006, 16, 100]} />
          <meshStandardMaterial
            color="#60A5FA"
            metalness={0.8}
            roughness={0.3}
            transparent
            opacity={0.5}
          />
        </mesh>

        {/* 5. Delicate Ambient Dust Particles */}
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[particlePositions, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.02}
            color="#F5F5F0"
            transparent
            opacity={0.35}
            sizeAttenuation
          />
        </points>
      </Float>
    </group>
  );
}
