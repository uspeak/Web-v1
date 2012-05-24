var lastBox = -1;
var Box = function(letter){
  this.letter = letter;
  this.id = ++lastBox;
}

Box.prototype.draw = function(container){
  //  container.element.add('div').click(function(){alert(this.id)});
  
  container.append("<div id='box_" + this.id + "'>");
  var div = $('#box_' + this.id); 
  $.extend(div, this);
  //div.text(this.letter);
  if(this.letter === ' '){
    div.addClass('blank');
  }
  
  div.addClass('celltop_Finger').droppable({  //Soltable
    tolerance: "pointer",
    accept: function(card){
      
      if(card.hasClass('cellbottom_Finger') && card.html() == div.letter){
        return true;
      }
      return false;
    },
    drop: function( event, ui) {
      $(ui.draggable).offset($(this).offset());
      
    },
    out: function( event, ui ) {
    }
  });
}