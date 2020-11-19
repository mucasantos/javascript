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
