/*
	Class:    	countDown
	Author:   	David Walsh
	Website:    http://davidwalsh.name
	Version:  	1.0.0
	Date:     	11/30/2008
	Built For:  jQuery 1.2.6
*/

//$(document).ready(function() {

function beginTime(time){
    
    /* delay function */
    jQuery.fn.delay = function(time,func){
        return this.each(function(){
            setTimeout(func,time);
        });
    };
                
    jQuery.fn.countDown = function(settings,to) {
        settings = jQuery.extend({
            startFontSize: '26px',
            endFontSize: '12px',
            duration: 1000,
            startNumber: 30,
            endNumber: 0,
            callBack: function() { }
        }, settings);
        return this.each(function() {
            if(!to && to != settings.endNumber) {
                to = settings.startNumber;
            }
            //set the countdown to the starting number
            $(this).text(to).css('fontSize',settings.startFontSize);
            //loopage
            $(this).animate({
                'fontSize': settings.endFontSize
            },settings.duration,'',function() {
                if(to > settings.endNumber + 1) {
                    $(this).css('fontSize',settings.startFontSize).text(to - 1).countDown(settings,to - 1);
                }
                else
                {
                    settings.callBack(this);
                }
            });
        });
    };
    $('#countdown').countDown({
        startNumber: time,
        callBack: function() {
            if (nameCurrentGame=='processFatFingerGame'){
//                alert('End Time')
                processFatFingerGame()
            }else {
                
                processNextGame()
            }
        }
    });
}