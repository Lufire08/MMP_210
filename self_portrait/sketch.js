function setup() {
    createCanvas(640, 360); 
}

function draw () {
    background ('black');    
    //head
    fill ('tan');
    ellipse (320,180,180,240);
    
    //eyes
    fill ('white');
    ellipse (275,150,50);
    ellipse (365,150,50);
    
    //pupils
    fill ('black')
    line(270, 150, 275, 150);
    line (272,148,273,152);
    line (274,148,270,153);
    
    fill ('black')
    line(370, 150,375, 150);
    line (372,148,373,152);
    line (374,148,370,153);

    
    
    //nose
    fill ('tan')
    arc(315, 159, 20, 20, 0, PI + QUARTER_PI, OPEN);
    
    //mouth
    stroke ('black');
    fill ('tan');
    arc(312, 190, 20, 80, 0, PI + QUARTER_PI, OPEN);
    arc(332, 200, 20, 80, 0, PI + QUARTER_PI, OPEN);

    
    //bow tie
    fill ('red');
    rect (300,272,40,30);
    rect (275,277,25,20);
    rect (340,277,25,20);
    
    //hat
    fill ('darkgrey')
    rect (291,1,50,68);
    rect (260,60,120,10);
    

}