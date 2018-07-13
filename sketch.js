let playing = true;
let omega = 0.25
let buttonIncrease
let buttonDecrease
let show = false

//let img
function preload() {
    //img = loadImage("C://Users//Shahbaz//Desktop//UROP//Learning//p5//empty-example//Earth.jpg");
}



function setup() {
    canvas = createCanvas(800,640, WEBGL);
    buttonDecrease = createButton('Decrease Speed');
    buttonIncrease = createButton('Increase Speed');
    buttonShow = createButton('Show');
    buttonIncrease.mousePressed(function() {
        omega += 0.025;
    })

    buttonDecrease.mousePressed(function() {
        omega -= 0.025;
    })

    buttonShow.mouseOver(function() {
        show = !show;
    })

    buttonShow.mouseOut(function() {
        show = !show;
    })
}

function draw() {
  background(255);
  rotateY((2*omega)*millis()/1000);
  if (show === true) {
      noFill();
      stroke(100);
      sphere(200);
  }
  fill(173, 25, 96);
  //texture(img)
  stroke(0)
  ellipsoid(200, 200 *(1-omega*omega), 200);
}

function mousePressed() {
    if (playing) {
        noLoop()
        playing = false
    } else {
        loop()
        playing = true
    }
}

function showOriginal() {
    console.log('This works')
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        omega -= 0.025
    }

    if (keyCode === RIGHT_ARROW) {
        omega += 0.025
    }
}
/*
function mouseDragged() {
    if (mouseX > 400){
        omega += 0.005
    } else {omega -= 0.005}

    if (omega > 0.9) {
        omega = 0.9;
    } else if (omega <= 0) {
        omega = 0;
    }
}
*/