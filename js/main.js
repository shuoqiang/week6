function setup() {
    //create the Canvas
    createCanvas(windowWidth, windowHeight);
    drawWindow();//call the function

    //http://www.colors.commutercreative.com/grid/
    var x = 0;
    var y = 0;
    var gridWidth = width-100;
    for(var i=0; i<100; i++){
    //increment our x
    x += 120;//same as x= x+120
    drawWindow(x,y);
    //check if x is past the grid width
    if(x >gridWidth){
        //set the x back to the beinning
        x =0;
        //move y down
        y += 270;
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
  rect
  line(startX+winWidth/2,startY,startX+winWidth/2,startY+winHeight);
  line(startX,startY+winHeight/3,startX+winWidth,startY+winHeight/3);
  line(startX,startY+winHeight*.66,startX+winWidth,startY+winHeight*.66);
  }









