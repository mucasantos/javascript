// write your code here
//https://www.dukelearntoprogram.com//course1/example/index.php
//
var img = new SimpleImage("rodger.png");

var howBig = img.getWidth();

for (var pixel of img.values()){
    
    if (pixel.getX() < howBig/3) {
        pixel.setRed(255);
    }
    
    if (pixel.getX() >howBig/3 && pixel.getX() < (howBig/3)*2 ) {
        pixel.setGreen(255);
    }
    
    if (pixel.getX() > (howBig/3)*2 ) {
        pixel.setBlue(255);
    }   
}
print(img);


//Part 2
//Swap Red and Green


var img = new SimpleImage("chapel.png");

for(var pixel of img.values()){
    
   swapRedGreen(pixel);
}

function swapRedGreen(pixel){
    
    var red = pixel.getRed();
    var green = pixel.getGreen();
    
    pixel.setRed(green);
    pixel.setGreen(red);
    
}
print(img);

//Part 3
//Turns Blue in Yellow

var img = new SimpleImage("duke_blue_devil.png");
print(img);

for(var pixel of img.values()){
    
   turnsBlueYel(pixel);
}

function turnsBlueYel(pixel){
    
    var red = pixel.getRed();
    var green = pixel.getGreen();
    var blue = pixel.getBlue();
    
    if( red <= 200 && green <= 150 && blue >= 220) {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
    
}
print(img);

// write your code here
// Part 1
//BlueScreen

var bgImage = new SimpleImage("universe1.jpg");
var frontImage = new SimpleImage("drewRobert.png");

for (var pixel of frontImage.values()){
    
    if(pixel.getGreen() <= 255 && pixel.getRed() <= 173 && pixel.getBlue() == 0) {
        
        var x = pixel.getX();
        var y = pixel.getY();
        var mypixel = bgImage.getPixel(x,y); 
        frontImage.setPixel(x,y,mypixel);
    }
}

print(frontImage);
