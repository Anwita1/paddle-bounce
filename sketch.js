var ball,img,paddle;
var ballImage, paddleImage;
var edges;

function preload() {
  ballImage = loadImage("ball.png")
  paddleImage = loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(200, 200, 10, 10)
  ball.addImage("ball.png", ballImage)
  ball.velocityX= 9;
  ball.velocityY= 4;
  paddle= createSprite(350, 200)
  paddle.addImage("paddle.png", paddleImage)
  edges = createEdgeSprites();
}

function draw() {
  background(205,153,0);  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
  
  paddle.bounceOff(edges[3]);
  paddle.bounceOff(edges[2]);

  if(ball.isTouching(paddle)){
    randomVelocity();
    ball.bounceOff(paddle)
  }

  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     paddle.y = paddle.y-2;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y+2;
  }
  drawSprites();
  
}

function randomVelocity()
{
 ball.velocityY = random(1, 20)
}

