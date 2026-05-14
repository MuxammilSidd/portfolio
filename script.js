
/* <=============================== Navabar ======================================= > */

gsap.to('nav',{
    y : '100px',
    duration : 1
})


/* <=============================== Herobox ======================================= > */

gsap.to('.top-bar',{
    top : '5%',
    opacity : 1,
    duration : 1
})

var HerosNames = document.querySelectorAll('.heros-names'); 

HerosNames.forEach(function(Names){
    var HeroNameText = Names.textContent.split('')
    var storage = ''
    HeroNameText.forEach(function(NameCharacter){
        storage += `<span>${NameCharacter}</span>`
    })
    Names.innerHTML = storage
})

gsap.to('.herobox-content-container .heros-names span',{
    x : '-80px',
    transform : 'rotateY(0deg)',
    duration : 1,
    opacity : 1,
    stagger : 0.04
})

gsap.to('.grid',{
    top : '8%',
    opacity : 1,
    duration : 1
})

var heroMainHeading = document.querySelector('.herobox-mainheading')
var heroMainHeadingText = heroMainHeading.textContent.split('')

var letterStorage = ''
heroMainHeadingText.forEach(function(letters){
    letterStorage += `<span>${letters}</span>`
})
heroMainHeading.innerHTML = letterStorage

gsap.to('.herobox h1.herobox-mainheading span',{
    x : '-150px',
    transform : 'rotateY(0deg)',
    duration : 1.5,
    opacity : 1,
    stagger : 0.04,
})

gsap.to('.red-circle',{
    scale : 1,
    opacity: 1,
    duration : 1
})

gsap.to('.character',{
    bottom : '0%',
    scale : 1,
    duration : 1
})

gsap.to('.herobox .hero-slider',{
    bottom : '30%',
    opacity : 1,
    duration : 1
})
/* Restored Hero Footer & Section 1 Animations */
gsap.to('.hero-footer',{
    bottom : '0%',
    opacity : 1,
    duration : 1,
    scrollTrigger :{
        trigger : '.hero-footer',
        start : 'top 90%'
    }
})

/* <=============================== Section 1 ======================================= > */

gsap.to('.marvel-studio',{
    top : '8%',
    duration : 1,
    opacity : 1,
    scrollTrigger :{
        trigger : '.section-1',
        start : 'top 80%'
    }
})

gsap.to('.date-status',{
    top : '8%',
    duration : 1,
    opacity : 1,
    filter : 'blur(0px)',
    scrollTrigger :{
        trigger : '.section-1',
        start : 'top 80%'
    }
})

gsap.to('.section1-right-top-description',{
    top : '8%',
    duration : 1,
    opacity : 1,
    filter : 'blur(0px)',
    scrollTrigger :{
        trigger : '.section-1',
        start : 'top 80%'
    }
})

gsap.to('.card-container',{
    top : '50%',
    transform : 'translate(-50%, -50%)',
    duration : 1,
    scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

/* CardStack Logic */
function initCardStack() {
    const cards = document.querySelectorAll('.card-container .card');
    if (!cards.length) return;
    
    let activeIndex = 0;
    const len = cards.length;
    let autoplayInterval;
    
    function renderCards() {
        cards.forEach((card, i) => {
            let off = i - activeIndex;
            // Wrap offset for seamless looping
            if (off > Math.floor(len / 2)) off -= len;
            if (off < -Math.floor(len / 2)) off += len;
            
            const abs = Math.abs(off);
            const isActive = off === 0;
            
            const zIndex = 100 - abs;
            const scale = isActive ? 1.03 : 0.94;
            const x = off * 150; // cardSpacing
            const y = abs * 10;
            const rotateZ = off * 15; // stepDeg
            const rotateX = isActive ? 0 : 10;
            
            card.style.cursor = isActive ? 'grab' : 'pointer';
            
            gsap.to(card, {
                x: x,
                y: isActive ? -20 : y,
                scale: scale,
                rotationZ: rotateZ,
                rotationX: rotateX,
                zIndex: zIndex,
                duration: 0.7,
                ease: "back.out(1.2)",
                opacity: abs > 2 ? 0 : 1 // maxVisible logic
            });
            
            card.onclick = () => {
                activeIndex = i;
                renderCards();
                resetAutoplay();
            };
        });
    }
    
    function resetAutoplay() {
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(() => {
            activeIndex = (activeIndex + 1) % len;
            renderCards();
        }, 3000);
    }
    
    // Initial State
    cards.forEach(card => {
        gsap.set(card, { opacity: 0, y: 100 });
    });
    
    ScrollTrigger.create({
        trigger: '.section-1',
        start: 'top 50%',
        onEnter: () => {
            renderCards();
            resetAutoplay();
        },
        once: true
    });
}
initCardStack();

gsap.to('.rating',{
    left : '60px',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.socials',{
    right : '60px',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})
gsap.to('.slider-left-indicator',{
    left : '0px',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.slider-right-indicator',{
    right : '0px',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 40%'
    }
})

gsap.to('.left-section1-content',{
    top : '52%',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 20%'
    }
})

