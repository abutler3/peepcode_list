// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
  Screencast = Backbone.Model.extend({});

  var screencast = new Screencast();
  screencast.url = '/videos/2.json';
  screencast.fetch({
    success : function() {
      view = new ScreencastView({ model : screencast });
      // When I fetch the one model, create a new view and pass in the model\
      $('ul').append(view.render());
      console.log(screencast.get("title"));
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
      _.each(screencasts.models, function(model){
      // For each screencast model, create a new screencast view
      // and append to the ul and
         view = new ScreencastView({ model : model });
         // When I fetch the one model, create a new view and pass in the model\
         $('ul.screencasts').append(view.render());
         //console.log(screencasts);
      });
    }
  });

  // Get all json into Backbone collection
  //-------------------------------------
  // Inserting screencasts as li under view
  var ScreencastView = Backbone.View.extend({
    tagName : "li",
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
