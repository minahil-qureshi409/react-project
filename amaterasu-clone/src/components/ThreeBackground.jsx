import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            currentMount.clientWidth / currentMount.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        currentMount.appendChild(renderer.domElement);

        const geometry = new THREE.IcosahedronGeometry(2, 1);
        const material = new THREE.MeshStandardMaterial({
            color: 0x5effff,
            wireframe: true,
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(10, 10, 10);
        scene.add(light);

        const animate = () => {
            mesh.rotation.x += 0.003;
            mesh.rotation.y += 0.003;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        // 🧹 Cleanup function
        return () => {
            if (currentMount && renderer.domElement) {
                currentMount.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div className="three-canvas" ref={mountRef} />;
};

export default ThreeBackground;
