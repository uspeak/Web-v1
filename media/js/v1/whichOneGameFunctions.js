
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
    <div id="d0" class="distractor" >' + arrayWhichOneGame[i][list[0]] + '</div>\n\
    <div id="d1" class="distractor" >' + arrayWhichOneGame[i][list[1]] + '</div> ');   
    
    
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
  
  $('.distractor').click(function(){
    var div = $('#'+this.id)
    var text=div.text().trim();
    if ( text === word){
      div.css({
        'background-image': "url('/media/img/v1/correctWhichOne.png')"
      });
      setTimeout(function(){
        startGame('2')
      }, 500)
    }
    else{
      div.css({
        'background-image': "url('/media/img/v1/errorWhichOne.png')"  
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
    top: ($(window).height() - divName.outerHeight())/2.5
  });
}

function divLeft(divName){
  divName.css({
    position:'absolute',
    left: (($(window).width() - $('#container').outerWidth())/2) + (($('#container').outerWidth()-(divName.outerWidth()*2))/3),
    top: ($(window).height() - ($('#footer_game').outerHeight()+ divName.outerHeight()))
  });
}

function divRight(divName){
  divName.css({
    position:'absolute',
    left: ((($(window).width() - $('#container').outerWidth())/2) ) + divName.outerWidth() + ((($('#container').outerWidth()-(divName.outerWidth()*2))/3)*2),
    top: ($(window).height() - ($('#footer_game').outerHeight()+ divName.outerHeight() ))
  });
}
