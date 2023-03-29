<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { ref, onMounted } from "vue";
// import model from "../../public/models/2023F2E-TEST.obj?url";
const model = new URL('../../models/2023F2E-TEST.obj', import.meta.url).href

const container = ref();

onMounted(() => {
  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
  camera.position.x = 30;
  camera.position.y = 20;
  camera.position.z = 30;

  const loader = new OBJLoader();
  loader.load(
    model,
    function (object) {
      console.log("model is onLoad");
      // const model = obj;

      object.traverse((child) => {
        if (child.material) child.material = new THREE.MeshToonMaterial({ color: 0x288E3E } );
      });
      object.position.set(0, -10, 0);
      object.scale.set(150, 150, 150);
      object.castShadow = true;
      scene.add(object);
    },
    undefined,
    function (error) {
      console.log("An error happened");
      console.log(error);
    }
  );

  const renderer = new THREE.WebGLRenderer({ antialias: true }, { alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.setSize(450, 450 / 2); // size
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.value.appendChild(renderer.domElement);
  renderer.setClearColor(0x000000, 0); // set transparent bg

  // attempt to add sadows
  const pmremGenerator = new THREE.PMREMGenerator(renderer);

  const scene = new THREE.Scene();

  scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 1).texture;

  // lightning and casting shadows
  const light = new THREE.DirectionalLight(0x52663c, 0.5); // soft white light
  light.position.set(15, 20, 0);
  light.target.position.set(0, 0, 0);
  light.castShadow = true;

  light.shadow.mapSize.width = 512; // default
  light.shadow.mapSize.height = 512; // default
  scene.add(light);
  scene.add(light.target);

  // helpers
  const controls = new OrbitControls(camera, renderer.domElement); // allow users to view around the model
  // controls.enablePan = false;
  controls.enableDamping = true; // adds a physic effect of "inertia" when spinning camera
  controls.maxPolarAngle = Math.PI / 2 - 0.3; // don't let user view below the ground, 0.3 is slightly above the base level
  controls.minDistance = 10; // don't let user zoom too close
  controls.maxDistance = 50; // don't let user zoom too far away

  controls.enableRotate = true;
  controls.rotateSpeed = 0.3; // set rotation speed of the mouse

  controls.autoRotate = true; // auto rotate
  controls.autoRotateSpeed = 5; // 30 seconds per orbit when fps is 60

  // grid helper
  const gridHelper = new THREE.GridHelper(200, 50); // add a grid
  // light helper
  const helper = new THREE.DirectionalLightHelper(light, 5);
  // scene.add(gridHelper);
  // scene.add(helper);

  const animate = () => {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;

    // const width = window.innerWidth / 2;
    // const height = window.innerHeight / 2;
    // camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(800, 400);

    controls.update();
    renderer.render(scene, camera);
  };
  animate();
});
</script>

<template>
  <div class="">
    <div id="threejs-container" ref="container" class="" />
  </div>
</template>

<style scoped>
#threejs-container {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
}

#threejs-container > canvas {
  display: inline;
}
</style>
