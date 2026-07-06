"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Interactive particle cloud that follows and reacts to mouse
function InteractiveParticles() {
    const meshRef = useRef<THREE.Points>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const { viewport } = useThree();

    const count = 800;

    const [positions, basePositions, sizes, opacities] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const base = new Float32Array(count * 3);
        const s = new Float32Array(count);
        const o = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 2 + Math.random() * 6;
            const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 2;
            const y = (Math.random() - 0.5) * 8;
            const z = Math.sin(angle) * radius * 0.5 + (Math.random() - 0.5) * 3;
            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;
            base[i * 3] = x;
            base[i * 3 + 1] = y;
            base[i * 3 + 2] = z;
            s[i] = Math.random() * 0.04 + 0.01;
            o[i] = Math.random() * 0.5 + 0.2;
        }
        return [pos, base, s, o];
    }, []);

    const onPointerMove = useCallback((event: PointerEvent) => {
        mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }, []);

    // Attach mouse listener
    useMemo(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("pointermove", onPointerMove);
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("pointermove", onPointerMove);
            }
        };
    }, [onPointerMove]);

    useFrame((state) => {
        if (!meshRef.current) return;
        const geo = meshRef.current.geometry;
        const posAttr = geo.getAttribute("position");
        const t = state.clock.elapsedTime;

        const mx = mouseRef.current.x * viewport.width * 0.5;
        const my = mouseRef.current.y * viewport.height * 0.5;

        for (let i = 0; i < count; i++) {
            const bx = basePositions[i * 3];
            const by = basePositions[i * 3 + 1];
            const bz = basePositions[i * 3 + 2];

            // Gentle floating motion
            const floatX = Math.sin(t * 0.3 + i * 0.1) * 0.15;
            const floatY = Math.cos(t * 0.2 + i * 0.15) * 0.15;

            // Mouse repulsion/attraction
            const dx = bx + floatX - mx;
            const dy = by + floatY - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const force = Math.max(0, 1 - dist / 4);
            const pushX = dx * force * 0.8;
            const pushY = dy * force * 0.8;

            // Lerp smoothly
            const cx = posAttr.getX(i);
            const cy = posAttr.getY(i);
            const cz = posAttr.getZ(i);
            const targetX = bx + floatX + pushX;
            const targetY = by + floatY + pushY;
            const targetZ = bz + Math.sin(t * 0.1 + i * 0.05) * 0.1;

            posAttr.setXYZ(
                i,
                cx + (targetX - cx) * 0.05,
                cy + (targetY - cy) * 0.05,
                cz + (targetZ - cz) * 0.05
            );
        }
        posAttr.needsUpdate = true;

        // Slow global rotation
        meshRef.current.rotation.z = t * 0.015;
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={count}
                    array={sizes}
                    itemSize={1}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                color="#ffffff"
                transparent
                opacity={0.4}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

// Glowing orb that follows mouse with a smooth delay
function MouseFollowOrb() {
    const meshRef = useRef<THREE.Mesh>(null);
    const targetRef = useRef({ x: 0, y: 0 });
    const currentRef = useRef({ x: 0, y: 0 });
    const { viewport } = useThree();

    useMemo(() => {
        const handler = (event: PointerEvent) => {
            targetRef.current.x = ((event.clientX / window.innerWidth) * 2 - 1) * viewport.width * 0.4;
            targetRef.current.y = (-(event.clientY / window.innerHeight) * 2 + 1) * viewport.height * 0.4;
        };
        if (typeof window !== "undefined") {
            window.addEventListener("pointermove", handler);
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("pointermove", handler);
            }
        };
    }, [viewport]);

    useFrame((state) => {
        if (!meshRef.current) return;
        // Smooth follow
        currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.03;
        currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.03;
        meshRef.current.position.x = currentRef.current.x;
        meshRef.current.position.y = currentRef.current.y;

        // Pulsing scale
        const t = state.clock.elapsedTime;
        const pulse = 1 + Math.sin(t * 1.5) * 0.1;
        meshRef.current.scale.setScalar(pulse);
    });

    return (
        <mesh ref={meshRef} position={[0, 0, -2]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={0.03}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
}

// Subtle connecting lines between nearby particles
function AmbientGlow() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.elapsedTime;
        meshRef.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.05);
    });

    return (
        <mesh ref={meshRef} position={[0, 0, -5]}>
            <planeGeometry args={[20, 20]} />
            <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={0.015}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
}

function Scene() {
    return (
        <>
            <InteractiveParticles />
            <MouseFollowOrb />
            <AmbientGlow />
        </>
    );
}

export default function ThreeBackground() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                gl={{
                    antialias: false,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
                dpr={[1, 1.5]}
                style={{ background: "#000000" }}
            >
                <Scene />
            </Canvas>
        </div>
    );
}
