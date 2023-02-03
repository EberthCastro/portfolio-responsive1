import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeScene = () => {
  const mount = useRef(null);
  const [sizes, setSizes] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const scene = new THREE.Scene();
    const geometry = new THREE.SphereGeometry(3, 34, 34);
    const material = new THREE.MeshStandardMaterial({ color: '#2800ab', roughness:0.6 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 5, 5);
    light.intensity = 2.25;
    scene.add(light);

    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 20;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas: mount.current });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(2)
    renderer.render(scene, camera);

    const controls = new OrbitControls(camera, mount.current);
    controls.enableDamping = true;
    controls.enablePan = false
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 10

    const loop = () => {
      controls.update()      
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    };
    loop();

    const tl = gsap.timeline({ defaults: { duration: 3 } });
tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
tl.fromTo(mesh.position, {x: 0}, {x: -1});

// const [mouseDown, setMouseDown] = useState(false);
let mouseDown = false;
let rgb = [];
window.addEventListener("mousedown", () => (mouseDown = true));
window.addEventListener("mouseup", () => (mouseDown = false));

window.addEventListener("mousemove", (e) => {
  if (mouseDown) {
    rgb = [
      Math.round((e.pageX / sizes.width) * 255),
      Math.round((e.pageX / sizes.height) * 255),
      150,
    ];
    const newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
    gsap.to(mesh.material.color, {
      r: newColor.r,
      g: newColor.g,
      b: newColor.b,
    });
  }
});
    

    window.addEventListener('resize', () => {
      setSizes({ width: window.innerWidth, height: window.innerHeight });
      camera.aspect = sizes.width / sizes.height;
      // camera.aspect = 100 / 100;
      camera.updateProjectionMatrix();
      renderer.setSize(100, 100);
    });

    window.requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, [sizes]);

  return <canvas className="webgl" ref={mount}  style={{width: "50px", height: "50px"}} />;
};

export default ThreeScene;
