var bgimage,tomimage1,tominage2,tomimage3,tom,jerryimage1,jerryimage2,jerryimage3,jerry
function preload() {
bgimage = loadImage("images/garden.png")
tomimage1 = loadAnimation("images/cat1.png")
tomimage2 = loadAnimation("images/cat2.png","images/cat3.png")
tomimage3 = loadAnimation("images/cat4.png")
jerryimage1 = loadAnimation("images/mouse1.png")
jerryimage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
jerryimage3 = loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(870,600)
    jerry = createSprite(200,600)
    tom.addAnimation("tom",tomimage1)
    jerry.addAnimation("jerry",jerryimage1)
    tom.scale= 0.2
    jerry.scale = 0.15

}

function draw() {

    background(bgimage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0
        tom.addAnimation("tomlast",tomimage3)
        tom.scale = 0.2
        tom.x = 300
        tom.changeAnimation("tomlast")

        jerry.addAnimation("jerrylast",jerryimage3)
        jerry.changeAnimation("jerrylast")
        jerry.scale=0.15
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      tom.velocityX=-5
      tom.addAnimation("tomrun",tomimage2)
      tom.changeAnimation("tomrun")
      jerry.addAnimation("jerryrun",jerryimage2)
      jerry.changeAnimation("jerryrun")

  }


}
