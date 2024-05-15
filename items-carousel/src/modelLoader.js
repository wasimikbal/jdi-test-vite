import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


export const loadModel = (container, modelPath) => {
    
    //Fetching the canvas from html
    const canvas = document.getElementById(container)
    console.log(canvas)

    //Init scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('lightblue');

    //Loading the model
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      const model = gltf.scene;
      model.position.set(0, 0, 0);
      model.rotation.set(0,0.5,0)
      scene.add(model);
      console.log(model)
    });

    //Init camera
    const camera = new THREE.PerspectiveCamera(75, 300 / 300);
    camera.position.z = 5;
    scene.add(camera);

    //Add Light source
    const light = new THREE.DirectionalLight(0xfdfbd3, 1);
    light.position.y = 10;
    scene.add(light);

    // init renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvas })
    renderer.setSize(300, 300);
    renderer.render(scene, camera);
}