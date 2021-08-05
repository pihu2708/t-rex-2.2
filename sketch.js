
//loads the images, animation and sound
function preload(){
  t_rex=loadAnimation('trex1.png','trex3.png','trex4.png')
  groundimg=loadImage('ground2.png')
  cloudimg= loadImage('cloud.png')
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,180,5,4)
  trex.addAnimation('walking',t_rex)
  trex.scale=0.6
  ground=createSprite(300,190,600,20)
  ground.addImage(groundimg)
  ground2=createSprite(300,200,600,20)
  ground2.visible=false
  

}

//indentation - giving tab space in the begining of line

function draw(){
  background('grey')

  trex.collide(ground2)
  if (keyDown('space')&&trex.y>=162) {
    trex.velocityY=-8 
  }
  trex.velocityY=trex.velocityY+0.3
  ground.velocityX=-5
  if(ground.x<0){
    ground.x=600
  }

  clouds()
  drawSprites()
}

function clouds(){
  if(frameCount%60===0){
    cloud =createSprite(600,random(30,100),60,50)
    cloud.velocityX= -4
    cloud.addImage(cloudimg)
    cloud.scale= 0.6
    trex.depth=cloud.depth+1
  }
  }