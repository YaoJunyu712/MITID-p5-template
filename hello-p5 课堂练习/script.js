let myButton;
let currentScheme;

// 猫咪颜色方案切换
let colorSchemes = [
  {
    body: [250, 245, 235],      // 奶白
    face: [255, 250, 245],      
    pattern: [170, 140, 120],   // 奶咖
    ears: [100, 75, 60]
  },
  {
    body: [240, 220, 200],      // 焦糖，菲佣猫
    face: [245, 230, 210],
    pattern: [180, 120, 100],
    ears: [120, 80, 50]
  },

  {
    body: [245, 245, 245],      // 奶白偏粉
    face: [255, 250, 250],
    pattern: [200, 180, 170],
    ears: [130, 110, 100]
  }
];

function setup() {
  createCanvas(500, 500);
  myButton = document.getElementById("myButton");

  myButton.addEventListener("click", function() {
    currentScheme = random(colorSchemes);
    drawCat(currentScheme);
  });

  // 默认猫
  currentScheme = colorSchemes[0];
  drawCat(currentScheme);
}

// 小猫咪函数
function drawCat(colors) {
  background(240, 230, 220);
  noStroke();

  // 金宝的尾巴
  fill(colors.pattern);
  ellipse(370, 420, 160, 40);
 

  //金宝胖胖的身体
  fill(colors.body);
  ellipse(250, 350, 300, 230);

  //金宝的小手手
  fill(colors.face);
  ellipse(210, 430, 50, 30);
  ellipse(290, 430, 50, 30);

  //尖尖的耳朵
  fill(colors.ears);
  triangle(160, 170, 200, 60, 230, 180);
  triangle(340, 170, 300, 60, 270, 180);

  //大猫脸
fill(colors.face);
ellipse(250, 240, 210, 190);



// 粉色小鼻子！
fill(colors.face[0], colors.face[1], colors.face[2], 180); // 半透明

  
//金宝又大又圆的大猫眼！中间有高光点
  fill(180, 220, 255);
  ellipse(215, 230, 38, 32);
  ellipse(285, 230, 38, 32);
  fill(40, 80, 150);
  ellipse(215, 230, 18, 25);
  ellipse(285, 230, 18, 25);
  fill(255);
  ellipse(220, 225, 6, 6);
  ellipse(290, 225, 6, 6);

  //鼻子
  fill(210, 150, 150);
  triangle(245, 250, 255, 250, 250, 260);

  // 微笑唇
  noFill();
  stroke(100);
  strokeWeight(2);
  arc(240, 265, 15, 10, 0, PI);
  arc(260, 265, 15, 10, 0, PI);

  //小猫腮红
  noStroke();
  fill(255, 180, 180, 150);
  ellipse(200, 260, 25, 15);
  ellipse(300, 260, 25, 15);
}