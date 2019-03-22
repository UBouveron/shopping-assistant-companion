import SmoothScroll from 'smooth-scroll';
import AOS from 'aos';
import lottie from 'lottie-web';

import butlerJson from './butler.json';

import 'aos/dist/aos.css';
import '@sass/main.scss';

import '@images/iPhoneX.svg';

// smooth scroll on click
new SmoothScroll('a[href*="#"]', {
  speed: 650,
  easing: 'easeOutQuad',
});

// scroll animations
AOS.init();

// intro character animation
lottie.loadAnimation({
  container: document.getElementById('illustration'),
  rendrer: 'svg',
  loop: true,
  autoplay: true,
  animationData: butlerJson
});

// loader

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.visibility = 'visible';
});