 const canvas = document.getElementById('game');
 const ctx = canvas.getContext('2d');
 
 let speed=7;
 
 let tileCount=20;
 let tileSize=canvas.width/tileCount - 2;
 
 let headY=10;
 let headX=10;
 
 let xVelocidade=0;
 let yVelocidade=0;
 
 function drawGame(){
	 clearScreen();
	 SnakePosition();
	 drawSnake();
	 setTimeout(drawGame, 1000/ speed);
 }
 
  function clearScreen(){
	  ctx.fillStyle='black';
	  ctx.fillRect(0,0,canvas.width,canvas.height);
	  
  }
  
  function drawSnake(){
	  ctx.fillStyle='orange';
	  ctx.fillRect(headX*tileCount,headY*tileCount,tileSize,tileSize);
	  
  }
   function  SnakePosition(){
	   headX=headX+xVelocidade;
	   headY=headY+yVelocidade;
	 
 }
  
  document.body.addEventListener('keydown',keyDown);
  
  function keyDown(event){
	  //up
	  if(event.keyCode==38){
		  yVelocidade= -1;
          xVelocidade= 0;
		  
	  }
	  
	  //down
	  if(event.keyCode==40){
		  yVelocidade= 1;
          xVelocidade= 0;
		  
	  }
	  //left
	  if(event.keyCode==37){
		  yVelocidade= 0;
          xVelocidade= -1;
		  
	  }
	  //right
	  if(event.keyCode==39){
		  yVelocidade= 0;
          xVelocidade= 1;
		  
	  }
  }
 
  
   drawGame();