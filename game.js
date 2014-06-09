var player1;
var player2;
var ball;
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){
	game.load.image('player1','player1.png');
	game.load.image('player2','player2.png')
	game.load.image('ball','ball.png')
	}
	
function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	player1 = game.add.sprite(25,game.world.centerY,'player1');
	player2 = game.add.sprite(750,game.world.centerY,'player1');
	ball = game.add.sprite(game.world.centerX,game.world.centerY,'ball');
	 game.physics.enable([player1,player2,ball], Phaser.Physics.ARCADE);
		player1.body.collideWorldBounds = true;
		player2.body.collideWorldBounds = true;
		player1.body.immovable = true;
		player2.body.immovable = true;
		ball.body.velocity.setTo(250,250);
		ball.body.collideWorldBounds = true;
		ball.body.bounce.setTo(1.5,1.5)
		
	}
	
	
	
function update(){
	game.physics.arcade.collide(player1,ball);
	game.physics.arcade.collide(player2,ball);
	if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
		player1.body.velocity.y = -500;	
		
		}
		else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
			player1.body.velocity.y = 500;
			
			}
		else{
			player1.body.velocity.y = 0;
			}
			
	player2.body.velocity.setTo(ball.body.velocity.y);
	player2.body.maxVelocity.y = 350;
	player2.body.velocity.x = 0;
	ball.body.maxVelocity.setTo(500,500)
	
	if(ball.x = game.world.width - 30){
		alert("Win/Loss!")
		}
		
	}