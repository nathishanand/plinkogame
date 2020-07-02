const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies


var ground;
var rows;
var plinkos=[];
var particles=[];
var rows=[];
var rowsHeight=150;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1000,600);
  ground = new Ground(300,590,2000,50)
  console.log("ground.x")
  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 75))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,125))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,175))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,275))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,325))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,375))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,425))
  }
  for(var k = 0; k <=width; k = k+80){
    rows.push(new Rows(k, height-rowsHeight/2, 10, rowsHeight));
  }

}

function draw() {
  if(frameCount % 30 === 0){
    particle = new Particle(random(120, 500), 0, 7, random(0, 360));
    particles.push(particle);
  }
  Engine.update(engine, 25);
  background("yellow");  
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
  for(var k = 0; k<rows.length;k++){
    rows[k].display();
 }
 for(var j = 0; j<plinkos.length;j++){
  plinkos[j].display();
}

  ground.display()
}