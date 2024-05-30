console.log('HELLO');
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three-orbitcontrols@2.110.3/OrbitControls.min.js';
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";

var scene,camera,renderer;

scene = new THREE.Scene();
scene.background = new THREE.Color(0xff5f0f);

camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight);
camera.position.set(0,100,1000);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// var controls = new OrbitControls(camera,renderer.domElement);
// controls.update();

var abint = new THREE.AmbientLight(0x555500)
scene.add(abint)
var loader = new GLTFLoader();
loader.load('scene.gltf', function(gltf){
    gltf.scene.scale.set(50,50,50);
    scene.add(gltf.scene);
})

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}
animate();