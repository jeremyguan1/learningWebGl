import * as THREE from "three";

const scene = new THREE.Scene();
// scene.background = new THREE.Color({ color: 0xffffff });
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 1);

const light = new THREE.DirectionalLight(0xffffff);
scene.add(light);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  camera.position.x += 0.01;
  camera.position.z += 0.01;

  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}
animate();
