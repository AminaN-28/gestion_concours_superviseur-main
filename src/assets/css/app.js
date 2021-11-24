const titreSpans = document.querySelectorAll('h1 span'); // selecteur sur le titre h1
const btns = document.querySelectorAll('.btn-first'); // sur les boutons
const logo = document.querySelector('.logo'); //le logo
const medias = document.querySelectorAll('.bulle'); //les medias des reseraux sociaux
const l1 = document.querySelector('.l1'); // ligne 
const l2 = document.querySelector('.l2');//ligne

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    
    

    TL.play();
})