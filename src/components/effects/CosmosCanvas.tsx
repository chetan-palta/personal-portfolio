"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const CosmosCanvas: React.FC<{ className?: string }> = ({ className = "" }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [webGlSupported, setWebGlSupported] = useState<boolean>(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Safe WebGL Support Check
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setWebGlSupported(false);
        return;
      }
    } catch (e) {
      setWebGlSupported(false);
      return;
    }

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let animationFrameId: number;

    try {
      // 2. Scene Setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        45,
        (container.clientWidth || window.innerWidth) / (container.clientHeight || window.innerHeight),
        0.1,
        1000
      );
      camera.position.z = 24;

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(container.clientWidth || window.innerWidth, container.clientHeight || window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);

      // 3. Central Core: Mathematical Geometric Singularity
      const coreGroup = new THREE.Group();
      scene.add(coreGroup);

      // Outer shell (Wireframe Icosahedron)
      const outerGeom = new THREE.IcosahedronGeometry(4.2, 1);
      const outerMat = new THREE.MeshBasicMaterial({
        color: 0x6366f1, // Electric indigo
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      });
      const outerMesh = new THREE.Mesh(outerGeom, outerMat);
      coreGroup.add(outerMesh);

      // Inner Core (Pulsing Dodecahedron)
      const innerGeom = new THREE.DodecahedronGeometry(2.4, 0);
      const innerMat = new THREE.MeshStandardMaterial({
        color: 0x0f111a,
        roughness: 0.2,
        metalness: 0.8,
        emissive: 0x8b5cf6, // Violet glow
        emissiveIntensity: 0.6,
        wireframe: true,
      });
      const innerMesh = new THREE.Mesh(innerGeom, innerMat);
      coreGroup.add(innerMesh);

      // 4. Concentric Orbital Rings
      const ringsGroup = new THREE.Group();
      scene.add(ringsGroup);

      const ringRadii = [6.2, 8.4, 10.8];
      const ringRotations = [
        { x: 0.4, y: 0.2, speed: 0.003 },
        { x: -0.3, y: 0.5, speed: -0.002 },
        { x: 0.6, y: -0.4, speed: 0.0015 },
      ];
      const orbitalRings: THREE.Line[] = [];

      ringRadii.forEach((radius, i) => {
        const ringGeom = new THREE.BufferGeometry();
        const points: THREE.Vector3[] = [];
        const segments = 120;
        for (let j = 0; j <= segments; j++) {
          const theta = (j / segments) * Math.PI * 2;
          points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
        }
        ringGeom.setFromPoints(points);

        const ringMat = new THREE.LineBasicMaterial({
          color: i === 0 ? 0x22d3ee : i === 1 ? 0x6366f1 : 0x8b5cf6,
          transparent: true,
          opacity: 0.45 - i * 0.08,
        });

        const ring = new THREE.Line(ringGeom, ringMat);
        ring.rotation.x = ringRotations[i].x;
        ring.rotation.y = ringRotations[i].y;
        ringsGroup.add(ring);
        orbitalRings.push(ring);

        // Glowing satellite node
        const nodeGeom = new THREE.SphereGeometry(0.14, 12, 12);
        const nodeMat = new THREE.MeshBasicMaterial({
          color: i === 0 ? 0x22d3ee : 0x8b5cf6,
        });
        const nodeMesh = new THREE.Mesh(nodeGeom, nodeMat);
        nodeMesh.position.set(radius, 0, 0);
        ring.add(nodeMesh);
      });

      // 5. Starfield: Depth-sorted cosmic particles
      const starCount = 800;
      const starGeom = new THREE.BufferGeometry();
      const starPositions = new Float32Array(starCount * 3);
      const starColors = new Float32Array(starCount * 3);

      const palette = [
        new THREE.Color(0xf8fafc), // Silver white
        new THREE.Color(0x6366f1), // Electric indigo
        new THREE.Color(0x22d3ee), // Cyan
        new THREE.Color(0x8b5cf6), // Violet
      ];

      for (let i = 0; i < starCount; i++) {
        const i3 = i * 3;
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = 12 + Math.random() * 32;

        starPositions[i3] = r * Math.sin(phi) * Math.cos(theta);
        starPositions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        starPositions[i3 + 2] = r * Math.cos(phi) - 6;

        const color = palette[Math.floor(Math.random() * palette.length)];
        starColors[i3] = color.r;
        starColors[i3 + 1] = color.g;
        starColors[i3 + 2] = color.b;
      }

      starGeom.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
      starGeom.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

      const starMat = new THREE.PointsMaterial({
        size: 0.18,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        sizeAttenuation: true,
      });
      const starField = new THREE.Points(starGeom, starMat);
      scene.add(starField);

      // 6. Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const indigoLight = new THREE.PointLight(0x6366f1, 5, 35);
      indigoLight.position.set(6, 6, 8);
      scene.add(indigoLight);

      const cyanLight = new THREE.PointLight(0x22d3ee, 4, 30);
      cyanLight.position.set(-8, -4, 6);
      scene.add(cyanLight);

      // 7. Mouse Listener
      const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
      const handleMouseMove = (e: MouseEvent) => {
        mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      // Resize Listener
      const handleResize = () => {
        if (!container || !renderer || !camera) return;
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", handleResize);

      // 8. Animation Loop
      let clock = new THREE.Clock();
      const animate = () => {
        const elapsedTime = clock.getElapsedTime();

        if (!prefersReducedMotion) {
          mouse.x += (mouse.targetX - mouse.x) * 0.04;
          mouse.y += (mouse.targetY - mouse.y) * 0.04;

          camera.position.x = mouse.x * 2.5;
          camera.position.y = mouse.y * 1.8;
          camera.lookAt(0, 0, 0);

          coreGroup.rotation.y = elapsedTime * 0.12;
          coreGroup.rotation.x = Math.sin(elapsedTime * 0.08) * 0.2;
          innerMesh.rotation.y = -elapsedTime * 0.22;
          innerMesh.rotation.z = Math.cos(elapsedTime * 0.15) * 0.3;

          const scale = 1 + Math.sin(elapsedTime * 1.2) * 0.035;
          coreGroup.scale.set(scale, scale, scale);

          orbitalRings.forEach((ring, idx) => {
            ring.rotation.z += ringRotations[idx].speed;
            ring.rotation.y += ringRotations[idx].speed * 0.5;
          });

          starField.rotation.y = elapsedTime * 0.015;
        }

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);

        try {
          outerGeom.dispose();
          outerMat.dispose();
          innerGeom.dispose();
          innerMat.dispose();
          starGeom.dispose();
          starMat.dispose();
          renderer.dispose();
          if (container && renderer.domElement && container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
          }
        } catch (cleanupErr) {
          // ignore cleanup issues
        }
      };
    } catch (threeErr) {
      console.warn("Three.js WebGL initialization encountered an error; falling back to CSS cosmos:", threeErr);
      setWebGlSupported(false);
    }
  }, []);

  return (
    <div
      ref={mountRef}
      className={`pointer-events-none absolute inset-0 z-[1] overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Fallback CSS Cosmos if WebGL is unavailable or failed */}
      {!webGlSupported && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Central CSS glowing core */}
          <div className="relative w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-indigo-electric/20 via-violet-deep/20 to-cyan-laser/20 blur-2xl animate-pulse-glow" />
          {/* Orbital Rings in pure CSS */}
          <div className="absolute w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] rounded-full border border-cyan-soft/30 animate-spin-very-slow" />
          <div className="absolute w-[460px] h-[460px] sm:w-[640px] sm:h-[640px] rounded-full border border-indigo-bright/25 animate-spin-reverse-slow" />
          <div className="absolute w-[560px] h-[560px] sm:w-[780px] sm:h-[780px] rounded-full border border-violet-soft/20 animate-spin-very-slow" />
        </div>
      )}
    </div>
  );
};

export default CosmosCanvas;
