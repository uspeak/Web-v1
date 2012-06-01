/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var ratio =  6;

var volume=1;
var game;
var namesGames = ' processAssociationGame - processFatFingerGame - processWhichOneGame'
var nameCurrentGame = 'processWhichOneGame';
var totalWords = 15;

//One Array for Game
var arrayAssociationGame = new Array();
var arrayFatFingerGame = new Array();
var arrayWhichOneGame = new Array();

var list = new Array(); // array for scatter words

// Main Vars
var wordNumber=-1;
var points =0;
var lives=3;
var currentId=1;
var diagId;
var errors= new Array();


function transition(oldContainer, newContainer){
  $(oldContainer).hide('slide', {
    direction: "left" 
  }, 100 * ratio, function(){
    $(newContainer).show('slide', {
      direction: "right"
    }, 100 * ratio);
  });
  
}

//Create 3 array whivh "Results", 1 for each game
function loadWords(results){
  
 

  for (var game in results ){ //TODO: Optimizar la asignación y uso de los resultados.
    diagId = game
    
    if(results[game][0]){
      i=0;
      $.each(results[game][0][116], function(index ,element){
        var words= new Array(4);    
        words[0]= element.id
        words[1]= element.w
        words[2]= element.m
        words[3]= element.d1

        arrayWhichOneGame[i]=words;
        i++;
      }); 
    }

    if(results[game][1]){
      j=0;
      $.each(results[game][1][115], function(index ,element){
        var words= new Array(6);    
        words[0]= element.id
        words[1]= element.w
        words[2]= element.m
        words[3]= element.d1
        words[4]= element.d2
        words[5]= element.d3

        arrayAssociationGame[j]=words;
        j++;
      });
    }
    
    if(results[game][2]){
      k=0;
      $.each(results[game][2][117], function(index ,element){
        var words= new Array(3);    
        words[0]= element.id
        words[1]= element.w
        words[2]= element.m
        arrayFatFingerGame[k]=words;
        k++;
      });
    }
  }

}

function startGame(choose){
  wordNumber++;

  if (namesGames.indexOf(choose) == -1 ){
    if (choose == '2'){
            
      processPoints();
         
    }else {
        
      processLives();
            
    }
        
        
  }else {
        
    //            this statement is execute only when each game starts
        
    //            save current game
    nameCurrentGame = choose;
            
    processName();
    currentWord = 1;
                
  }
    
 
  //    update the current rounds
  if (totalWords >= currentWord){
    processRounds()
  }
  //    function according to current game run

  $('#gameName').text(game);
    
    
  if (totalWords < currentWord) {
            
    messageEffect('congrats')
            
  } else if(lives !== 0) {
    
    switch (nameCurrentGame){
        
      case 'processWhichOneGame':
        processWichOneGame();
        break;
            
      case "processAssociationGame":
        processAssociationGame();
        updateLives();
        break;
        
      case 'processFatFingerGame':
        processFatFingerGame();
        updateLives();
        break;
    }
  }

  if (nameCurrentGame !== 'processFatFingerGame' ){
    currentWord++;
  }
}

function processName(){
    
  //           save number of words stored 
            
  switch (nameCurrentGame){
        
    case "processAssociationGame":
      totalWords=  arrayAssociationGame.length;
                
      if(language != 1) {
                    
        game = 'Associacion'
                                        
      }else {
                    
        game = 'Association'
                    
      }
      //                beginTime(30)
      break;
        
    case 'processWhichOneGame':
      totalWords= arrayWhichOneGame.length;
      if(language != 1) {
                    
        game = '¿Cual?'
                                        
      }else {
                    
        game = 'Which One?'
                    
      }
      //                beginTime(20)
      break;

    case 'processFatFingerGame':
      totalWords= arrayFatFingerGame.length;
      if(language != 1) {
                    
        game = 'Dedo Gordo'
                                        
      }else {
                    
        game = 'Fat Finger'
                    
      }
      break;
                
    default:
      //  processAssociationGame();
      break;
  }
    
    
    
}

function restartGame(){
    
  wordNumber = -1;
  points = 0;
  lives = 3;
  currentId = 1;
  document.getElementById('lives').innerHTML=(lives +'/3');
  loadMainPanel()
    
}


function processEndGame(){
  
  clearInterval(clockInterval);
  userRegistration()
    
}

function processRounds(){
    
  $('#numberRounds').text(currentWord +'/'+totalWords);
    
}

function processPoints(){
    
  points= points + 50;
  $('#score').text(points);
}

