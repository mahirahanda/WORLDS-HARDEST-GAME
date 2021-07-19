var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["10df4e88-e9cd-473d-968b-02f78ebfb679","26cc28ae-2096-49a3-b22c-2044bbe1ec99","53198c8c-7cf0-4d80-b6bf-b228b7db6e6b","37fa7a4e-7092-4d83-836b-06c3461377b2","7b1d64a2-1007-444a-be50-51d10ae76543"],"propsByKey":{"10df4e88-e9cd-473d-968b-02f78ebfb679":{"name":"shop","sourceUrl":null,"frameSize":{"x":570,"y":600},"frameCount":1,"looping":true,"frameDelay":12,"version":"w4xyqTptrhMAt6XAm0MnIS8bt57rDlNU","loadedFromSource":true,"saved":true,"sourceSize":{"x":570,"y":600},"rootRelativePath":"assets/10df4e88-e9cd-473d-968b-02f78ebfb679.png"},"26cc28ae-2096-49a3-b22c-2044bbe1ec99":{"name":"cliff","sourceUrl":null,"frameSize":{"x":436,"y":280},"frameCount":1,"looping":true,"frameDelay":12,"version":"opEyqutGoDOjWYgIE80N_3tDZ0vOhSDx","loadedFromSource":true,"saved":true,"sourceSize":{"x":436,"y":280},"rootRelativePath":"assets/26cc28ae-2096-49a3-b22c-2044bbe1ec99.png"},"53198c8c-7cf0-4d80-b6bf-b228b7db6e6b":{"name":"kid","sourceUrl":"assets/api/v1/animation-library/gamelab/SCx.ulQQFsDzgGPaGZ0rdecmoiBgLn4v/category_people/kid_14_side.png","frameSize":{"x":180,"y":291},"frameCount":1,"looping":true,"frameDelay":2,"version":"SCx.ulQQFsDzgGPaGZ0rdecmoiBgLn4v","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":291},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SCx.ulQQFsDzgGPaGZ0rdecmoiBgLn4v/category_people/kid_14_side.png"},"37fa7a4e-7092-4d83-836b-06c3461377b2":{"name":"whale","sourceUrl":"assets/api/v1/animation-library/gamelab/3nnUy2wb9ZDVpZmjPD4E2BL4c0vmiDGm/category_animals/whale.png","frameSize":{"x":397,"y":109},"frameCount":1,"looping":true,"frameDelay":2,"version":"3nnUy2wb9ZDVpZmjPD4E2BL4c0vmiDGm","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":109},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3nnUy2wb9ZDVpZmjPD4E2BL4c0vmiDGm/category_animals/whale.png"},"7b1d64a2-1007-444a-be50-51d10ae76543":{"name":"MOM","sourceUrl":"assets/api/v1/animation-library/gamelab/RqISdHJAs33PuJXA99K.erM2nznM9nLo/category_people/kid_8.png","frameSize":{"x":239,"y":342},"frameCount":1,"looping":true,"frameDelay":2,"version":"RqISdHJAs33PuJXA99K.erM2nznM9nLo","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":239,"y":342},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RqISdHJAs33PuJXA99K.erM2nznM9nLo/category_people/kid_8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 15;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var gameState="serve";
  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(49,257,13,13);
  sam.shapeColor = "green";
sam.setAnimation("kid");
 sam.scale=0.1;
       
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
car1.setAnimation("whale"); 
car1.scale=0.1;
car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.scale=0.1;
  car2.setAnimation("whale"); 
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.setAnimation("whale");
  car3.scale=0.1;
  car4 = createSprite(270,250,10,10);
car4.shapeColor = "red";
car4.setAnimation("whale");
car4.scale=0.1;
var cliff=createSprite(46,270,50,60);
cliff.setAnimation("cliff");
cliff.scale=0.5

var shop = createSprite(361, 200); 
shop.setAnimation("MOM");
shop.scale=0.3;
var cliff2= createSprite(393, 257,50,60);
cliff2.setAnimation("cliff");
cliff2.scale=0.4




function draw() {
   background("skyblue");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  text("MOM,347,100");
  if (keyDown("enter") && gameState=="serve"){
    
   car1.velocityY=7;
car2.velocityY=7;
car3.velocityY=-7;
car4.velocityY=-7;
gameState="play";
  }
if (gameState=="serve"){ 
textSize(22);
fill("black");
text("CLICK ON ENTER TO START", 60, 315); 

}
if(sam.isTouching(car1)|| sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");}
  if (sam.isTouching(shop)) {
  textSize(22);
fill("black");
text("YOU WIN!!", 60, 315); 
  playSound("assets/category_bell/quriky_trill_bling_positive.mp3", false);
playSound("assets/safe.mp3", false);
sam.x=33;
sam.y=244;
life=life=0;
}
if (life==0){
life=life=15;
gameState="serve";
}
if (gameState=="end" && keyDown("r")){
text("press r to restart");
gameState="serve";
}
// create bounceoff function to make the car bounceoff the boundaries
createEdgeSprites();
car1.bounceOff(boundary1);
car2.bounceOff(boundary2);
car2.bounceOff(boundary1);
car1.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
sam.bounceOff(edges);


   sam.bounceOff(boundary1);
sam.bounceOff(boundary2);
if (sam.isTouching(car1)) {
sam.x=49;
sam.y=257;
life=life-1;
}
text("MOM,347,272");
if (sam.isTouching(car2)) {
sam.x=49;
sam.y=257;
life=life-1;
}
if (sam.isTouching(car3)) {
sam.x=49;
sam.y=257;
life=life-1;
}
if (sam.isTouching(car4)) {
sam.x=49;
sam.y=257;
life=life-1;
}
sam.velocityX=0;
sam.velocityY=0;
//Add the condition to make the sam move left and right
if (keyDown("right")) {
  sam.velocityX=+7;
}
if (keyDown("left")) {
  sam.velocityX=-7;
}
if (keyDown("down")) {
  sam.velocityY=+7;
}
if (keyDown("up")) {
  sam.velocityY=-7;
}




  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