var sectionOneFooterHeadings = document.querySelectorAll('.section-1FooterHeading'); 

sectionOneFooterHeadings.forEach(function(sectionOneFooterElement){
    var sectionOneFooterElementText = sectionOneFooterElement.textContent.split('')
    var sectionOneFooterStorage = ''
    sectionOneFooterElementText.forEach(function(sectionOneFooterElementLetters){
        sectionOneFooterStorage += `<span>${sectionOneFooterElementLetters}</span>`
    })
    sectionOneFooterElement.innerHTML = sectionOneFooterStorage
})


gsap.to('.section-1 .section-1FooterHeading span',{
    left : '0px',
    transform : 'rotateY(0deg)',
    duration : 1,
    opacity : 1,
    scrollTrigger :{
        trigger : '.section-1',
        start : 'top 10%'
    },
    stagger : 0.04
})

gsap.to('.section-1 p.section-1footer-date',{
    left : '60px',
    opacity : 1,
    duration : 1,
        scrollTrigger :{
        trigger : '.section-1',
        start : 'top 10%'
    }
})


/* <=============================== Section 2 ======================================= > */

gsap.to('.section2-counting',{
    top : '5%',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 80%'
    }
})

gsap.to('.section-2 h1.section-2-mainHeading',{
    scale : 1,
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 80%'
    }
})

gsap.to('.left-users',{
    left : '0px',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 80%'
    }
})

gsap.to('.mid-arrows',{
    scale : 1,
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 70%'
    }
})


gsap.to('.right-cd',{
    right : '0px',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.section-2',
        start : 'top 80%'
    }
})
gsap.to('.project-animate',{
    y : 0,
    scale : 1,
    filter : 'blur(0px)',
    duration : 1,
    opacity : 1,
    stagger : 0.2,
    scrollTrigger : {
        trigger : '.projects-grid',
        start : 'top 60%'
    }
})


gsap.to('.deadpool-character',{
    top : '146.5%',
    left:'35%',
    scale : 1.8,
    duration : 1,
    scrollTrigger : {
        trigger : '.footer',
        start : 'top 50%',
        end : 'bottom 100%',
        scrub : 1 
    },
})

/* <=============================== Three.js Background Effects ======================================= > */
const canvas = document.querySelector('#webgl-canvas');
if (canvas) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);

    const color1 = new THREE.Color(0xad1222); // Deadpool Red
    const color2 = new THREE.Color(0xffffff); // White

    for(let i = 0; i < particlesCount * 3; i+=3) {
        // Spread particles
        posArray[i] = (Math.random() - 0.5) * 15;
        posArray[i+1] = (Math.random() - 0.5) * 15;
        posArray[i+2] = (Math.random() - 0.5) * 15;

        // Mix colors
        const mixedColor = Math.random() > 0.5 ? color1 : color2;
        colorsArray[i] = mixedColor.r;
        colorsArray[i+1] = mixedColor.g;
        colorsArray[i+2] = mixedColor.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
    });

    // Animation Loop
    const clock = new THREE.Clock();

    const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        // Update objects
        particlesMesh.rotation.y = elapsedTime * 0.05;
        particlesMesh.rotation.x = elapsedTime * 0.02;

        // Mouse Parallax Effect
        camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.05;

        // Render
        renderer.render(scene, camera);

        // Call tick again on the next frame
        window.requestAnimationFrame(tick);
    }

    tick();

    // Handle Resize
    window.addEventListener('resize', () => {
        // Update camera
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
}

gsap.to('.footer-content',{
    scale : 1,
    opacity : 1,
    scrollTrigger : {
        trigger : '.footer',
        start : 'top 80%',
        end : 'bottom 100%',
        scrub : 1
    },
});

if(typeof camera !== 'undefined') {
    gsap.to(camera.position, {
        z: 1,
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 100%',
            end: 'bottom 100%',
            scrub: 1
        }
    });
}

/* Modal and Blur Overlay Logic */
function toggleProjectModal(card) {
    const isFlipped = card.classList.contains('flipped');
    
    // Close any already flipped cards smoothly
    if (document.querySelector('.project-card-ui.flipped')) {
        closeProjectModal();
        if (!isFlipped) {
            setTimeout(() => {
                card.classList.add('flipped');
                document.getElementById('blur-overlay').classList.add('active');
            }, 400); // Wait for the previous card to close
        }
        return;
    }
    
    if (!isFlipped) {
        card.classList.add('flipped');
        document.getElementById('blur-overlay').classList.add('active');
    }
}

function closeProjectModal() {
    document.querySelectorAll('.project-card-ui').forEach(c => c.classList.remove('flipped'));
    document.getElementById('blur-overlay').classList.remove('active');
}

/* Scroll Up Button Logic */
const scrollUpBtn = document.querySelector('.scroll-up-btn');
if (scrollUpBtn) {
    scrollUpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
