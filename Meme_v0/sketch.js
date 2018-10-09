var meeImg;

function preload(){
    meeImg= loadImage("meseeks.jpg")
}

function setup() {
    createCanvas(800, 800); 
}

function draw () {
    background ('black');
    image(meeImg,50,50);
}
