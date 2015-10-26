function setup() {
    //create the Canvas
    createCanvas(windowWidth, windowHeight);
    drawWindow();//call the function

    //http://www.colors.commutercreative.com/grid/
    var x = 40;
    var y = 40;
    var gridWidth = width-500;
    var x1,y1;
    for(var i=0; i<100; i++){
    //increment our x
    x += 200;//same as x= x+200
    drawWindow(x,y);
    //check if x is past the grid width
    if(x >gridWidth){
        //set the x back to the beinning
        x =40;
        //move y down
        y += 300;
    }//end if
    }//end loop
}//end setup


  function draw(){
  }
  function drawWindow(startX,startY){
  strokeWeight(5);
  stroke('LavenderBlush');
  fill('LightPink');
      var winWidth = 100;
      var winHeight = 200;
  rect(startX,startY,winWidth,winHeight);
  line(startX+winWidth/2,startY,startX+winWidth/2,startY+winHeight);
  line(startX,startY+winHeight/3,startX+winWidth,startY+winHeight/3);
  line(startX,startY+winHeight*.66,startX+winWidth,startY+winHeight*.66);
  //add box at the bottom
  x1 = startX - 20;
  y1 = startY + winHeight;
  rect(x1,y1,winWidth+40,20);
  //add box at the top
  x1 = startX-20;
  y1 = startY-20;
  rect(x1,y1,winWidth+40,20);
  }









