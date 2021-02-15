
function homeContent(){

    //delay home-content
$(document).ready(function(){
    setTimeout(function(){
      $('.home-content').slideUp( 300 ).delay( 400 ).fadeIn( 400 );
    });
  });
  
//delay title
  $(document).ready(function(){
    setTimeout(function(){
      $('.title').slideUp( 300 ).delay( 600 ).fadeIn( 400 );
    });
  });

}

export default homeContent