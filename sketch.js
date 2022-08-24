function preload(){
flechinha=loadImage("./imagens/flecha.png")
Floresta=loadImage("./imagens/floresta.jpg")
Archer=loadImage("./imagens/images-removebg-preview.png")
Zumbi1=loadImage("./imagens/zumbi.png")
Zumbi2=loadImage("./imagens/zumbi2.png")

}

function setup() {
 createCanvas(windowWidth, windowHeight)
 horda1=new Group ()
 horda2=new Group ()
 Arqueiro=createSprite(238, 705)
 Arqueiro.addImage(Archer)
 Arqueiro.setCollider("rectangle",0,0,101,150)
 Arqueiro.debug=false
 //zombie1.setCollider("rectangle",0,0,101,150)
 //zombie1.debug=true
 //zombie2.setCollider("rectangle",0,0,101,200)
 //zombie2.debug=true
}

function draw() {
 image(Floresta,0,0,width, height)
 text(mouseX + ","+mouseY, mouseX, mouseY)
 drawSprites()
 textSize(25)
 fill("#daa520")
 text("score: 0",125,35)
 textSize(25)
 fill("#daa520")
 text("flechas:20",125,75)
 SpawnZombie()
 if(mousePressedOver(Arqueiro)) {
 flecha=createSprite(300, 690)
 flecha.scale=0.4
 flecha.velocityX=20
 flecha.lifetime=1855/20
 flecha.addImage(flechinha)
 if (flecha.isTouching(horda1)) {
    horda1.destroyEach()
 }
 }
}
function SpawnZombie(){
    if(frameCount%45===0) {
    zombie1=createSprite(1855,700)
    zombie1.velocityX=-3
    zombie1.addImage(Zumbi1)
    zombie1.scale=0.6
    zombie1.lifetime=520
    zombie1.x=Math.round(random(1830,1868))
    zombie1.y=Math.round(random(700,750))
     horda1.add(zombie1)   
    }
    if(frameCount%70===0) {
        zombie2=createSprite(1855,700)
        zombie2.velocityX=-5
        zombie2.addImage(Zumbi2)
        zombie2.scale=0.6
        zombie2.lifetime=308
        zombie2.x=Math.round(random(1830,1868))
        zombie2.y=Math.round(random(650,700))
        horda2.add(zombie2)  
            
        }
}

