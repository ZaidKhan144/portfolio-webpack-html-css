import {allProjects, allModals, closeBtn, projectsWrapper, menuIcon, mainNav} from './utilities'


function projects(){

    //remove hamburger
    function removeHamburger(){
        menuIcon.classList.remove('change');
        mainNav.classList.remove('change');
    }

    //Mask Closing
    function closingMask(){
        var mask = document.getElementById('mask');
        mask.setAttribute('style','display:none');
    }
    
    //Project Wrapper remove
    function wrapperRemove(){
        const projectsWrapper = document.querySelector('.projectsWrapper');
        projectsWrapper.classList.remove("mOpen");
    }
    
    // Close btn of modals
    for(var i = 0; i<closeBtn.length;i++){
    
        closeBtn[i].addEventListener('click', function(){
            var x = this.parentElement;
            x.setAttribute('style','display:none;'); 
            x.classList.remove("show");
            closingMask();
            wrapperRemove();
        })
    }
    
    //hide modals function
    const hideModals = (e) => {
        allModals.forEach(x => x.classList.remove("show"));
    };
    
    //Open Modals
    for (var i = 0; i < allProjects.length; i++) {
    allProjects[i].addEventListener('click', function (e) {
    
        projectsWrapper.classList.add("mOpen"); 
        hideModals(e);
        var x = this.getAttribute('data-modal');
        var a = document.getElementById(x);
        a.classList.add("show");
        mask.setAttribute('style','display:block !important');
    
        //close mask when you click on it for projects
        if($('#mask').is(':visible')){
    
            // console.log('mask is showing');
        
                document.getElementById('mask').addEventListener('click',()=>{
                    closingMask();
                })
        }
        removeHamburger();
    });
    }
    
    //close outside model on click
    window.addEventListener('click', function(e) {
        wrapperRemove();
    }, true);
    
    //hide modals when click on mask
    document.getElementById('mask').addEventListener('click', function(e) {
        
        hideModals(e);

    }, true);
    
    //close modals on Escape
    document.addEventListener('keydown',(e)=>{
        
        if(e.key === 'Escape'){
            
            hideModals(e);
            wrapperRemove();
            closingMask();
            }
        }); 

}

export default projects