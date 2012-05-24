
function startWhichOneGame(){

  startGame('processWhichOneGame');
  $('#score').text(points);
    
  efectPreGame(function(){
    $('#fancyClock').tzineClock(60)
  });
}


function processWichOneGame(){
    

    
  if (totalWords > 0)  {
        
        
    i=wordNumber
    currentId=  arrayWhichOneGame[i][0];
            
    list = scatter(2);
            
    //            transform value

    if (list[0]== '0'){
                
      list[0]=2;
      list[1]=3;
                
    }else {
                
      list[0]=3;
      list[1]=2;
                
    }
    word = $.trim(arrayWhichOneGame[i][2]);  
    
    $('#body_game').html('<div id="w" class="word" >' + arrayWhichOneGame[i][1] +'</div> \n\
    <div id="d0" class="d0" >' + arrayWhichOneGame[i][list[0]] + '</div>\n\
    <div id="d1" class="d0" >' + arrayWhichOneGame[i][list[1]] + '</div> ');   
    
    
    divCenter($('.word'));
    divLeft($('#d0'));
    divRight($('#d1'));   
    
    bindFunction()
    
  } else {
        
    alert ('No hay Palabras Cargadas')
    processNextGame();    
  }
}

function bindFunction(){
  
  $('.d0').click(function(){
    var div = $('#'+this.id)
    var text=div.text().trim();
    if ( text === word){
      div.css({
        'background-image': "url('/media/img/v1/correct.png')"
      });
      setTimeout(function(){
        startGame('2')
      }, 500)
    }
    else{
      div.css({
        'background-image': "url('/media/img/v1/error.png')"  
      });
      setTimeout(function(){
        startGame('1')
      }, 500)
    }
  })

}



function divCenter(divName){
  divName.css({
    position:'absolute',
    left: ($(window).width() - divName.outerWidth())/2,
    top: ($(window).height() - divName.outerHeight())/4
  });
}

function divLeft(divName){
  divName.css({
    position:'absolute',
    left: ($(window).width() - divName.outerWidth())/3,
    top: ($(window).height() - divName.outerHeight())/2.5
  });
}

function divRight(divName){
  divName.css({
    position:'absolute',
    left: ($(window).width() - divName.outerWidth()*(2)),
    top: ($(window).height() - divName.outerHeight())/2.5
  });
}
