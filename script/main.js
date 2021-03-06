let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

let userlog = document.getElementById('userLog');
let close = document.getElementById('closeX');

userlog.addEventListener('click', functDisplay);
close.addEventListener('click', closeBox);

function functDisplay() {
    document.getElementById('id001').style.display = 'block';
}

function closeBox() {
    document.getElementById('id001').style.display = 'none';
}

let dispatch = document.getElementById('quesIn');
let disp = document.getElementById('servisIn');

dispatch.addEventListener('click', sendQues);

function sendQues() {

}

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(45, window.innerHeight / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

let renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
renderer.setClearColor(0x000000, 0);
renderer.setSize(1280, 720);

renderer.domElement.setAttribute("id", "gamePC");
document.body.insertBefore(renderer.domElement, document.body.firstChild);

const aLight = new THREE.AmbientLight(0x404040, 2.6);
scene.add(aLight);

const pLight = new THREE.PointLight(0xFFFFFF, 1.6);
pLight.position.set(0, -4, 7);
scene.add(pLight);

//const helper = new THREE.PointLightHelper(pLight);
//scene.add(helper);

let loader = new THREE.GLTFLoader();
let obj = null;

loader.load('./image/model/pc1/scene.gltf', function(gltf) {
    obj = gltf;
    obj.scene.scale.set(0.5, 0.6, 0.5);
    scene.add(obj.scene);
});

function animate() {
    requestAnimationFrame(animate);
    if (obj)
        obj.scene.rotation.y += 0.003;
    renderer.render(scene, camera);
}
animate();