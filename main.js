var canvas = new fabric.Canvas ("mCanvas");
 
var player_x = 10;
var player_y = 10;
var player_object = "";

var block_height = 30;
var block_width = 30;
var block_object = ""; 

function player_update() {
    fabric.Image.fromURL("person.png", function(Img){
        player_object = Img;
        player_object = scaleToWidth(140);
        player_object = scaleToHeight(150);
        player_object.set({
            top : player_y,
            left : player_x
        });
        canvas.add(player_object);
    });
     
}

function new_block(get_img) {
    fabric.Image.fromURL(get_img, function(Img){
        block_object = Img;
        block_object = scaleToWidth(block_width);
        block_object = scaleToHeight(block_height);
        block_object.set({
            top : player_y,
            left : player_x
        });
        canvas.add(block_object);
    });
     
}
window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    keyPressed = e.keyCode

    if(keyPressed == 38)    {
        up();
        console.log("up");
    }
    if(keyPressed == 37)    {
        left();
        console.log("left");
    }
    if(keyPressed == 40)    {
        down();
        console.log("down");
    }
    if(keyPressed == 39)    {
        right();
        console.log("right");
    }
    if(e.shiftKey == true && keyPressed == 80){
        console.log("shift pressed with p");
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("width_span").innerHTML=block_width;
        document.getElementById("height_span").innerHTML=block_height;
    }
    if(e.shiftKey == true && keyPressed == 73){
        console.log("shift pressed with i");
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("width_span").innerHTML=block_width;
        document.getElementById("height_span").innerHTML=block_height;
    }
    if(keyPressed == 68)    {
        new_block("dark_green.png");
        console.log("d");
    }
    if(keyPressed == 67)    {
        new_block("cloud.jpg");
        console.log("c");
    }  
    if(keyPressed == 71)    {
        new_block("ground.png");
        console.log("g");
    } 
    if(keyPressed == 76)    {
        new_block("light_green.png");
        console.log("l");
    }  
    if(keyPressed == 82)    {
        new_block("roof.jpg");
        console.log("r");
    }  
    if(keyPressed == 84)    {
        new_block("trunk.jpg");
        console.log("t");
    }  
    if(keyPressed == 85)    {
        new_block("unique.png");
        console.log("u");
    }  
    if(keyPressed == 87)    {
        new_block("wall.jpg");
        console.log("w");
    }  
    if(keyPressed == 89)    {
        new_block("yellow_wall.jpg");
        console.log("y");
    }  



}

function up(){
    
    if (player_y >= 0){
        player_y = player_y - block_height;
        canvas.remove(player_object);
        player_update();
        console.log("player moved up");
    }
}

function down(){
    
    if (player_y <= 550){
        player_y = player_y + block_height;
        canvas.remove(player_object);
        player_update();
        console.log("player moved down");
    }
}

function left(){
    
    if (player_x >= 0){
        player_x = player_x - block_width;
        canvas.remove(player_object);
        player_update();
        console.log("player moved left");
    }
}

function right(){
    
    if (player_x <= 950){
        player_x = player_x + block_width;
        canvas.remove(player_object);
        player_update();
        console.log("player moved right");
    }
}