function processLives(){
   
  errors.push(currentId);

  lives=lives-1;
  
  if (lives == 0){
    messageEffect('lives')
  
  }
  updateLives();
}   
     
     
function updateLives(){
  switch (lives){
    
    case 2:
      $('#heart3:visible').hide('scale', null, 1000);
      break;
            
    case 1:
      $('#heart3:visible').hide('scale', null, 1000);
      $('#heart2:visible').hide('scale', null, 1000);
      break;
        
    case 0:
      $('#heart3:visible').hide('scale', null, 1000);
      $('#heart2:visible').hide('scale', null, 1000);
      $('#heart1:visible').hide('scale', null, 1000);
      lives = 0;
      //            processEndGame();
      break;
  }
}

//    Load Main Panel
    
function loadMainPanel(fillterfunction){
    
  $.get(PARTIAL_URLS.mainpanel, {
    }, function(data){
      $("#container").html(data);
      fillterfunction();
    });     
}

function loadGame(){
  transition('#screen1', '#screen2');
}

function processNextGame(){
  
  clearInterval(clockInterval);
  wordNumber = -1;
  
  if (level != 1){
    switch (nameCurrentGame){
        
      case 'processWhichOneGame':
        nameCurrentGame = 'processAssociationGame';
        beginDiagnostic(fillerAssociation)
        break;
            
      case "processAssociationGame":
        nameCurrentGame = 'processFatFingerGame';
        beginDiagnostic(fillerFatFinger)
        break;  
            
      case 'processFatFingerGame':
        nameCurrentGame = 'complete';
        processEndGame()
        break;
    }
  }else {
    nameCurrentGame = 'complete';
    userRegistration()
    
    
  }
}


function processBackGame(){
    
  wordNumber = -1;
  
  switch (nameCurrentGame){
        
    case 'processWhichOneGame':
      location.reload();
      break;
            
    case "processAssociationGame":
      nameCurrentGame = 'processWhichOneGame';
      beginDiagnostic(fillerWhichOne)
      break;  
            
    case 'processFatFingerGame':
      nameCurrentGame = 'processAssociationGame';
      beginDiagnostic(fillerAssociation)
      break;
  }     
}

function processSound(){
    
  if (volume== 1){
    $('#btn_volume').css({  
      'background-image': "url('/media/img/v1/no_volume.png')"
            
    });
    volume=0;
  }else{
    $('#btn_volume').css({  
      'background-image': "url('/media/img/v1/volume.png')"
    })
    volume=1;
  }
}



function beginDiagnostic(fillterFunction){
  //    //    save level chossed
  //    level=levelChoosed;
  //    if (level != 1){
    
  getWords()
  $.get(PARTIAL_URLS.pregamescreen, {
    }, function(data){
      $("#container").html(data);
      fillterFunction();
    });
        
//    }else { 
//        nameCurrentGame = 'complete';
//        userRegistration()
//    
//    }
    
//    var button = <input  type="submit" value="BEGIN" onclick="beginMainScreenAssociation(2);" style="background:url("/media/img/v1/beginButton.png"); width: 133px; height: 40px; text-indent: -99999px" />
//    document.getElementById('text_bottom').innerHTML=('');
  
//    document.getElementById('mini_central_text').innerHTML=(' <button onclick="beginMainScreenAssociation(1);" >Spanish</button>\n\
//    <button onclick="beginMainScreenAssociation(2);">English</button>//') ;
    
}

function fillerWhichOne(){
    
  $('#container').css({
    'background-image': 'url("/media/img/v1/whichOne_background.png")'
  });
    
  $('#title_top').text("¡Que comience el juego!");
    
  $('#text_top').text(' Tómate tu tiempo y cuida tus vidas - solo tienes tres');
    
  $('#text_bottom').text("Y acuerdate, si no sabes esta bien, vamos de a poco...");
       
  $('#text_bottom_image').text("Veras que es facil, como pan comido.");
    
  $('#buttonStart').html("<div id='buttonStartInner' class='buttonStartInner'  onclick='loadMainPanel(startWhichOneGame);'> LET'S GO! </div> ");

  $('.imageGame').css({
    'background-image': "url('/media/img/v1/imageWhichone.png')"
  });
     
}

function fillerAssociation(){
   
  $('#container').css({
    'background-image': 'url("/media/img/v1/association_background.png")'
  });
   
  $('#title_top').text("¡Buen Trabajo!");
    
  $('#text_top').text("Ahora vamos a agregar algunos distractores más para no perder el ritmo");
    
  $('#text_bottom').text("");
       
  $('#text_bottom_image').text("descarta los distractores y elige la respuesta correcta");
    
  $('#buttonStart').html("<div id='buttonStartInner' class='buttonStartInner'  onclick='loadMainPanel(startAssociationGame);'> LET'S GO! </div> ");

  $('.imageGame').css({
    'background-image': "url('/media/img/v1/imageAssociation.png')"
  });
    
}

