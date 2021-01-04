//Nav bar

function stickyNav(){
    
    window.addEventListener('scroll', function(){
        var nav = document.querySelector('.main-nav-header');
        nav.classList.toggle('sticky', window.scrollY > 0);
    });
}

export default stickyNav