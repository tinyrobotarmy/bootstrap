DynamicHints = function(form) {
  this.form = form;
  this.init();
};

DynamicHints.prototype = {
  init: function() {
    this.form.find('input,select,textarea').each(function(index, value){
      var element = $(value);
      var hint = element.parent().find('span.hint');
      if (hint.length > 0) {
        element.focus(function(){
          $(this).parent().find('span.hint').fadeIn(400);
        });
        element.blur(function(){
          $(this).parent().find('span.hint').fadeOut(400);
        });
        if(element.is(":focus")) {
          hint.fadeIn(400);
        }
      }
    });
  }
};