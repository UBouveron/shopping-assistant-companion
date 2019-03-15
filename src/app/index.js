import SmoothScroll from 'smooth-scroll';
import AOS from 'aos';

import 'aos/dist/aos.css';
import '@sass/main.scss';

import '@images/iPhoneX.svg';

new SmoothScroll('a[href*="#"]', {
  speed: 650,
  easing: 'easeOutQuad',
});

AOS.init();