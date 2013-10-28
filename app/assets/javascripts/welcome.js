// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  Screencast = Backbone.Model.extend({
    // specify route for each model if we want to change it one
    // at a time
    url : function() {
        return "/videos/" + this.get('id') + ".json";
    }
  });

  var screencast = new Screencast();
  screencast.url = '/videos/2.json';
  screencast.fetch({
    success : function() {
      console.log(screencast);
    }
  });
  // Getting one screencast model
  //--------------------------------

  var Screencasts = Backbone.Collection.extend({
    model : Screencast
  });
  var screencasts = new Screencasts();
  screencasts.url = "/videos.json";

  screencasts.fetch({
    success : function() {
      screencasts_view = new ScreencastsView({});
      _.each(screencasts.models, function(model){
          screencasts_view.addOne(model);
      // For each screencast model, create a new screencast view
      // and append to the ul and
      // view = new ScreencastView({ model : model });
         // When I fetch the one model, create a new view and pass in the model\
        //if ( model.get('watched') == true ) {
            //$(view.el).addClass('watched');
         //}
         //var img = $('<img/>').attr({'src' : model.get('image') })
         //$(view.el).append(img);
         //$('ul.screencasts').append(view.render());
         //console.log(screencasts);
      });
    }
  });

  //-----------------------

  var ScreencastsView = Backbone.View.extend({
    el : " screencasts",
    addOne : function(model){
        // For each screencast model, create a new screencast view
        // and append to the ul and
         view = new ScreencastView({ model : model });
         // When I fetch the one model, create a new view and pass in the model\
         if ( model.get('watched') == true ) {
            $(view.el).addClass('watched');
         }
         var img = $('<img>').attr({'src' : model.get('image') });
         $('ul.screencasts').append(view.render());
         $(view.el).append(img);
         //console.log(screencasts);

    }

  })

  // Get all json into Backbone collection
  //-------------------------------------
  // Inserting screencasts as li under view
  var ScreencastView = Backbone.View.extend({
    tagName : "li",
    events : {
        "click" : "toggleWatched"
        // when you click on video title toggle watched state
    },
    toggleWatched : function(){
      if (this.model.get('watched') == true) {
          this.model.set({'watched' : false}).save();
      } else {
          this.model.set({'watched' : true}).save();
      }
      $(this.el).toggleClass('watched');
    },
    render : function() {
        return $(this.el).text(this.model.get('title'));
        // Return
        // this is the screencast view
        // el is the element li
        // in the li print a the title from the each screencast collection
        // in the model ( we can get because of view = new ScreencastView({ model : model });)
    }

  });



});
