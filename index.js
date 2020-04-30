var regl = createREGL()

regl.clear({
  color: [0, 0, 0, 1],
  depth: 1
});

let xOffset = 0;
let yOffset = 0;
let xVelocity = 0;
let yVelocity = 0;
const ground = -.5;

const keys = {};
window.onkeyup = (e) => { keys[e.keyCode] = false; requestAnimationFrame(updatePosition) }
window.onkeydown = (e) => { keys[e.keyCode] = true; requestAnimationFrame(updatePosition) }

function updatePosition() {

  if (keys[37]) {
    xVelocity = -1;
  }
  if (keys[38] && yVelocity === 0) {
    yVelocity = 1;
  }
  if (keys[39]) {
    xVelocity = 1;
  }

  const gravity = -.05;
  yVelocity += gravity;
  const newY = yVelocity * .1;
  xOffset += xVelocity * .01;
  yOffset += newY;

  if (yOffset >= .1 && yOffset <= .2 && xOffset >= -1.1 && xOffset <= -.9) {
    yVelocity = 0;
    xVelocity = 0;
  }

  if (yOffset <= ground) {
    yOffset = ground;
    yVelocity = 0;
    xVelocity = 0;
  }

  console.log('updatePosition: ', {
    xOffset,
    yOffset
  });
  runRegl(regl);

  if (xVelocity || yVelocity) {
    requestAnimationFrame(updatePosition)
  }
}
requestAnimationFrame(updatePosition);