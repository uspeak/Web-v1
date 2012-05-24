var letterDrag;
           
// Do it dinamic
           
function dragAndDrop(){
               
  $("#letter_table0").draggable({ //Arrastrable
        
       
    revert: true,
        
    start: function(){
      letterDrag =this.id
    },
    stop: function(){ 
    //            revert: true
    }
  });
                
  $("#dash_table0").droppable({  //Soltable
    tolerance: "pointer",
    accept: ".cellbottom_Finger",
    drop: function( event, ui) {
                        
      if (($('#' + letterDrag).html()) != ( $('#' + this.id ).html()))
      {
                       
        processLives()    
                
      }else {
                       
        processMatches()
        //                 change style drop cell      
        $('#' + this.id).css({
        
          'text-indent':' 0px',
          'background-image': "url('/media/img/v1/games/piece.png') "
        });
                
        //                hidden cell draggable
        $('#' + letterDrag).css({
        
          'text-indent':' -9999px',
          'background':'none'
        });
                
                
                
                
        //                disable cell
        $('#'+ this.id).droppable("disable") 
        $('#'+ letterDrag).draggable("disable") 
                       
      }
    //            if ($(this).html($('#' + letterDrag).html()) ==  $(this).html($('#' + this.id).html()) )
    //            {
    //                document.getElementById(letterDrag).innerHTML=('#');
    //            }
    },
    out: function( event, ui ) {
    }
  });
  //////////////////////////////////////////////////////////                
           
  $("#letter_table1").draggable({  //Arrastrable
        
    revert: true,
        
    start: function(){
      letterDrag =this.id
    //                        $(this).html("Correct");
    },
    stop: function(){
    //                        $(this).html("Drag");
    }
  });
                
  $("#dash_table1").droppable({  //Soltable
    tolerance: "pointer",
    accept: ".cellbottom_Finger",
    drop: function( event, ui) {
                        
      if (($('#' + letterDrag).html()) != ( $('#' + this.id ).html()))
      {
                       
        processLives()    
                
      }else {
                       
        processMatches()
        //                 change style drop cell      
        $('#' + this.id).css({
        
          'text-indent':' 0px',
          'background-image': "url('/media/img/v1/games/piece.png') "
        });
        //                hidden cell draggable
        $('#' + letterDrag).css({
        
          'text-indent':' -9999px',
          'background':'none'
        });
        //                disable cell
        $('#'+ this.id).droppable("disable") 
        $('#'+ letterDrag).draggable("disable") 
                       
      }
    //            if ($(this).html($('#' + letterDrag).html()) ==  $(this).html($('#' + this.id).html()) )
    //            {
    //                document.getElementById(letterDrag).innerHTML=('#');
    //            }
    },
    out: function( event, ui ) {
    }
  });
    
  ///////////////////////////////////////////////////////
 
  $("#letter_table2").draggable({  //Arrastrable
       
    revert: true,
        
    start: function(){
      letterDrag =this.id
    //                        $(this).html("Correct");
    },
    stop: function(){
    //                        $(this).html("Drag");
    }
  });
                
  $("#dash_table2").droppable({  //Soltable
    tolerance: "pointer",
    accept: ".cellbottom_Finger",
    drop: function( event, ui) {
                        
      if (($('#' + letterDrag).html()) != ( $('#' + this.id ).html()))
      {
                       
        processLives()    
                
      }else {
                       
        processMatches()  
        //                 change style drop cell      
        $('#' + this.id).css({
        
          'text-indent':' 0px',
          'background-image': "url('/media/img/v1/games/piece.png') "
        });
                
        //                hidden cell draggable
        $('#' + letterDrag).css({
        
          'text-indent':' -9999px',
          'background':'none'
        });
                
        //                disable cell
        $('#'+ this.id).droppable("disable") 
        $('#'+ letterDrag).draggable("disable") 
                       
      }
    //            if ($(this).html($('#' + letterDrag).html()) ==  $(this).html($('#' + this.id).html()) )
    //            {
    //                document.getElementById(letterDrag).innerHTML=('#');
    //            }
    },
    out: function( event, ui ) {
    }
  });
    
  //////////////////////////////////////
    
  $("#letter_table3").draggable({  //Arrastrable
        
    revert: true,
        
        
    start: function(){
      letterDrag =this.id
    //                        $(this).html("Correct");
    },
    stop: function(){
    //                        $(this).html("Drag");
    }
  });
                
  $("#dash_table3").droppable({  //Soltable
    tolerance: "pointer",
    accept: ".cellbottom_Finger",
    drop: function( event, ui) {
                        
      if (($('#' + letterDrag).html()) != ( $('#' + this.id ).html()))
      {
                       
        processLives()    
                
      }else {
                       
        processMatches()  
        //                 change style drop cell      
        $('#' + this.id).css({
        
          'text-indent':' 0px',
          'background-image': "url('/media/img/v1/games/piece.png') "
        });
        //                hidden cell draggable
        $('#' + letterDrag).css({
        
          'text-indent':' -9999px',
          'background':'none'
        });
                
        //                disable cell
        $('#'+ this.id).droppable("disable") 
        $('#'+ letterDrag).draggable("disable") 
                       
      }
    //            if ($(this).html($('#' + letterDrag).html()) ==  $(this).html($('#' + this.id).html()) )
    //            {
    //                document.getElementById(letterDrag).innerHTML=('#');
    //            }
    },
    out: function( event, ui ) {
    }
  });
           
           
  //////////////////////////////////////
    
  $("#letter_table4").draggable({  //Arrastrable
        
    revert: true,
        
    start: function(){
      letterDrag =this.id
    //                        $(this).html("Correct");
    },
    stop: function(){
    //                        $(this).html("Drag");
    }
  });
                
  $("#dash_table4").droppable({  //Soltable
    tolerance: "pointer",
    accept: ".cellbottom_Finger",
    drop: function( event, ui) {
                        
      if (($('#' + letterDrag).html()) != ( $('#' + this.id ).html()))
      {
                       
        processLives()    
                
      }else {
                       
        processMatches()    
        //                 change style drop cell      
        $('#' + this.id).css({
        
          'text-indent':' 0px',
          'background-image': "url('/media/img/v1/games/piece.png') "
        });
                
        //                hidden cell draggable
        $('#' + letterDrag).css({
        
          'text-indent':' -9999px',
          'background':'none'
        });
                
        //                disable cell
        $('#'+ this.id).droppable("disable") 
        $('#'+ letterDrag).draggable("disable") 
      //                 document.getElementById(letterDrag).innerHTML=('#');
                       
      }
    //            if ($(this).html($('#' + letterDrag).html()) ==  $(this).html($('#' + this.id).html()) )
    //            {
    //                document.getElementById(letterDrag).innerHTML=('#');
    //            }
    },
    out: function( event, ui ) {
    }
  });
           
  //////////////////////////////////////
    
  $("#letter_table5").draggable({  //Arrastrable
        
    revert: true,
        
        
    start: function(){
      letterDrag =this.id
    //                        $(this).html("Correct");
    },
    stop: function(){
    //                        $(this).html("Drag");
    }
  });
                
  $("#dash_table5").droppable({  //Soltable
    tolerance: "pointer",
    accept: ".cellbottom_Finger",
    drop: function( event, ui) {
                        
      if (($('#' + letterDrag).html()) != ( $('#' + this.id ).html()))
      {
                       
        processLives()    
                
      }else {
                       
        processMatches()    
        //                 change style drop cell      
        $('#' + this.id).css({
        
          'text-indent':' 0px',
          'background-image': "url('/media/img/v1/games/piece.png') "
        });
                
        //                hidden cell draggable
        $('#' + letterDrag).css({
        
          'text-indent':' -9999px',
          'background':'none'
        });
                
        //                disable cell
        $('#'+ this.id).droppable("disable") 
        $('#'+ letterDrag).draggable("disable") 
                       
      }
    //            if ($(this).html($('#' + letterDrag).html()) ==  $(this).html($('#' + this.id).html()) )
    //            {
    //                document.getElementById(letterDrag).innerHTML=('#');
    //            }
    },
    out: function( event, ui ) {
    }
  });
           
           
  //////////////////////////////////////
    
  $("#letter_table6").draggable({  //Arrastrable
        
    revert: true,
        
        
    start: function(){
      letterDrag =this.id
    //                        $(this).html("Correct");
    },
    stop: function(){
    //                        $(this).html("Drag");
    }
  });
                
  $("#dash_table6").droppable({  //Soltable
    tolerance: "pointer",
    accept: ".cellbottom_Finger",
    drop: function( event, ui) {
                        
      if (($('#' + letterDrag).html()) != ( $('#' + this.id ).html()))
      {
                       
        processLives()    
                
      }else {
                       
        processMatches()    
        //                 change style drop cell      
        $('#' + this.id).css({
        
                    'text-indent':' 0px',
          'background-image': "url('/media/img/v1/games/piece.png') "
        });
                
        //                hidden cell draggable
        $('#' + letterDrag).css({
        
          'text-indent':' -9999px',
          'background':'none'
        });
                
        //                disable cell
        $('#'+ this.id).droppable("disable") 
        $('#'+ letterDrag).draggable("disable") 
                       
      }
    //            if ($(this).html($('#' + letterDrag).html()) ==  $(this).html($('#' + this.id).html()) )
    //            {
    //                document.getElementById(letterDrag).innerHTML=('#');
    //            }
    },
    out: function( event, ui ) {
    }
  });
           
  //////////////////////////////////////
    
  $("#letter_table7").draggable({  //Arrastrable
    revert: true,
        
    start: function(){
      letterDrag =this.id
    //                        $(this).html("Correct");
    },
    stop: function(){
    //                        $(this).html("Drag");
    }
  });
                
  $("#dash_table7").droppable({  //Soltable
    tolerance: "pointer",
    accept: ".cellbottom_Finger",
    drop: function( event, ui) {
                        
      if (($('#' + letterDrag).html()) != ( $('#' + this.id ).html()))
      {
                       
        processLives()    
                
      }else {
                       
        processMatches()    
        //                 change style drop cell      
        $('#' + this.id).css({
                  'text-indent':' 0px',
          'background-image': "url('/media/img/v1/games/piece.png') "
        });
                
        //                hidden cell draggable
        $('#' + letterDrag).css({
        
          'text-indent':' -9999px',
          'background':'none'
        });
                
        //                disable cell
        $('#'+ this.id).droppable("disable") 
        $('#'+ letterDrag).draggable("disable") 
                       
      }
    //            if ($(this).html($('#' + letterDrag).html()) ==  $(this).html($('#' + this.id).html()) )
    //            {
    //                document.getElementById(letterDrag).innerHTML=('#');
    //            }
    },
    out: function( event, ui ) {
    }
  });
           
           
  //////////////////////////////////////
    
  $("#letter_table8").draggable({  //Arrastrable
    revert: true,
        
    start: function(){
      letterDrag =this.id
    //                        $(this).html("Correct");
    },
    stop: function(){
    //                        $(this).html("Drag");
    }
  });
                
  $("#dash_table8").droppable({  //Soltable
    tolerance: "pointer",
    accept: ".cellbottom_Finger",
    drop: function( event, ui) {
                        
      if (($('#' + letterDrag).html()) != ( $('#' + this.id ).html()))
      {
                       
        processLives()    
                
      }else {
                       
        processMatches()    
        //                 change style drop cell      
        $('#' + this.id).css({
        
                   'text-indent':' 0px',
          'background-image': "url('/media/img/v1/games/piece.png') "
        });
                
        //                hidden cell draggable
        $('#' + letterDrag).css({
        
          'text-indent':' -9999px',
          'background':'none'
        });
                
        //                disable cell
        $('#'+ this.id).droppable("disable") 
        $('#'+ letterDrag).draggable("disable") 
                       
      }
    //            if ($(this).html($('#' + letterDrag).html()) ==  $(this).html($('#' + this.id).html()) )
    //            {
    //                document.getElementById(letterDrag).innerHTML=('#');
    //            }
    },
    out: function( event, ui ) {
    }
  });
           
           
  //////////////////////////////////////
    
  $("#letter_table9").draggable({  //Arrastrable
    revert: true,
    start: function(){
      letterDrag =this.id
    //                        $(this).html("Correct");
    },
    stop: function(){
    //                        $(this).html("Drag");
    }
  });
                
  $("#dash_table9").droppable({  //Soltable
    tolerance: "pointer",
    accept: ".cellbottom_Finger",
    drop: function( event, ui) {
                        
      if (($('#' + letterDrag).html()) != ( $('#' + this.id ).html()))
      {
                       
        processLives()    
                
      }else {
                       
        processMatches()    
        //                 change style drop cell      
        $('#' + this.id).css({
        
                  'text-indent':' 0px',
          'background-image': "url('/media/img/v1/games/piece.png') "
        });
                
        //                hidden cell draggable
        $('#' + letterDrag).css({
        
          'text-indent':' -9999px',
          'background':'none'
        });
                
        //                disable cell
        $('#'+ this.id).droppable("disable") 
        $('#'+ letterDrag).draggable("disable") 
                       
      }
    //            if ($(this).html($('#' + letterDrag).html()) ==  $(this).html($('#' + this.id).html()) )
    //            {
    //                document.getElementById(letterDrag).innerHTML=('#');
    //            }
    },
    out: function( event, ui ) {
    }
  });
           
           
  //////////////////////////////////////
    
  $("#letter_table10").draggable({  //Arrastrable
    revert: true,
    start: function(){
      letterDrag =this.id
    //                        $(this).html("Correct");
    },
    stop: function(){
    //                        $(this).html("Drag");
    }
  });
                
  $("#dash_table10").droppable({  //Soltable
    tolerance: "pointer",
    accept: ".cellbottom_Finger",
    drop: function( event, ui) {
                        
      if (($('#' + letterDrag).html()) != ( $('#' + this.id ).html()))
      {
                       
        processLives()    
                
      }else {
                       
        processMatches()    
        //                 change style drop cell      
        $('#' + this.id).css({
        
                   'text-indent':' 0px',
          'background-image': "url('/media/img/v1/games/piece.png') "
        });
                
        //                hidden cell draggable
        $('#' + letterDrag).css({
        
          'text-indent':' -9999px',
          'background':'none'
        });
                
        //                disable cell
        $('#'+ this.id).droppable("disable") 
        $('#'+ letterDrag).draggable("disable") 
                       
      }
    //            if ($(this).html($('#' + letterDrag).html()) ==  $(this).html($('#' + this.id).html()) )
    //            {
    //                document.getElementById(letterDrag).innerHTML=('#');
    //            }
    },
    out: function( event, ui ) {
    }
  });
           
           
                                     
                  
             
           
           
           
           
           
           
           
           
           
           
           
           
           
           
                
                
                
}