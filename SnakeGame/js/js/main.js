//へび
ctx.fillStyle = "lime";//limeで描く
ctx.fillRect(canv.width/2, canv.height/2, 20, 20);//形の座標

setInterval(function() {
  //キャンバス
  ctx.fillStyle = "black";//黒で描く
  ctx.fillRect(0, 0, canv.width, canv.height);//形の座標

  //へび
  ctx.fillStyle = "lime";//limeで描く
  px += xd;
  py += yd;

  snake.push({x:px, y:py});//追加
  for (let i=0; i<snake.length-1; i++) {
    ctx.fillRect(snake[i].x*SIZE, snake[i].y*SIZE, SIZE-2, SIZE-2);//形の座標
    if (snake[i].x == px && snake[i].y == py) {
      tail = MIN;
    }
  }
  while (snake.length > tail) {//長さを削除
    snake.shift();
  }

  if (apple2X == px && apple2Y == py) {
    tail++;
    apple2X = Math.floor(Math.random()*canv.width/SIZE);
    apple2Y = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "pink";//pinkで描く
  ctx.fillRect(apple2X*SIZE, apple2Y*SIZE, SIZE-2, SIZE-2);//形の座標

  if (appleX == px && appleY == py) {
    tail++;
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "red";//redで描く
  ctx.fillRect(appleX*SIZE, appleY*SIZE, SIZE-2, SIZE-2);//形の座標


}, 1000/FPS);
