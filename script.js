import * as THREE from "three"

// Canvas
const canvas = document.querySelector("canvas.webgl")

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.TorusKnotGeometry(0.7, 0.2, 100, 16)
// const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshStandardMaterial()
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Light
 */
const ambientLight = new THREE.AmbientLight(0x0000ff, 0.5)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xff0000, 3)
pointLight.position.x = 1
pointLight.position.y = 1
pointLight.position.z = 1
scene.add(pointLight)

const pointLiht2 = new THREE.PointLight(0x00ff00, 3)
pointLiht2.position.x = -1
pointLiht2.position.y = -1
pointLiht2.position.z = 1
scene.add(pointLiht2)

/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)

/**
 * Animation
 */
const animate = () => {
	// // Rotate the mesh
	mesh.rotation.x += 0.005
	mesh.rotation.y += 0.005

	// Render the scene
	renderer.render(scene, camera)

	// Call animate recursively
	requestAnimationFrame(animate)
}

animate()
