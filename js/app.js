//var speed = prompt("Input difficulty!!! Easy(0,200), Medium(200,300), Hard(300+)");
var count = 0;

var Enemy = function(x, y, sprite, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    //this.sprite = 'images/frieza-resize.png';
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    //this.speed = Math.floor(Math.random() * (350-250 + 1)) + 250;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 505) {
        this.x += (this.speed * dt);
    }
    else {this.x = -90;}

    // If the enemy and the player collide.
    if(this.x < player.x + 30 && this.x + 60 > player.x && this.y < player.y + 60 && this.y + 40 > player.y) {
        player.reset();
        count = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function () {
    this.sprite = 'images/nvegito.png';
    this.x = 200;
    this.y = 300;
};

// Is called every time the player position is updated
Player.prototype.update = function() {
    
    // If the player reaches the water
    if (this.y < 20) {
    this.reset();
    count++;
    document.getElementById("score").innerHTML = count;
}
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Handle function to go in directions
Player.prototype.handleInput = function(direction) {
    if(direction == 'left' && this.x > 0) {
        this.x -= 50;
    }
    if(direction == 'right' && this.x < 400) {
        this.x += 50;
    }
    if(direction == 'up' && this.y > 3) {
        this.y -= 50;
    }
    if(direction == 'down' && this.y < 400) {
        this.y += 50;
    }
};

// Is called when the player is reset to the starting point
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 300;
    if(count > 7){
        this.sprite = 'images/vegito-resize.png';
    }
    else if(count > 2 && count < 4){
        this.sprite = 'images/vegito3.png';
    }
};

//Defines Heart function
var Heart = function(x, y){
    this.sprite = 'images/heart.png';
    this.x = x;
    this.y = y;
}

//Renders Heart
Heart.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Defines Star function
var Star = function(x, y){
    this.sprite = 'images/star.png';
    this.x = x;
    this.y = y;
}

//Renders Star
Star.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Defines Key function
var Key = function(x, y){
    this.sprite = 'images/key.png';
    this.x = x;
    this.y = y;
}

//Renders key
Key.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Gohan = function(x, y){
    this.sprite = 'images/gohan.png';
    this.x = x;
    this.y = y;
}

//Renders Heart
Gohan.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Trunks = function(x, y){
    this.sprite = 'images/trunks.png';
    this.x = x;
    this.y = y;
}

//Renders Heart
Trunks.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Bulchi = function(x, y){
    this.sprite = 'images/bulchi.png';
    this.x = x;
    this.y = y;
}

//Renders Heart
Bulchi.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Creates Dragonball
var Dragonball = function(x, y){
    this.sprite = 'images/dragonball.png';
    this.x = x;
    this.y = y;
}

//Defines random number between two bounds
function random(min, max){
    return Math.random() * (max - min) + min;
}

//Renders the dragonball
Dragonball.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//Creates enemies
var e1 = new Enemy(-200, 60, 'images/mzamasu.png',random(0, 1000));
var e2 = new Enemy(0, 140, 'images/hit.png', random(0, 1000));
var e3 = new Enemy(-400, 225, 'images/frieza-resize.png', random(0, 1000));


// Place all enemy objects in an array called allEnemies
var allEnemies = [e1, e2, e3];

// Place the player object in a variable called player
var player = new Player();

var heart = new Heart(random(0,405), random(0,450));

var star = new Star(random(0,405), random(0,420));

var key = new Key(random(0,405), random(0,420));

var gohan = new Gohan(405, 460);

var trunks = new Trunks(0, 440);

var bulchi = new Bulchi(200, 450);

var dragonball = new Dragonball (random(0,405), random(50,480));

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
