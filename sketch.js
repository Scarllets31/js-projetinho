let sound;

function preload() {
  soundFormats('mp3', 'ogg');
  sound = loadSound('path/to/your/soundfile.mp3');
}

function setup() {
  createCanvas(800, 400);
  sound.play();
}

function draw() {
  if (mouseIsPressed) {
    stroke(255);
    strokeWeight(5);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
