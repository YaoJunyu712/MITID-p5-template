// 👉 https://p5js.org/reference/

const myButton = document.getElementById("myButton")


function setup() {
  // setup runs once
  createCanvas(500, 500);
}

function draw() {
//   // draw runs repeatedly
//   background(200);

//   strokeWeight(5);
//   stroke(0, 0, 255);
//   fill(255, 0, 0);
//   circle(50, 50, 100);

//   noStroke();

//   // 生成随机颜色
//   let randomRColor = random(0, 255);
//   let randomGColor = random(0, 255);
//   let randomBColor = random(0, 255);

//   // 使用随机颜色绘制矩形
//   fill(randomRColor, randomGColor, randomBColor);
//   rect(0, 0, mouseX, mouseY);
// }

myButton.addEventListener("click",function(){
     // do stuffs
    let randomColor = random(0,255);
    background(randomColor);
})