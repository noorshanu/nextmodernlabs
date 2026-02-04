"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere({
    position,
    scale,
    color,
    speed = 1,
    distort = 0.3
}: {
    position: [number, number, number];
    scale: number;
    color: string;
    speed?: number;
    distort?: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere ref={meshRef} args={[1, 64, 64]} scale={scale} position={position}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={distort}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    transparent
                    opacity={0.8}
                />
            </Sphere>
        </Float>
    );
}

function GlowingSphere({
    position,
    scale,
    color
}: {
    position: [number, number, number];
    scale: number;
    color: string;
}) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.elapsedTime;
            meshRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.3;
            meshRef.current.position.x = position[0] + Math.cos(t * 0.3) * 0.2;
        }
    });

    return (
        <mesh ref={meshRef} position={position} scale={scale}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={2}
                transparent
                opacity={0.9}
                toneMapped={false}
            />
        </mesh>
    );
}

function ParticleField() {
    const points = useRef<THREE.Points>(null);

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(200 * 3);
        for (let i = 0; i < 200; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (points.current) {
            points.current.rotation.y = state.clock.elapsedTime * 0.02;
            points.current.rotation.x = state.clock.elapsedTime * 0.01;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={200}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#06b6d4"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

function Scene() {
    return (
        <>
            {/* Ambient lighting */}
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />

            {/* Main distorted spheres */}
            <AnimatedSphere
                position={[3, 1, -2]}
                scale={1.5}
                color="#0891b2"
                speed={0.8}
                distort={0.4}
            />
            <AnimatedSphere
                position={[-3, -1, -3]}
                scale={1.2}
                color="#14b8a6"
                speed={1.2}
                distort={0.3}
            />
            <AnimatedSphere
                position={[0, 2, -4]}
                scale={0.8}
                color="#0d9488"
                speed={1}
                distort={0.5}
            />

            {/* Glowing orbs */}
            <GlowingSphere position={[2, -1.5, -1]} scale={0.3} color="#22d3ee" />
            <GlowingSphere position={[-2, 1.5, -2]} scale={0.25} color="#2dd4bf" />
            <GlowingSphere position={[4, 0.5, -3]} scale={0.2} color="#06b6d4" />
            <GlowingSphere position={[-4, -1, -2]} scale={0.15} color="#14b8a6" />

            {/* Particle field */}
            <ParticleField />
        </>
    );
}

export default function ThreeBackground() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance"
                }}
                dpr={[1, 2]}
            >
                <color attach="background" args={["#0f172a"]} />
                <fog attach="fog" args={["#0f172a", 5, 25]} />
                <Scene />
            </Canvas>
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/60 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/40 pointer-events-none" />
        </div>
    );
}
