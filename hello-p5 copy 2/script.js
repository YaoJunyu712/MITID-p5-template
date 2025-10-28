// 👉🏻 https://p5js.org/reference/



function setup() {
    // setup run once
    createCanvas(500, 500);

}

function draw() {
    // draw run repeatedly
    background(200);

    const treePos = {
        posX: 100,
        posY: 300
    };

    const myArray = [40,300,200,450,400,250,100]; 

    const treeArray = [
        {
          posX: 40,
          posY: 100
        },
        {
          posX: 200,
          posY: 100
        },
        {
          posX: 300,
          posY: 400
        }

    ];
    //treeArray[0].posY
    // myArray[1] -> 300
   // drawTree(treePos.posX,treePos.posY);

    for(let i=0; i< treeArray.length; i++){
      drawTree(treeArray[i].posX,treeArray[i].posY);
    }
}

function drawTree(posX,posY){ 
    //tree stem
    fill(110,50,0);
    rect(posX,posY,20,50);
    //tree branches
    fill(0,255,0);
    circle(posX+10,posY- 10,60)

}