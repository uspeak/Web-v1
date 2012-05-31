var arrayFatFingerGame = new Array();

var list = new Array(); // array for scatter words

var currentWordFatFinger;
var onlyLetters='';

// Main Vars
var wordNumber=-1;
var points =0;
var lives=3;

var marches;

//used for me only

function startfatFingerGame(){
  if (wordNumber <  1){
    $("#body_game").load(PARTIAL_URLS.fatfinger, null, function(){
      startGame('processFatFingerGame');
    });
            
    $('#rightControl').html('<div id="btn_pause" class="btn_pause"> PAUSE</div>\n\
      <div id="btn_volume" class="btn_volume" > VOLUME</div>');         
  }
  $('#score').text(points);
  
  if ( arrayFatFingerGame.length !== 0) {
    efectPreGame(function(){
      $('#fancyClock').tzineClock(60)
    })
  }
  
}

function processFatFingerGame(){

  if (totalWords > 0) {
    if (wordNumber < totalWords)  {
      processRounds();

      currentWord++;

      i = wordNumber;

      //    write the main word
      $('#wordFinger').text(arrayFatFingerGame[i][1]);

      // save Current Id
      currentId=  arrayFatFingerGame[i][0];

      // Word to order
      currentWordFatFinger = arrayFatFingerGame[i][2];

      //    remove the word spaces and save en other var
      var arrayEmptySpace= emptySpace();
    

      // create the dash table
      newDimanicTable(currentWordFatFinger.length, 'dash_table', 'top_Finger', arrayEmptySpace);

      //create the letters tables
      newDimanicTable(currentWordFatFinger.length, 'letter_table', 'bottom_Finger', arrayEmptySpace);

      //filler both tables
      fillDinamicTable(onlyLetters.length, 'dash_table');
      fillDinamicTable(onlyLetters.length, 'letter_table');
      dragAndDrop();
     
      bindClick();
       
    }else {     
      processNextGame();
    }
        
        
    //Test which one word
    wordNumber++;
  }else {
    alert ('No hay Palabras Cargadas');
    processEndGame();
  }
}



function newDimanicTable(size, id_table, place, arrayEmptySpace){
  var dinamicTable = '<table id="' + id_table + '"> <tr>';
  var dinamicDiv = '';
  var auxi = 0;
  var random_id = scatter(size);
  var width= '79';
  var height = '79'

  for (i=0; i<size; i++){
    if ((arrayEmptySpace.indexOf(i) == -1) ){
      if(id_table == 'dash_table'){
        dinamicTable += '<td id='+ id_table + auxi + ' class=" cell'+ place +'" WIDTH="' + width + 'px" height="' + height + 'px" > </td>'
        auxi++;
      } else {
        dinamicDiv += '<div id='+ id_table + auxi + ' class=" cell'+ place +'" WIDTH="' + width + 'px" height="' + height + 'px" > </div>'
        auxi++;
      }
    }else if(id_table == 'dash_table'){
      dinamicTable += '<td class="empty_td" WIDTH="' + width + 'px"> </td>'
    }
  }
       
  dinamicTable += '</tr> </table>'
    
  if(id_table == 'dash_table') {
    document.getElementById(place).innerHTML=(dinamicTable)
  }else{
    document.getElementById(place).innerHTML=(dinamicDiv)
        
    margin = (960 - (79 *size))/2
    $('#bottom_Finger').css({
      'padding-left': margin + 'px',
      'width': (960 - margin) + 'px'
    });  
  }
}

function fillDinamicTable(size, id_table){
  var random_id = scatter(size);
    
  for (i=0; i<size; i++ ){
    id= id_table + random_id[i];
        
    if (id_table == 'dash_table'){
      //            document.getElementById(id).innerHTML=('_')
      document.getElementById( id_table + i).innerHTML=(onlyLetters[i]);
    } else {
      document.getElementById(id).innerHTML=(onlyLetters[i]);
    }
  }  
}


function emptySpace(){
  var space= '';
  onlyLetters='';
    
  for (i=0; i< currentWordFatFinger.length; i++ ){
    if (currentWordFatFinger[i] == ' '){
      space += i;
    } else {
      onlyLetters += currentWordFatFinger[i];
    }
  }
    
  //    initilize var matches
  matches = onlyLetters.length;
    
  return(space);
}

function processMatches(){
  matches--;
    
  if (matches  == 0){
    
    clearInterval(clockInterval);
    processPoints()
    messageEffect('fatFinger')
    $('#fancyClock').tzineClock(30)

      
    
    
    
  }
}



function bindClick(){
  
  var handler=0
  
  $('.cellbottom_Finger').bind('dblclick', function() {

    var letter = $('#' + this.id).text();
    
    var emptyPlace = $('#dash_table'+handler).text();
    var idEmptyPlace = '#dash_table'+handler;
    
    if (emptyPlace === letter){
      
      
       
      processMatches()
      //                 change style drop cell      
      $(idEmptyPlace).css({
        
        'text-indent':' 0px',
        'background-image': "url('/media/img/v1/games/piece.png') "
      });
                
      //        //                hidden cell draggable
      $('#' + this.id).css({
        
        'text-indent':' -9999px',
        'background':'none'
      });
      
      handler++;
      
      $('#' + this.id).unbind('dblclick');
      
      
    }else{
          
      processLives();
          
    }
           
  });
}