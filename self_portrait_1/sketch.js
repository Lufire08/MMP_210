var headWidth = 180;
var headHeight = 240;
var headX =320;
var headY =180;
var eyeSize = 50;
var lefteyeX = 275;
var lefteyeY = 150;
var righteyeX = 365;
var righteyeY = 150; 
var noseSize = 20;
var noseX = 315;
var noseY = 159;
var mouthWidth = 20;
var mouthHeight = 80;
var leftlipX = 312;
var leftlipY = 190;
var rightlipX = 332;
var rightlipY = 200;
var smallbowsWidth = 25;
var smallbowsHeight = 20;
var leftbowX = 275;
var leftbowY = 277;
var rightbowX = 340;
var rightbowY = 277;
var bowtieWidth = 40;
var bowtieHeight = 30;
var bowtieX = 300;
var bowtieY = 272;
var tophatWidth = 50;
var tophatHeight = 68;
var tophatX = 291;
var tophatY = 1;
var bottomhatWidth = 120; 
var bottomhatHeight = 10;
var bottomhatX = 260;
var bottomhatY = 60;

function setup() {
    createCanvas(640, 360); 
}

function draw () {
    background ('black');    
    //head
    fill ('tan');
    ellipse (headX,headY,headWidth,headHeight);
    
    //eyes
    fill ('white');
    ellipse (lefteyeX,lefteyeY,eyeSize);
    ellipse (righteyeX,righteyeY,eyeSize);
    
    //pupils
    fill ('black')
    line(270, 150, 275, 150);//1
    line (272,148,273,152);//2
    line (274,148,270,153);//3
    
    fill ('black')
    line(370, 150,375, 150);//1a
    line (372,148,373,152);//2a
    line (374,148,370,153);//3a

    
    
    //nose
    fill ('tan')
    arc(noseX, noseY, noseSize, noseSize, 0, PI + QUARTER_PI, OPEN);
    
    //mouth, lips 1 and 2
    stroke ('black');
    fill ('tan');
    arc(leftlipX, leftlipY, mouthWidth, mouthHeight, 0, PI + QUARTER_PI, OPEN);//leftlip
    arc(rightlipX, rightlipY, mouthWidth, mouthHeight, 0, PI + QUARTER_PI, OPEN);//right lip

    
    //bow tie
    fill ('red');
    rect (bowtieX,bowtieY,bowtieWidth, bowtieHeight);// big bow
    rect (leftbowX,leftbowY,smallbowsWidth,smallbowsHeight);//left bow
    rect (rightbowX,rightbowY,smallbowsWidth,smallbowsHeight);// right bow
    
    //hat
    fill ('darkgrey')
    rect (291,1,tophatWidth,tophatHeight);
    rect (260,60,bottomhatWidth,bottomhatHeight);
    

}