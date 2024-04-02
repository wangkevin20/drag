let rectWidth = 180;
let rectHeight = 140; // Adjust the dimensions as needed

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketchContainer'); // Set parent for canvas
  canvas.style('z-index', '1'); // Set canvas z-index to draw over the image
  background(255, 0); // Set canvas background to transparent
}

function draw() {
}

function mouseDragged() {
  if (mouseButton === LEFT) {
    let randX = random(width - rectWidth);
    let randY = random(height - rectHeight);
    
    // Randomize rectangle background color
    let colors = [
      color(127, 255, 212), // Aquamarine
      color(0, 255, 255),   // Cyan
      color(0, 206, 209),   // Dark Cyan
      color(72, 209, 204)   // Medium Turquoise
    ];
    let chosenColor = random(colors);
    
    // Draw the rectangle
    fill(chosenColor); // Random background color
    stroke(0); // Black border
    strokeWeight(2); // Border thickness
    rect(randX, randY, rectWidth, rectHeight); 

    // Load and draw the image inside the rectangle
    let img = createImg('images/test.png');
    img.size(rectWidth, rectHeight);
    img.position(randX, randY);
    img.style('user-select', 'none'); // Prevent image from being highlighted
  }
}

function mousePressed() {
  if (mouseButton === RIGHT) {
    // Reload the page
    window.location.reload();
  }
}




