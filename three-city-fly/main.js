import * as THREE from 'three'

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a cube to the scene
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create a point light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Create an ambient light
const ambientLight = new THREE.AmbientLight(0x404040);  // dark grey
scene.add(ambientLight);

// Set initial camera position
camera.position.z = 5;

// Render the panoramic image back to the screen
var loader = new THREE.TextureLoader();
loader.load('image.jpg', function (texture) {
  var sphereGeometry = new THREE.SphereGeometry(500, 60, 40)
  var sphereMaterial = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide
  })
  sphereGeometry.scale(-1, 1, 1);
  var mesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(mesh);
  mesh.position.set(0, 0, 0)
})