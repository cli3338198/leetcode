const body = document.getElementsByTagName("body")[0];
const button = document.getElementById("button");
const input = document.getElementById("input");

body.style.width = "100vw";
body.style.height = "100vh";

// Get the screen width and height
// Find the center of the screen

const width = body.offsetWidth;
const height = body.offsetHeight;
const startX = Math.floor(width / 2);
const startY = Math.floor(height / 2);

/**************************************************************************** */

input.addEventListener("change", handleChange);
button.addEventListener("click", handleClick);

function handleChange(evt) {
  const { value: n } = evt.target;

  button.innerText = `Generate ${n} Tree`;

  // Clear the body TODO:
}

function handleClick() {
  // Get the input value
  const n = +input.value;

  if (n) {
    drawHTree(startX, startY, 200, n);
  }
}

/**************************************************************************** */

/**
 * @param {number} x - x coordinate of the center of the H
 * @param {number} y - y coordinate of the center of the H
 * @param {number} length - the length/width of the H
 * @param {number} n - the depth of the H tree
 */
function drawHTree(x, y, length, n) {
  // If n or the length equals zero return
  if (n === 0 || length === 0) return;

  // Draw three lines to make the H
  // Top left = x - length/2, y - length/2 => x - length/2, y + length/2
  drawLine(x - length / 2, y - length / 2, x - length / 2, y + length / 2);

  // Center left = x - length/2, y => x + length/2, y
  drawLine(x - length / 2, y, x + length / 2, y);

  // Top right = x + length/2, y - length/2 => x + length/2, y + length/2
  drawLine(x + length / 2, y - length / 2, x + length / 2, y + length / 2);

  // Find the four corners and continue drawing Hs
  const newLength = Math.floor(length / 2);

  drawHTree(x - length / 2, y - length / 2, newLength, n - 1); // top left
  drawHTree(x + length / 2, y - length / 2, newLength, n - 1); // top right
  drawHTree(x - length / 2, y + length / 2, newLength, n - 1); // bottom left
  drawHTree(x + length / 2, y + length / 2, newLength, n - 1); // bottom right
}

/**
 * @param {number} x0 - x coordinate of the start of the line
 * @param {number} y0 - y coordinate of the start of the line
 * @param {number} x1 - x coordinate of the end of the line
 * @param {number} y1 - y coordinate of the end of the line
 */
function drawLine(x0, y0, x1, y1) {
  // Move from start coord to end coord
  // Assume only vertical or horizontal
  // if y0 and y1 are the same, we move horizontally
  if (y0 === y1) {
    for (let x = x0; x <= x1; x++) {
      drawDot(x, y0);
    }
  }
  // if x0 and x1 are the same, we move vertically
  if (x0 === x1) {
    for (let y = y0; y <= y1; y++) {
      drawDot(x0, y);
    }
  }
}

/**
 * @param {number} x
 * @param {number} y
 */
function drawDot(x, y) {
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = x + "px";
  dot.style.top = y + "px";

  body.appendChild(dot);
}
