(function(){
    let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();
  


//event listeners
window.addEventListener('keydown',onKeyDown, false);
window.addEventListener('keyup', onKeyUp, false);

//keycode event listeners

function onKeyDown(event){
    let keyCode = event.keyCode;
    switch(keyCode){
        case 68: //D
        keyD = true;
        break;
        case 83: //S
        keyS = true;
        break;
        case 65: //a
        keyA = true;
        break;
         case 87: //w
        keyW = true;
        break;
            
        case 74: //J
        keyLeft = true;
        break;
        case 73: //I
        keyUp = true;
        break;
        case 76: //L
        keyRight = true;
        break;
        case 75: //K
        keyDown = true;
        break;

        
    }
}
function onKeyUp(event){
    let keyCode = event.keyCode;
    switch(keyCode){
        case 68: //D
        keyD = false;
        break;
        case 83: //S
        keyS = false;
        break;
        case 65: //a
        keyA = false;
        break;
         case 87: //w
        keyW = false;
        break;
        case 74: //leftarrow
        keyLeft = false;
        break;
        case 73: //uparrow
        keyUp = false;
        break;
        case 76: //rightarrow
        keyRight = false;
        break;
        case 75: //downarrow
        keyDown = false;
        break;

        
    }
}

//global variables

let canvasH = 600;
let canvasW = 600;

let oneX = 10;
let oneY = 10;
let oneH = 25;
let oneW = 25;

let twoX =550;
let twoY = 500;
let twoH =25;
let twoW = 25;

let keyW = false;
let keyA = false;
let keyS = false;
let keyD = false;

let keyUp = false;
let keyLeft = false;
let keyDown = false;
let keyRight = false;

let topX = 0
let topY = 0
let topW = canvasW
let topH = 10

let bottomX = 0
let bottomY = canvasH -10
let bottomW = canvasW 
let bottomH = 10

let leftX = 0
let leftY = 0 
let leftW = 10
let leftH = canvasH

let rightX = canvasW -10
let rightY = 0
let rightW = 10
let rightH = canvasH
let gamemusic = true

let bump = new Audio("sounds/bump.wav")
let lavaDamage = new Audio('sounds/damage.wav')
let coin = new Audio('sounds/coin.wav')
let music = new Audio('sounds/music.wav')
let winnoise = new Audio('sounds/win.wav')

let coinW = 10
let coinH = 10
let acoinX = Math.random() * (570 - 15) + 15;
let acoinY = Math.random() * (570 - 15) + 15;
let bcoinX = Math.random() * (570 - 15) + 15;
let bcoinY = Math.random() * (570 - 15) + 15;
let coinX = Math.random() * (570 - 15) + 15;
let coinY = Math.random() * (570 - 15) + 15;
let dcoinX = Math.random() * (570 - 15) + 15;
let dcoinY = Math.random() * (570 - 15) + 15;
let ecoinX = Math.random() * (570 - 15) + 15;
let ecoinY = Math.random() * (570 - 15) + 15;

let ccoin = true
let acoin = true
let bcoin = true
let dcoin = true
let ecoin = true

let p1coin =0
let p2coin=0





//animation function
function drawStuff() {
    
    //starting stuff
    
    window.requestAnimationFrame(drawStuff);
    let canvas = document.getElementById("game");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 600, 600);
    ctx.fillStyle = "blue";  
    ctx.font = "30px Arial";
    
    //walls
    
    ctx.fillRect(topX,topY,topW,topH)
    ctx.fillRect(bottomX,bottomY,bottomW,bottomH)
    ctx.fillRect(leftX,leftY,leftW,leftH)
    ctx.fillRect(rightX,rightY,rightW,rightH)
    
    //player one
    
    ctx.fillStyle = "green"; 
    ctx.fillRect(oneX, oneY, oneW, oneH)
    ctx.fillText(p1coin, canvasW/4, canvasH - (canvasH/10))
    ctx.fillText('player one coins:', (canvasW/4)-100, (canvasH - (canvasH/10))-45)
    
    //player two
    
    ctx.fillStyle = "red"; 
    ctx.fillRect(twoX,twoY,twoW,twoH)
    ctx.fillText(p2coin, canvasW - (canvasW/4), canvasH - (canvasH/10))
     ctx.fillText('player two coins:', (canvasW - (canvasW/4))-100, (canvasH - (canvasH/10))-45)
    
  
    
    
     

    ctx.fillStyle = 'yellow'
        if(acoin == true){ctx.fillRect(acoinX,acoinY,coinW,coinH)}
   if(ccoin == true){ctx.fillRect(coinX,coinY,coinW,coinH)}
    if(bcoin == true){ctx.fillRect(bcoinX,bcoinY,coinW,coinH)}
    if(dcoin == true){ctx.fillRect(dcoinX,dcoinY,coinW,coinH)}
    if(ecoin == true){ctx.fillRect(ecoinX,ecoinY,coinW,coinH)}
    
    
    
    

    
    
    music
    if (gamemusic == true){
        music.play()
    }
    
    
    //player one WASD
    
    if (keyW == true){
        oneY -= 5
    }
    if (keyA == true){
        oneX -= 5
    }
    if(keyS == true){
        oneY += 5
    }
    if(keyD == true){
        oneX += 5
    }
    
    //player two arrow keys
    
    if (keyUp == true){
        twoY -= 5
    }
    if (keyLeft == true){
        twoX -= 5
    }
    if(keyDown == true){
        twoY += 5
    }
    if(keyRight == true){
        twoX += 5
    }
    
    //player one collision
     if (oneX < bottomX + bottomW &&
  oneX + oneW > bottomX &&
  oneY < bottomY + bottomH &&
  oneY + oneH > bottomY) {
    bump.play();
   oneY-= 5
  }

 if (oneX < topX + topW &&
  oneX + oneW > topX &&
  oneY < topY + topH &&
  oneY + oneH > topY) {
    bump.play();
   oneY+= 5
  }


 if (oneX < rightX + rightW &&
  oneX + oneW > rightX &&
  oneY < rightY + rightH &&
  oneY + oneH > rightY) {
    bump.play();
   oneX-= 5
  }


    if (oneX < leftX + leftW &&
      oneX + oneW > leftX &&
      oneY < leftY + leftH &&
      oneY + oneH > leftY) {
        bump.play();
       oneX+= 5
      }
    
  //player two collision
     if (twoX < bottomX + bottomW &&
  twoX + twoW > bottomX &&
  twoY < bottomY + bottomH &&
  twoY + twoH > bottomY) {
    twoY-= 5
    bump.play();
   
  }
    
if (twoX < topX + topW &&
  twoX + twoW > topX &&
  twoY < topY + topH &&
  twoY + twoH > topY) {
    bump.play();
   twoY += 5
  }
                                                   


 if (twoX < rightX + rightW &&
  twoX + twoW > rightX &&
  twoY < rightY + rightH &&
  twoY + twoH > rightY) {
    bump.play();
   twoX-= 5
  }


    if (twoX < leftX + leftW &&
      twoX + twoW > leftX &&
      twoY < leftY + leftH &&
      twoY + twoH > leftY) {
        bump.play();
       twoX+= 5
      }
    
    //coin collision
        if (oneX < acoinX + coinW &&
  oneX + oneW > acoinX &&
  oneY < acoinY + coinH &&
  oneY + oneH > acoinY && acoin ==true) {
    coin.play();
   ctx.clearRect(acoinX,acoinY,coinW,coinH)
   acoin = false
            p1coin++
  }
   if (twoX < acoinX + coinW &&
  twoX + twoW > acoinX &&
  twoY < acoinY + coinH &&
  twoY + twoH > acoinY&& acoin ==true) {
    coin.play();
   ctx.clearRect(acoinX,acoinY,coinW,coinH)
       acoin = false
       p2coin++
  }
      if (oneX < bcoinX + coinW &&
  oneX + oneW > bcoinX &&
  oneY < bcoinY + coinH &&
  oneY + oneH > bcoinY&& bcoin ==true) {
    coin.play();
   ctx.clearRect(bcoinX,bcoinY,coinW,coinH)
          bcoin = false
          p1coin++
  }
   if (twoX < bcoinX + coinW &&
  twoX + twoW > bcoinX &&
  twoY < bcoinY + coinH &&
  twoY + twoH > bcoinY&& bcoin ==true) {
    coin.play();
   ctx.clearRect(bcoinX,bcoinY,coinW,coinH)
       bcoin=false
       p2coin++
   }
    if (oneX < coinX + coinW &&
        oneX + oneW > coinX &&
        oneY < coinY + coinH &&
        oneY + oneH > coinY&& ccoin ==true) {
        coin.play();
        ctx.clearRect(coinX,coinY,coinH,coinW)
        ccoin = false
        p1coin++
    }
    if (twoX < coinX + coinW &&
        twoX + twoW > coinX &&
        twoY < coinY + coinH &&
        twoY + twoH > coinY&& ccoin ==true) {
        coin.play();
        ctx.clearRect(coinX,coinY,coinW,coinH)
        ccoin=false
        p2coin++
    }
    
    
     if (oneX < dcoinX + coinW &&
  oneX + oneW > dcoinX &&
  oneY < dcoinY + coinH &&
  oneY + oneH > dcoinY&& dcoin ==true) {
    coin.play();
   ctx.clearRect(dcoinX,dcoinY,coinW,coinH)
          dcoin = false
          p1coin++
  }
   if (twoX < dcoinX + coinW &&
  twoX + twoW > dcoinX &&
  twoY < dcoinY + coinH &&
  twoY + twoH > dcoinY&& dcoin ==true) {
    coin.play();
   ctx.clearRect(dcoinX,dcoinY,coinW,coinH)
       dcoin=false
       p2coin++
  }
     if (oneX < ecoinX + coinW &&
  oneX + oneW > ecoinX &&
  oneY < ecoinY + coinH &&
  oneY + oneH > ecoinY&& ecoin ==true) {
    coin.play();
   ctx.clearRect(ecoinX,ecoinY,coinW,coinH)
          ecoin = false
          p1coin++
  }
   if (twoX < ecoinX + coinW &&
  twoX + twoW > ecoinX &&
  twoY < ecoinY + coinH &&
  twoY + twoH > ecoinY&& ecoin ==true) {
    coin.play();
   ctx.clearRect(ecoinX,ecoinY,coinW,coinH)
       ecoin=false
       p2coin++
  }

    if (acoin == false && bcoin == false && ccoin == false && dcoin == false && ecoin == false){
        
        if(p1coin > p2coin){
            ctx.fillText('Player One Wins!', (canvasW/2)-100, canvasH/2)
            winnoise.play()
        
        }else if (p2coin > p1coin){
        
        
            ctx.fillText('Player Two Wins!', (canvasW/2)-100, canvasH/2)
            winnoise.play()
        }
     
        
        
    }









    

}


  window.requestAnimationFrame(drawStuff);