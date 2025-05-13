let canvas;
let startBtn;
let stopBtn;
let toggle = true;
let running = false;
let runningInterval;

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
  stopBtn.mousePressed(stopColours);
}

function startColours() {
  if (running) return;

  startBtn.style("background", "#4A86E8");
  stopBtn.style("background", "#CC0000");

  runningInterval = setInterval(() => {

    console.log("in interval");
    running = true;

    if (toggle) {
      startBtn.style("background", "#CC0000");
      stopBtn.style("background", "#4A86E8");
      toggle = !toggle;
    } else {
      startBtn.style("background", "#4A86E8");
      stopBtn.style("background", "#CC0000");
      toggle = !toggle;
    }
  }, 1000);

}

function stopColours() {
  clearInterval(runningInterval);
  running = false;
}