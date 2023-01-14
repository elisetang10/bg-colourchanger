var box
function setup(){
    createCanvas(400,400)
    background(0)
    box = createSprite(200,200,50,50)
}
function draw(){
    drawSprites()
    if(keyDown(RIGHT_ARROW)){
        background("#F5DEAF")
        box.x+=5
    }
    if(keyDown(DOWN_ARROW)){
        background("lightblue")
        box.y+=5
    }
    if(keyDown(LEFT_ARROW)){
        background("lightpink")
        box.x-=5
    }
    if(keyDown(UP_ARROW)){
        background("#90EE90")
        box.y-=5
    }
}