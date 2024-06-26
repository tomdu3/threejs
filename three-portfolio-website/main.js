import * as THREE from 'three';

// Creating the scene
const scene = new THREE.Scene();

// Creating the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 0.23;
camera.position.x = 0.0046;
camera.position.y = 0.0046;

// Creating the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('app').appendChild(renderer.domElement);

// Set the background colour of the scene
renderer.setClearColor('#1d1135');