function fillerFatFinger(){
    
  $('#container').css({
    'background-image': 'url("/media/img/v1/fatFinger_background.png")'
  });
  $('#title_top').text("¡Impresionante!");
    
  $('#text_top').text('Completa este juego sin perder tus vidas y comenzarás a aprender con el nivel más alto.');
    
  $('#text_bottom').text(" ");
       
  $('#text_bottom_image').text("Elige las letras y Escribe la palabra. ");
    
  $('#buttonStart').html("<div id='buttonStartInner' class='buttonStartInner'  onclick='loadMainPanel(startfatFingerGame);'> LET'S GO! </div> ");

  $('.imageGame').css({
    'background-image': "url('/media/img/v1/imageFatfinger.png')"
  });
    
}

function beginAssociation(){
    
  //    //    save level chossed
  //    level=levelChoosed;

  $('#title_top').text("We're going to start off gently");
    
  $('#text_top').text('Take your time, conserve your lives and remember,\n\
    not knowing is FINE! One step and a time... ');
    
  $('#text_bottom').text("let the games being...");
    
  $.get(PARTIAL_URLS.gamesscreen, {
    }, function(data){
      $("#mini_central_text").html(data);
    }); 
       
  $('#buttonStart').html("<div id='buttonStartInner' class='buttonStartInner'  onclick='beginMainScreenAssociation(1);'> Cesar </div> ");
        
//    var button = <input  type="submit" value="BEGIN" onclick="beginMainScreenAssociation(2);" style="background:url("/media/img/v1/beginButton.png"); width: 133px; height: 40px; text-indent: -99999px" />
//    document.getElementById('text_bottom').innerHTML=('');
  
//    document.getElementById('mini_central_text').innerHTML=(' <button onclick="beginMainScreenAssociation(1);" >Spanish</button>\n\
//    <button onclick="beginMainScreenAssociation(2);">English</button>//') ;
    
}


function scatter(number){
 
  var list = new Array(number);
  var value;
  var flag
    
  for(ind = 0; ind < number;) {
        
    value = Math.round(Math.random() * (number-1));
        
    flag = true;
        
    for (j=0; j < number; j++){
            
      if ( list[j]== value ){
                
        flag = false
      }
    }            
        
        
    if(flag){
                
      list[ind]=value
      ind++
    }
        
  }
  return(list)
} 

        
function loadMainScreen(){
  $.get(PARTIAL_URLS.pregamescreen, {
    }, function(data){
      $("#container").html(data);
    });
}


function userRegistration(){
    
  $.get(PARTIAL_URLS.pregamescreen, {
    }, function(data){
      $("#container").html(data);
            
      $('#container').css({
        'background-image': 'url("/media/img/v1/login_background.png")'
      });
            
            
      $('#title_top').text('Diagnostic Complete')
      $('#text_top').text('Tu Mapa de Lenguaje ha sido creado. \n\
  Ahora, tómate unos segundos y completa los siguientes campos de información, \n\
podrás monitorear tu progreso y acceder a uSpeak a través de distintos dispositivos');

      $.get(PARTIAL_URLS.userregister, {
        }, function(data){
    
          $("#mini_central_text").html(data);

          $('#buttonStart').html("<div id='buttonStartInner' class='buttonStartInner'  onclick='getProfile();'> LISTO </div> ");

          
        //                    $('#buttonStartInner').css({
        //    
        //                        'background-image': "url('/media/img/v1/login_button_go.png')" 
        //                    })
        });

    });

}

function nextLevel(){
  
  switch (level){
    
    case 1:
      changeLevel(2)
      break;
            
    case 2:
      changeLevel(3)
      break;
    
    case 3:
      changeLevel(1)
      break;
            
  }
  
  
}

function backLevel(){
  
  switch (level){
    
    case 1:
      changeLevel(3)
      break;
            
    case 2:
      changeLevel(1)
      break;
    
    case 3:
      changeLevel(2)
      break;
            
  }
  
  
}

function changeLevel(n){

  level = n;
    
  for(i=1; i<4; i++){
    $('#level' + i).css({
      'background-image': "url('/media/img/v1/banner_info/point_unselected.png')"
    });
  }
   
   
  $('#level' + n).css({
    'background-image': "url('/media/img/v1/banner_info/point_selected.png')"
  });


  switch (n) {
    case 1:
      $('#titleLevel').text('nothing')
      $('#textLevel2').text('"Soy un Principiante Total"') 
      break;
            
    case 2:
      $('#titleLevel').text('a little')
      $('#textLevel2').text('"Tengo un vocabulario basico"')
      break;
            
    case 3:
      $('#titleLevel').text('a lot')
      $('#textLevel2').text('"Me expreso libremente"')
      break;
  }

}

