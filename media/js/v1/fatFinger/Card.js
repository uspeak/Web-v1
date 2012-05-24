var lastCard = -1;
var Card = function(letter){
  this.letter = letter;
  this.id = ++lastBox;
  this.accepted = false;
}


Card.prototype.draw = function(container){
  //  container.element.add('div').click(function(){alert(this.id)});
  if(this.letter !== ' '){
    container.append("<div id='card_" + this.id + "'>");
    var div = $('#card_' + this.id); 
    $.extend(div, this);
    div.text(this.letter);
    div.addClass('cellbottom_Finger').draggable({  //Arrastrable
      revert: 'invalid'
    });
    div.bind('dblclick', function(){
      
      alert( $('#'+this.id).text() );
       
      if(card.hasClass('cellbottom_Finger') && card.html() == div.letter){
        return true;
      }
      return false;
    
    })
  }
}