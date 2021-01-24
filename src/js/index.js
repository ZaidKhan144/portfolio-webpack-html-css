import stickyNav from './nav'
import scrollEffect from './scroll'
import homeContent from './home'
import hamburgerMenu from './hamburger'
import projects from './projects'
import '../sass/main.scss'


console.log('hi');

AOS.init();     
stickyNav();
scrollEffect();
homeContent(); 
hamburgerMenu();  
projects();
