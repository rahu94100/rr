//Create variables here
var dog,happydog,database,foodS,foodstock,pos,dos
function preload()
{
  //load images here
  happydog=loadImage("images/1.png");
  dos=loadImage("images/2.png");
}

function setup() {
  createCanvas(700,650);
  foodstock=firebase.database();
   pos=foodstock.ref("Food");
 pos.on("value",readPosition);

  dog=createSprite(350,390,10,10);
 dog.addImage(happydog);
 dog.scale=0.29
}


function draw() {  
  background("black")
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dos);

  }
  drawSprites();
  //add styles here
textSize(28);
text("foodStock:"+foodS,40,50);

}
function readPosition(data){
foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
foodstock.ref("/").update({Food:x});
}

//function showError(){

//}

