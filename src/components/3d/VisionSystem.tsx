"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Line } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#64FFDA"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function Grid() {
  return (
    <gridHelper
      args={[20, 40, "#233554", "#1A2840"]}
      rotation={[0, 0, 0]}
      position={[0, -2, 0]}
    />
  );
}

function ScanLine() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      // Oscillate scan line up and down
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 3;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <planeGeometry args={[15, 0.02]} />
      <meshBasicMaterial color="#00D9FF" transparent opacity={0.6} />
    </mesh>
  );
}

function DetectionFrame() {
  const size = 3;
  const offset = 0.5;

  // Create corner bracket lines
  const corners: [number, number, number][][] = [
    // Top-left
    [
      [-size, size, 0],
      [-size + offset, size, 0],
    ],
    [
      [-size, size, 0],
      [-size, size - offset, 0],
    ],
    // Top-right
    [
      [size, size, 0],
      [size - offset, size, 0],
    ],
    [
      [size, size, 0],
      [size, size - offset, 0],
    ],
    // Bottom-left
    [
      [-size, -size, 0],
      [-size + offset, -size, 0],
    ],
    [
      [-size, -size, 0],
      [-size, -size + offset, 0],
    ],
    // Bottom-right
    [
      [size, -size, 0],
      [size - offset, -size, 0],
    ],
    [
      [size, -size, 0],
      [size, -size + offset, 0],
    ],
  ];

  return (
    <group>
      {corners.map((points, i) => (
        <Line key={i} points={points} color="#00D9FF" lineWidth={2} />
      ))}
    </group>
  );
}

export default function VisionSystem() {
  return (
    <div className="w-full h-[300px] md:h-[400px] relative">
      {/* Status overlay */}
      <div className="absolute top-4 left-4 z-10 font-[family-name:var(--font-mono)] text-xs">
        <div className="flex items-center gap-2 text-[var(--color-ui-success)]">
          <span className="w-2 h-2 rounded-full bg-[var(--color-ui-success)] animate-pulse" />
          <span>VISION_SYSTEM_ACTIVE</span>
        </div>
        <div className="text-[var(--color-text-tertiary)] mt-1">
          Mapping environment...
        </div>
      </div>

      {/* Detection info overlay */}
      <div className="absolute top-4 right-4 z-10 font-[family-name:var(--font-mono)] text-xs text-right">
        <div className="text-[var(--color-accent-blue)]">PARTICLES: 2000</div>
        <div className="text-[var(--color-text-tertiary)]">FPS: 60</div>
      </div>

      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <Grid />
        <ScanLine />
        <DetectionFrame />
      </Canvas>

      {/* Bottom overlay with coordinates */}
      <div className="absolute bottom-4 left-4 z-10 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-tertiary)]">
        <span>POS: [0.00, 0.00, 8.00]</span>
      </div>
    </div>
  );
}
