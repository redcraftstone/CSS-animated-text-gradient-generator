const fs = require("fs");

// VARIABLES
let filename = "result.txt"; // filename to output to
let degree = 45; // the degree of the animated linear gradient
let background = "rgb(221, 221, 221)"; // any color as string
let highlight = "rgb(255, 255, 255)"; // any color as string
let width = 5; // "width" of the hightlight; just try it out or look into the code
let steps = 100; // count of seperate steps to generate, defaults to 100 -> [0%, ... 100%]

generateGradient(degree, background, highlight, width, steps);

function generateGradient(deg, col1, col2, width, step = 100) {
  var gradient = "";

  gradient += `@keyframes buttons {`;

  for (let i = 0; i <= 100; i = i + 100 / step) {
    if (i - width < 0) {
      gradient += `
      ${i}% {
        background: -webkit-linear-gradient(
          ${deg}deg,
          ${col2} ${i}%,
          ${col1} ${i + width}%,
          ${col1} 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }`;
    } else if (i + width > 100) {
      gradient += `
      ${i}% {
        background: -webkit-linear-gradient(
          ${deg}deg,
          ${col1} 0%,
          ${col1} ${i - width}%,
          ${col2} ${i}%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }`;
    } else {
      gradient += `
      ${i}% {
        background: -webkit-linear-gradient(
          ${deg}deg,
          ${col1} 0%,
          ${col1} ${i - width}%,
          ${col2} ${i}%,
          ${col1} ${i + width}%,
          ${col1} 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }`;
    }
  }
  gradient += `}`;
  fs.writeFileSync("./results/" + filename, gradient);
}
