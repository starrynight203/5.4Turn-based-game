var $ = require ('jquery');
var _ = require ('underscore');
var handlebars = require ('handlebars');

// function renderTemplate(templateId, location, model) {
//     var templateString = $(templateId).text();
//     var templateFunction = _.template(templateString);
//     var renderedTemplate = templateFunction(model);
//     $(location).append(renderedTemplate);
// }

function puppyTemplate(data){
 // source is script tag in your html
 var source = $("#puppyPlayers").html();
 // the convert the template to a string
 var template = handlebars.compile(source);
 // passes string into template
 var compiledTemplate = template(data);
 // renders template to html element
 $('.puppyPlayersList').html(compiledTemplate);
}

function Player(options){
 options = options || {};
 this.health = options.health || 100;
 this.name = options.name;
}

Player.prototype.takeDamage = function(){
 this.health = this.health - 10;
}


var puppy;

var kitten;

$('.attack-button').on('click', function(){
 puppy.takeDamage();
 kitten.takeDamage();
 $('.kittens .health').text(kitten.health);
 console.log(kitten.health);
 $('.puppies .health').text(puppy.health);
 console.log(puppy.health);
});



var puppyPlayers = [{name: 'Bonnie'}, {name: 'Rover'}, {name: 'Lola'}];
puppyTemplate(puppyPlayers);

$('.startbutton').on('click', function(){
  var selectedpuppy = $('.puppyPlayersList').val()
  console.log(selectedpuppy);
  puppy = new Player({health: 200, name: selectedpuppy});
  $('.selectedpuppy').append(selectedpuppy);

  var kittyPlayers = [{name: 'Felix'}, {name: 'Oliver'}, {name: 'Callie'}]
  var player = _.random(0,kittyPlayers.length-1);
  kitten = new Player({health: 100});


});

// playerTemplate({name: 'Leah'})


/////// Puppy character gifs
// <iframe src="//giphy.com/embed/rUNJ7iiVwGbrW" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/cheezburger-puppy-dog-rUNJ7iiVwGbrW">via GIPHY</a></p>
// <iframe src="//giphy.com/embed/y69CO2b6Nyqre" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/cute-dog-christmas-y69CO2b6Nyqre">via GIPHY</a></p>
// <iframe src="//giphy.com/embed/QFSD9tGuryBHy" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/living-marshmallow-behold-QFSD9tGuryBHy">via GIPHY</a></p>

//random generation
// var kittyPlayers = [{name: 'Felix'}, {name: 'Oliver'}, {name: 'Callie'}]
// console.log(kittyPlayers);
//
// var player = _.random(0,kittyPlayers.length-1);
// console.log(player);
//
// console.log(kittyPlayers[player]);
