"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

export function IngredientOrb() {
  const orbRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      orbRef.current.rotation.y += 0.01
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.005
    }
  })

  // Create ingredient particles around the orb
  const ingredients = [
    { position: [2, 1, 0], color: "#8b5cf6", size: 0.1 }, // Purple - spice
    { position: [-2, 0.5, 1], color: "#14b8a6", size: 0.08 }, // Teal - herb
    { position: [1, -1.5, -1], color: "#ec4899", size: 0.12 }, // Magenta - flower
    { position: [-1, 2, 0.5], color: "#f59e0b", size: 0.09 }, // Amber - spice
    { position: [0, -2, 1.5], color: "#10b981", size: 0.07 }, // Emerald - herb
    { position: [1.5, 0, -2], color: "#f97316", size: 0.11 }, // Orange - spice
    { position: [-1.5, -1, -0.5], color: "#06b6d4", size: 0.08 }, // Cyan - herb
    { position: [0.5, 1.5, 2], color: "#d946ef", size: 0.1 }, // Fuchsia - flower
  ]

  return (
    <group>
      {/* Main Orb */}
      <Sphere ref={orbRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#1a1a1a"
          transparent
          opacity={0.8}
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>

      {/* Ingredient Particles */}
      <group ref={particlesRef}>
        {ingredients.map((ingredient, index) => (
          <Sphere
            key={index}
            position={ingredient.position as [number, number, number]}
            args={[ingredient.size, 16, 16]}
          >
            <meshStandardMaterial
              color={ingredient.color}
              emissive={ingredient.color}
              emissiveIntensity={0.3}
              transparent
              opacity={0.9}
            />
          </Sphere>
        ))}
      </group>

      {/* Glow Effect */}
      <Sphere args={[1.2, 32, 32]}>
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.1} side={THREE.BackSide} />
      </Sphere>
    </group>
  )
}