function efectPreGame(theCallback){
  
  var div = $('#screen6');
  div.css({
    'background-image': "none",
    'background-color': "white",
    position:'absolute',
    left: ($(window).width() - div.outerWidth())/2,
    top: '0px'
  }).show()
  
  
  
  var delayTime = 100 * ratio;
  var effectDiv = $( "#effect" );
  doEffect(steady);
  ////
  //callback function to bring a hidden box back
  function steady() {
    setTimeout(function() {
      effectDiv.hide('explode', {
        pieces: 64
      }, 50 * ratio).text('Steady').css({
        'color': 'orange'
      });
      doEffect(go);
    }, delayTime);
  
  }
  function go() {
    setTimeout(function() {
      effectDiv.hide('explode', {
        pieces: 64
      }, 50 * ratio).text('Go!').css({
        'color': 'green'
      });
      doEffect(hidden);
    }, delayTime);
  }
  function hidden() {
    setTimeout(function() {
      effectDiv.hide('explode', {
        pieces: 64
      }, 50 * ratio);
      $('#screen6').hide()
      effectDiv.text('Ready');
      theCallback();

    }, delayTime);
  }
  
  function doEffect(callback){
    effectDiv.css({
      position:'absolute',
      left: ($(window).width() - effectDiv.outerWidth())/2,
      top: ($(window).height() - effectDiv.outerHeight())/2
    });
    $( "#effect" ).show( 'scale', {}, 40 * ratio, callback );
  }
} 

function helpEffect(divHelp){
  

  switch (divHelp){
      
    case 'screen1':
      background='welcome_help.png'
      break;
      
    case 'screen2':
      background='diagnostichome_help.png'
      break;
      
    case 'screen3':
      background='levels_help.png'
      break;
            
    case 'screen4':
      background='login_help.png'
      break;
            
    case 'screen5':
      background='settings_help.png'
      break;
            
    case 'processWhichOneGame':
      background='intro_whichone.png'
      break;
            
    case 'processAssociationGame':
      background='intro_association.png'
      break;
            
    case 'processFatFingerGame':
      background='intro_fatfinger.png'
      break;
       
    case 'complete':
      background='complete_help.png'
      break;
            
  }

  div=$('#screen6');
  
  div.bind('click', function(){
    
    div.hide()
    
  })
  
  div.css({
    'background-image': "url('/media/img/v1/help/"+ background + "')",
    position:'absolute',
    left: ($(window).width() - div.outerWidth())/2,
    top: '0px'
  }).show('explode', {}, 500);
}

function messageEffect(message){
  
  var callback;
  switch (message){
      
    case 'lives':
      background='weAreDone.png'
      callback = processEndGame
      break;
      
    case 'time':
      background='timeUp.png'
      callback = processEndGame
      break;
      
    case 'congrats':
      background='congrats.png'
      callback = processNextGame
      break;
       
    case 'fatFinger':
      background='congrats.png'
      callback = processFatFingerGame
            
            
  }

  div=$('#screen7');
  
  div.css({
    'background-image': "url('/media/img/v1/message/"+ background + "')",
    position:'absolute',
    left: ($(window).width() - div.outerWidth())/2,
    top: '0px'
  }).show('explode', {}, 500);
    
  doHide(callback)
    
  function doHide(callback){
        
    setTimeout(function() {
      div.hide('explode', {
        pieces: 64
      }, 100 * ratio);
      callback();

    }, 1000);
        
  }
}

function helpGame(divHelp){
  

  switch (divHelp){
      
    case 'processWhichOneGame':
      background='whichone_help.png'
      break;
            
    case 'processAssociationGame':
      background='association_help.png'
      break;
            
    case 'processFatFingerGame':
      background='fatfingers_help.png'
      break;
            
  }

  div=$('#screen6');
  
  div.bind('click', function(){
    
    div.hide()
    
  })
  
  div.css({
    'background-image': "url('/media/img/v1/help/"+ background + "')",
    position:'absolute',
    left: ($(window).width() - div.outerWidth())/2,
    top: '0px'
  }).show('explode', {}, 500);
  
  
}




function bounce(div){
  //    $(div).show('bounce', {
  //        distance:200
  //    }, 100 * ratio);4
    
  $(div).show("drop", {
    direction: "up"
  }, 500)
}

function settingsEffect(){
  
  div=$('#screen5');
    
  $('#saveSettings').bind('click', function(){
    div.hide();
        
  })
    
  $('#logOutSettings').bind('click', function(){
    div.hide();
  })
  
  div.css({
    position:'absolute',
    left: ($(window).width() - div.outerWidth())/2,
    top: '0px'
  }).show('drop', {
    direction: 'up'
  }, 700);
}

function hiddenPass(){
  
  var input=$('#passwordLogin')
  
  input.val('');
  document.getElementById('passwordLogin').setAttribute('type', 'password');

}