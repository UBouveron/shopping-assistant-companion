import SmoothScroll from 'smooth-scroll';
import AOS from 'aos';
import lottie from 'lottie-web';

import 'aos/dist/aos.css';
import '@sass/main.scss';

import '@images/iPhoneX.svg';

import butlerJson from './butler.json';

console.log(butlerJson);

new SmoothScroll('a[href*="#"]', {
  speed: 650,
  easing: 'easeOutQuad',
});

AOS.init();

const animation = lottie.loadAnimation({
  container: document.getElementById('illustration'),
  rendrer: 'svg',
  loop: true,
  autoplay: true,
  animationData: butlerJson
});