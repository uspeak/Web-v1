/*!
 * jquery.tzineClock.js - Tutorialzine Colorful Clock Plugin
 *
 * Copyright (c) 2009 Martin Angelov
 * http://tutorialzine.com/
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Launch  : December 2009
 * Version : 1.0
 * Released: Monday 28th December, 2009 - 00:00
 */
var clockInterval;
var countSecons;
var pause= true;

(function($){
  // Extending the jQuery core:
  $.fn.tzineClock = function(time){
    countSecons = 0;
    // "this" contains the elements that were selected when calling the plugin: $('elements').tzineClock();
    // If the selector returned more than one element, use the first one:
		
    var container = this.eq(0);
	
    if(!container){
      try{
        console.log("Invalid selector!");
      } catch(e){}	
      return false;
    }

    // Calling the setUp function and passing the container,
    // will be available to the setUp function as "this":
    setUp(container, time);
		
    return this;
  }
	
  function setUp(container, time){
    var divClock = $('div.clock');
			
    // Assigning some of the elements as variables for speed:
    divClock.rotateLeft = divClock.find('.rotate.left');
    divClock.rotateRight = divClock.find('.rotate.right');
    divClock.display = divClock.find('.display');
		
    // Setting up a interval, executed every 1000 milliseconds:
    
    clockInterval = setInterval(function(){
     
      if(pause) {
        if(countSecons >= time) {
          countSecons = 0;
          messageEffect('time')
        }
        animation(divClock, countSecons++, time);
      }
    },1000);
  }
	
  function animation(clock, current, total)
  {
    // Calculating the current angle:
    var angle = (360/total)*(current+1);
	
    var element;

    if(current==0)
    {
      // Hiding the right half of the background:
      clock.rotateRight.hide();
			
      // Resetting the rotation of the left part:
      rotateElement(clock.rotateLeft,0);
    }
		
    if(angle<=180)
    {
      // The left part is rotated, and the right is currently hidden:
      element = clock.rotateLeft;
    }
    else
    {
      // The first part of the rotation has completed, so we start rotating the right part:
      clock.rotateRight.show();
      clock.rotateLeft.show();
			
      rotateElement(clock.rotateLeft,180);
			
      element = clock.rotateRight;
      angle = angle-180;
    }

    rotateElement(element,angle);
		
    // Setting the text inside of the display element, inserting a leading zero if needed:
    clock.display.html(current<10?'0'+current:current);
  }
	
  function rotateElement(element,angle)
  {
    // Rotating the element, depending on the browser:
    var rotate = 'rotate('+angle+'deg)';
		
    if(element.css('MozTransform')!=undefined)
      element.css('MozTransform',rotate);
			
    else if(element.css('WebkitTransform')!=undefined)
      element.css('WebkitTransform',rotate);
	
    // A version for internet explorer using filters, works but is a bit buggy (no surprise here):
    else if(element.css("filter")!=undefined)
    {
      var cos = Math.cos(Math.PI * 2 / 360 * angle);
      var sin = Math.sin(Math.PI * 2 / 360 * angle);
			
      element.css("filter","progid:DXImageTransform.Microsoft.Matrix(M11="+cos+",M12=-"+sin+",M21="+sin+",M22="+cos+",SizingMethod='auto expand',FilterType='nearest neighbor')");
	
      element.css("left",-Math.floor((element.width()-200)/2));
      element.css("top",-Math.floor((element.height()-200)/2));
    }
	
  }
	
})(jQuery)

function pauseClock() {

  pause = false
}
function playClock() {
  pause = true;
}


function efectPause(){
  
  div=$('#pauseScreen');
  
  div.css({
    'color': 'none',
    'background-image': "none",
    'height': '530px',
    position:'absolute',
    left: ($(window).width() - div.outerWidth())/2,
    top: '0px'
  }).show();
  
  pauseClock();
  var effectDiv = $( "#effect" );  
  effectDiv.text('Pause').css({
    'color': '#787878'
  });
  center(changeButton)
  
  
  function center(changeButton){
    effectDiv.css({
      position:'absolute',
      left: ($(window).width() - effectDiv.outerWidth())/2,
      top: ($(window).height() - effectDiv.outerHeight())/2
    });
    $( "#effect" ).show( 'scale', {}, 40 * ratio, changeButton );
  }
  
  function changeButton(){
    
    var div = $('#btn_pause');
  
    div.css({
      'background-image': 'url("/media/img/v1/games/play.png")'
    });
    $('#btn_pause').unbind()    
    $('#btn_pause').bind('click', function(){
      efectPlay()
    })  
  }
  
} 

function efectPlay(){
  
  playClock()
  $( "#effect" ).hide()
  $('#pauseScreen').hide();
    
  var div = $('#btn_pause');
  
  div.css({
    'background-image': 'url("/media/img/v1/games/pause.png")'
  });
  $('#btn_pause').unbind()    
  $('#btn_pause').bind('click', function(){
    efectPause()
  })  
  
} 