//      Load Panel Association Game
var word 
function startAssociationGame(){

  $.get(PARTIAL_URLS.association, {
    }, function(data){
      $("#body_game").html(data);
      startGame('processAssociationGame');
      $('#score').text(points);
      efectPreGame(function(){
        $('#fancyClock').tzineClock(associationClock)
      });
    });        
}

function processAssociationGame(){
    
  if (totalWords > 0) {
    for ( i=wordNumber; i==wordNumber; i++){
        
      currentId=  arrayAssociationGame[i][0];
            
      list = scatter(4);
        
      for (j=0; j<4; j++){
            
        if (list[j]==0){
                
          list[j]= 4
                
        }
            
        if (list[j]==1){
                
          list[j]= 5
                
        }
      }
        
      word = $.trim(arrayAssociationGame[i][2]); 
      $('#body_game').html( 

        '<div id="w" class="word" >' + arrayAssociationGame[i][1] +'</div> \n\
          <div id="d0" class="d0">' + arrayAssociationGame[i][list[0]] + '</div>\n\
          <div id="d1" class="d0">' + arrayAssociationGame[i][list[1]] + '</div> \n\
          <div id="d2" class="d0">' + arrayAssociationGame[i][list[2]] +' </div> \n\
          <div id="d3" class="d0"> ' + arrayAssociationGame[i][list[3]] + '</div>'

        );
        
      divCenterUp($('#w'))
      divLeftUp($('#d0'))
      divRightUp($('#d1'))
      divLeftBottom($('#d2'))
      divRightBottom($('#d3'))
      bindFunctionAssociation()
    }
  }else {
    alert ('No hay Palabras Cargadas');
    processNextGame();
  }
}

function divCenterUp(divName){
  divName.css({
    position:'absolute',
    left: ($(window).width() - divName.outerWidth())/2,
    top: ($(window).height() - divName.outerHeight())/4
  });
}

function divLeftUp(divName){
  divName.css({
    position:'absolute',
    left: ($(window).width() - divName.outerWidth())/3,
    top: ($(window).height() - divName.outerHeight())/2.5
  });
}

function divRightUp(divName){
  divName.css({
    position:'absolute',
    left: ($(window).width() - divName.outerWidth()*(2)),
    top: ($(window).height() - divName.outerHeight())/2.5
  });
}


function divLeftBottom(divName){
  divName.css({
    position:'absolute',
    left: ($(window).width() - divName.outerWidth())/3,
    top: ($(window).height() - divName.outerHeight()*(2.5))
  });
}

function divRightBottom(divName){
  divName.css({
    position:'absolute',
    left: ($(window).width() - divName.outerWidth()*(2)),
    top: ($(window).height() - divName.outerHeight()*(2.5))
  });
}

function bindFunctionAssociation(){
  
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
      distractor = ($('#'+this.id).html())
      div.css({
        'background-image': "url('/media/img/v1/error.png')"  
      });
      setTimeout(function(){
        startGame('1')
      }, 500)
    }
  })

}