let canvas;
let startBtn;
let stopBtn;

function setup() {
  createCanvas(300, 300).style("background", "#eee");

  let btnsContainer = createDiv();
  btnsContainer.style("display", "flex");
  btnsContainer.style("gap", "30px");
  btnsContainer.style("height", "50px");
  btnsContainer.style("translate", "-50% -50%");
  btnsContainer.position(158, 158);

  startBtn = createButton("START");
  stopBtn = createButton("STOP");

  startBtn.style("width", "100px");
  stopBtn.style("width", "100px");

  startBtn.style("border-radius", "8px");
  stopBtn.style("border-radius", "8px");

  startBtn.parent(btnsContainer);
  stopBtn.parent(btnsContainer);

  startBtn.mousePressed(startColours);
  startBtn.mousePressed(stopColours);
}

function startColours() {
  startBtn.style("background", "#4A86E8");
  stopBtn.style("background", "#CC0000");
}