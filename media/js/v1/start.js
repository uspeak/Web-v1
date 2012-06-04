var imgCounter = 1;
var splashInterval;
$(document).ready(function() {
  splashInterval = setInterval('splash()', 100);
// bounce(".mini_rope_container")
});

function splash(){
  if(imgCounter < 36){
    $('#splash').append('<img src="'+ 'media/img/v1/splashscreen/splash_' + ++imgCounter + '.png" id="splash' + imgCounter + '" class="splash"  style="position:absolute; z-index: 999" />');
  //    if(imgCounter > 3){
  //      $('#splash' + (imgCounter - 2)).remove();
  //    }
  } else {
    //    $('#splash0').remove();
    $('.splash').remove();
    $('#splashBase').hide('explode', {
      pieces: 50
    }, 200 * ratio , function(){
      bounce(".mini_rope_container");
    });
    clearInterval(splashInterval);
  }
}
$(document).ready(function() {
  
  $('#buttonStartInner').bind('click', function() {
        
    beginDiagnostic(fillerWhichOne);
  })
  
  //Binding settings Buttons
  $('.buttonsActive').bind('click', function() {
    $('#'+this.id).toggleClass('buttonsDisable');   
    
  })
      
  //Binding login Setings Buttons
  $('#buttonLogin').bind('click', function() {
    getToken();
  })
  
})
