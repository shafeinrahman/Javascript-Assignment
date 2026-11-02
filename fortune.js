const fortunes = [
    "Give Up.",
    "You are the only one who failed.",
    "You can't do it.",
    "You are not good enough.",
    "You will never succeed.",
    "You will always be a copper",
    "Maelstrom is coming for you.",
    "Night City will gobble you up.",
    "You will never be a legend.",
    "You will always be a nobody in NC"
];

const fontColors   = ["#1f2937", "#7f1d1d", "#14532d", "#1e3a8a", "#581c87"];
const bgColors     = ["#fef3c7", "#dbeafe", "#dcfce7", "#fce7f3", "#e0e7ff"];
const borderColors = ["#fbbf24", "#60a5fa", "#4ade80", "#f472b6", "#a78bfa"];
const fontStyles = [
  { size: "1.3rem", family: "Georgia, serif" },
  { size: "1.5rem", family: "Arial, sans-serif" },
  { size: "1.2rem", family: "'Courier New', monospace" },
  { size: "1.6rem", family: "'Trebuchet MS', sans-serif" }
];

const box = document.getElementById("fortune-box");

const randomIndex = Math.floor(Math.random() * fortunes.length);
box.textContent = fortunes[randomIndex];

let fontColorIndex = 0;
let bgColorIndex = 0;
let borderColorIndex = 0;
let fontStyleIndex = 0;

document.getElementById("btn-1").addEventListener("click", function () {
  //fontColorIndex = (fontColorIndex + 1) % fontColors.length;
  box.style.color = fontColors[0];
  //bgColorIndex = (bgColorIndex + 1) % bgColors.length;
  box.style.backgroundColor = bgColors[0];
  //borderColorIndex = (borderColorIndex + 1) % borderColors.length;
  box.style.borderColor = borderColors[0];
  //fontStyleIndex = (fontStyleIndex + 1) % fontStyles.length;
  box.style.fontSize = fontStyles[0].size;
  box.style.fontFamily = fontStyles[0].family;
});

document.getElementById("btn-2").addEventListener("click", function () {
  //fontColorIndex = (fontColorIndex + 2) % fontColors.length;
  box.style.color = fontColors[1];
  //bgColorIndex = (bgColorIndex + 2) % bgColors.length;
  box.style.backgroundColor = bgColors[1];
  //borderColorIndex = (borderColorIndex + 2) % borderColors.length;
  box.style.borderColor = borderColors[1];
  //fontStyleIndex = (fontStyleIndex + 2) % fontStyles.length;
  box.style.fontSize = fontStyles[1].size;
  box.style.fontFamily = fontStyles[1].family;
});

document.getElementById("btn-3").addEventListener("click", function () {
  //fontColorIndex = (fontColorIndex + 3) % fontColors.length;
  box.style.color = fontColors[2];
  //bgColorIndex = (bgColorIndex + 3) % bgColors.length;
  box.style.backgroundColor = bgColors[2];
  //borderColorIndex = (borderColorIndex + 3) % borderColors.length;
  box.style.borderColor = borderColors[2];
  //fontStyleIndex = (fontStyleIndex + 3) % fontStyles.length;
  box.style.fontSize = fontStyles[2].size;
  box.style.fontFamily = fontStyles[2].family;
});

document.getElementById("btn-4").addEventListener("click", function () {
  //fontColorIndex = (fontColorIndex + 4) % fontColors.length;
  box.style.color = fontColors[3];
  //bgColorIndex = (bgColorIndex + 4) % bgColors.length;
  box.style.backgroundColor = bgColors[3];
  //borderColorIndex = (borderColorIndex + 4) % borderColors.length;
  box.style.borderColor = borderColors[3];
  //fontStyleIndex = (fontStyleIndex + 4) % fontStyles.length;
  box.style.fontSize = fontStyles[3].size;
  box.style.fontFamily = fontStyles[3].family;
});