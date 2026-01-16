"use client";

import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Line } from "@react-three/drei";
import * as THREE from "three";
import Image from "next/image";

// Cyber text typing effect component
function CyberText({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState("");
  const [isGlitching, setIsGlitching] = useState(false);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?0123456789ABCDEF";

  const getRandomChar = useCallback(() => chars[Math.floor(Math.random() * chars.length)], []);

  useEffect(() => {
    let currentIndex = 0;
    let glitchCount = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        // Add glitch effect during typing
        if (glitchCount < 2) {
          setDisplayText(
            text.slice(0, currentIndex) +
            getRandomChar() +
            getRandomChar()
          );
          glitchCount++;
        } else {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
          glitchCount = 0;
        }
      } else {
        clearInterval(typeInterval);
        // Occasional glitch after complete
        const glitchInterval = setInterval(() => {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 100);
        }, 3000);
        return () => clearInterval(glitchInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [text, getRandomChar]);

  return (
    <span className={`${className} ${isGlitching ? 'opacity-70' : ''}`}>
      {displayText}
      <span className="animate-pulse">_</span>
    </span>
  );
}

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

function ScanLine({ isActive }: { isActive: boolean }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current && isActive) {
      // Oscillate scan line up and down
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 3;
    }
  });

  if (!isActive) return null;

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <planeGeometry args={[7, 0.05]} />
      <meshBasicMaterial color="#00D9FF" transparent opacity={0.6} />
    </mesh>
  );
}

