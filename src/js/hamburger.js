import {menuIcon, mainNav, hamLinks} from './utilities';

   
function hamburgerMenu(){

    //hamburger function
    function hamburger (){
        menuIcon.classList.toggle('change');
        mainNav.classList.toggle('change');
    }
  
    //when click on hamburger menu
    menuIcon.addEventListener('click', () => {
        hamburger();
    });
  
    //when click on links, hamburger menu closes
    for(var i =0 ; i<hamLinks.length;i++){
        hamLinks[i].addEventListener('click',()=>{
            hamburger();
        });
    }
}


export default hamburgerMenu