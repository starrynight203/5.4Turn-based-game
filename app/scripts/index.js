var $ = require ('jquery');
var _ = require ('underscore');

function Player(options){
 options = options || {};
 this.health = options.health || 100;
}

Player.prototype.takeDamage = function(){
 this.health = this.health - 10;
}


var puppy = new Player({health: 200});

var kitten = new Player({health: 100});

$('.attack-button').on('click', function(){
 puppy.takeDamage();
 kitten.takeDamage();
 $('.kittens .health').text(kitten.health);
 console.log(kitten.health);
 $('.puppies .health').text(puppy.health);
 console.log(puppy.health);
});