function DetectionFrame() {
  const size = 2.2;
  const offset = 0.4;

  // Create corner bracket lines
  const corners: [number, number, number][][] = [
    // Top-left
    [
      [-size, size, 0.1],
      [-size + offset, size, 0.1],
    ],
    [
      [-size, size, 0.1],
      [-size, size - offset, 0.1],
    ],
    // Top-right
    [
      [size, size, 0.1],
      [size - offset, size, 0.1],
    ],
    [
      [size, size, 0.1],
      [size, size - offset, 0.1],
    ],
    // Bottom-left
    [
      [-size, -size, 0.1],
      [-size + offset, -size, 0.1],
    ],
    [
      [-size, -size, 0.1],
      [-size, -size + offset, 0.1],
    ],
    // Bottom-right
    [
      [size, -size, 0.1],
      [size - offset, -size, 0.1],
    ],
    [
      [size, -size, 0.1],
      [size, -size + offset, 0.1],
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


// Detection labels data
const detectionLabels = [
  { label: "HUMAN", confidence: 99.97, delay: 0 },
  { label: "ENGINEER", confidence: 85, delay: 450 },
  { label: "NICANOR", confidence: 89.02, delay: 900 },
];

export default function VisionSystem() {
  const [scanProgress, setScanProgress] = useState(0);
  const [detectionComplete, setDetectionComplete] = useState(false);

  // Animate scan progress
  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDetectionComplete(true);
          return 100;
        }
        return prev + 2;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[50vh] sm:h-[420px] md:h-[500px] relative overflow-hidden">
      {/* Status overlay */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 font-[family-name:var(--font-mono)] text-[10px] sm:text-xs">
        <div className="flex items-center gap-1.5 sm:gap-2 text-[var(--color-ui-success)]">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[var(--color-ui-success)] animate-pulse" />
          <span>VISION_SYSTEM_ACTIVE</span>
        </div>
        <div className="mt-0.5 sm:mt-1">
          {detectionComplete ? (
            <div className="space-y-0.5">
              <CyberText
                text="HUMAN DETECTED"
                className="text-[var(--color-accent-cyan)] block"
              />
              <CyberText
                text="THREAT LEVEL: ZERO"
                className="text-[var(--color-ui-success)] block"
              />
            </div>
          ) : (
            <span className="text-[var(--color-text-tertiary)]">Scanning...</span>
          )}
        </div>
      </div>

      {/* Detection info overlay */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 font-[family-name:var(--font-mono)] text-[10px] sm:text-xs text-right">
        <div className="text-[var(--color-accent-blue)]">
          {detectionComplete ? "DETECTION: COMPLETE" : `SCAN: ${scanProgress}%`}
        </div>
        <div className="text-[var(--color-text-tertiary)]">
          {detectionComplete ? "SUBJECT IDENTIFIED" : "ANALYZING..."}
        </div>
      </div>

      {/* 3D Canvas - particles, grid, scan line, detection frame */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <Grid />
        <ScanLine isActive={!detectionComplete} />
        <DetectionFrame />
      </Canvas>

      {/* Image overlay with CV-style scan effect - positioned in center of canvas */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="relative w-[310px] h-[310px] md:w-[270px] md:h-[280px]">

          {/* Scan line - FRONT (z-30) - glowing line that paints the image */}
          {!detectionComplete && (
            <div
              className="absolute left-[-10px] right-[-10px] h-[4px] z-30"
              style={{
                top: `${scanProgress}%`,
                background: 'linear-gradient(90deg, transparent, var(--color-accent-cyan), var(--color-accent-cyan), transparent)',
                boxShadow: `
                  0 0 15px var(--color-accent-cyan),
                  0 0 30px var(--color-accent-cyan),
                  0 0 45px rgba(0, 217, 255, 0.5)
                `,
              }}
            >
              {/* Scan line endpoints */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--color-accent-cyan)] rounded-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--color-accent-cyan)] rounded-full" />
            </div>
          )}

          {/* Unscanned area - dark placeholder */}
          <div
            className="absolute inset-0 bg-[var(--color-primary-light)] rounded-sm"
            style={{
              clipPath: `inset(${scanProgress}% 0 0 0)`,
              opacity: 0.8,
            }}
          />

          {/* Image being "painted" - revealed from top */}
          <div
            className="absolute inset-0 overflow-hidden rounded-sm"
            style={{
              clipPath: `inset(0 0 ${100 - scanProgress}% 0)`,
            }}
          >
            <Image
              src="/images/nic-robot.jpg"
              alt="Nicanor Korir"
              fill
              className="object-cover"
              style={{
                objectPosition: 'center 25%',
                filter: detectionComplete
                  ? 'grayscale(0) brightness(1)'
                  : `grayscale(${1 - scanProgress / 100}) brightness(${0.7 + (scanProgress / 100) * 0.3})`,
                transition: 'filter 0.3s ease',
              }}
              priority
            />

            {/* CV-style grid overlay - fades as scan progresses */}
            <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: Math.max(0, 0.4 - (scanProgress / 100) * 0.4),
                backgroundImage: `
                  linear-gradient(var(--color-accent-cyan) 1px, transparent 1px),
                  linear-gradient(90deg, var(--color-accent-cyan) 1px, transparent 1px)
                `,
                backgroundSize: '15px 15px',
              }}
            />

            {/* Scan effect gradient at the edge of reveal */}
            <div
              className="absolute left-0 right-0 h-8 pointer-events-none"
              style={{
                bottom: 0,
                background: 'linear-gradient(to top, transparent, rgba(0, 217, 255, 0.2))',
                opacity: detectionComplete ? 0 : 1,
              }}
            />
          </div>

          {/* Data extraction effect - horizontal lines appearing during scan */}
          {!detectionComplete && scanProgress > 10 && (
            <div className="absolute inset-0 overflow-hidden rounded-sm" style={{ clipPath: `inset(0 0 ${100 - scanProgress}% 0)` }}>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 h-[1px] bg-[var(--color-accent-cyan)]/20"
                  style={{
                    top: `${(i + 1) * 18}%`,
                    opacity: scanProgress > (i + 1) * 18 ? 0.3 : 0,
                  }}
                />
              ))}
            </div>
          )}

          {/* Scanning indicator dots at corners */}
          {!detectionComplete && (
            <>
              <div className="absolute -top-0.5 -left-0.5 sm:-top-1 sm:-left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--color-accent-cyan)] rounded-full animate-pulse z-20" />
              <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--color-accent-cyan)] rounded-full animate-pulse z-20" style={{ animationDelay: '0.2s' }} />
              <div className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--color-ui-success)] rounded-full animate-pulse z-20" style={{ animationDelay: '0.4s' }} />
              <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--color-ui-success)] rounded-full animate-pulse z-20" style={{ animationDelay: '0.6s' }} />
            </>
          )}
        </div>
      </div>

      {/* Bottom overlay with coordinates */}
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 font-[family-name:var(--font-mono)] text-[10px] sm:text-xs text-[var(--color-text-tertiary)]">
        <div>
          X: <span className={detectionComplete ? "text-[var(--color-ui-success)]" : ""}>{(Math.sin(scanProgress * 0.1) * 0.5).toFixed(3)}</span>
        </div>
        <div>
          Y: <span className={detectionComplete ? "text-[var(--color-ui-success)]" : ""}>{((scanProgress / 100) * 2 - 1).toFixed(3)}</span>
        </div>
        <div>
          Z: <span className={detectionComplete ? "text-[var(--color-ui-success)]" : ""}>{(8 - (scanProgress / 100) * 2).toFixed(3)}</span>
        </div>
        {detectionComplete && (
          <div className="text-[var(--color-ui-success)] mt-1 animate-fade-in">TARGET_LOCKED</div>
        )}
      </div>

      {/* Cheesy description on the right - appears after scan */}
      {detectionComplete && (
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 font-[family-name:var(--font-mono)] text-[10px] sm:text-xs text-right animate-fade-in max-w-[140px] sm:max-w-[180px]">
          <div className="text-[var(--color-accent-cyan)]">ACTIVITY:</div>
          <div className="text-[var(--color-text-secondary)] leading-tight mt-0.5">
            Nicanor teaching NAO robot to wave
          </div>
        </div>
      )}

      {/* Progress bar at bottom */}
      {!detectionComplete && (
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 w-24 sm:w-32">
          <div className="h-1 bg-[var(--color-ui-border)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--color-accent-cyan)] transition-all duration-100"
              style={{ width: `${scanProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Detection labels that appear after scan completes - desktop only */}
      {detectionComplete && (
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          {detectionLabels.map((det, i) => (
            <div
              key={det.label}
              className="absolute font-[family-name:var(--font-mono)] text-xs animate-fade-in"
              style={{
                left: i === 0 ? "12%" : i === 1 ? "72%" : "15%",
                top: i === 0 ? "25%" : i === 1 ? "50%" : "72%",
                animationDelay: `${det.delay}ms`,
              }}
            >
              <div className="flex items-center gap-2 bg-[var(--color-primary)]/90 px-2 py-1 rounded border border-[var(--color-accent-cyan)]/40">
                <span className="w-2 h-2 bg-[var(--color-ui-success)] rounded-full animate-pulse" />
                <span className="text-[var(--color-accent-cyan)]">{det.label}</span>
                <span className="text-[var(--color-ui-success)]">{det.confidence}%</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
