(function ($){
  
  var Card = Backbone.Model.extend({
  	defaults: {
  		cardText: "hello world"
  	}
  });

  var Deck = Backbone.Collection.extend({
    model: Card
  });

  var CardView = Backbone.View.extend({
  	el: $('body'),
  	initialize: function (){
  	  _.bindAll(this, 'render');
  	  this.render();
  	},
  	render: function (){
  		$(this.el).append("<div> Hello World <div>"+this.model.get('cardText'))
  	}
  });

  var theDeck = new Deck();
  var card1 = new Card();

  var card1View = new CardView({model: card1 });

})(jQuery);