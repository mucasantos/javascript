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


//Add Border on images

var image = new SimpleImage("chapel.png");
//print(addBorder(image, 6));

function pixelOnEdge(image,pixel,horizontalThick, verticalThick){
    var x = pixel.getX();
    var y = pixel.getY();
    if (x < verticalThick || x > image.getWidth() - verticalThick){
        return true;
    }
    if (y < horizontalThick || y > image.getHeight() - horizontalThick){
        return true;
    }
    return false;
}

function addBorders(image,horizontalThick, verticalThick){
    for (var px of image.values()){
        if (pixelOnEdge(image,px,horizontalThick,verticalThick)){
            px = setBlack(px);
        }
    }
    return image;
}

image = addBorders(image,40,20);
print(image);

function addBorder(image, thickness){
  for (var px of image.values()){
    var x = px.getX();
    var y = px.getY();
    if (x < thickness){
      px = setBlack(px);
    }
    if (x >= image.getWidth()-thickness){
      px = setBlack(px);
    }
    if (y < thickness){
      px = setBlack(px);
    }
    if (y >= image.getHeight()-thickness){
      px = setBlack(px);
    }
  }
  return image;
}

function addBorder(image, thickness){
    for (var pixel of image.values()){
        if (pixel.getX() < thickness){
            pixel = setBlack(pixel);
        }
        if (pixel.getX() >= image.getWidth()-thickness){
            pixel = setBlack(pixel);
        }
        if (pixel.getY() < thickness){
            pixel = setBlack(pixel);
        }
        if (pixel.getY() >= image.getHeight()-thickness){
            pixel = setBlack(pixel);
        }
    }
    return image;
}

function setBlack(px){
    
    px.setRed(0);
    px.setBlue(0);
    px.setGreen(0);
    
    return px;
}
