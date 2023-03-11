const button = document.getElementById("ubah-BG");
const body = document.querySelector("body");

button.addEventListener("click", function () {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  //   const color3 = getRandomColor();
  body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  showColorStyle();
});

function showColorStyle(el) {
  p.textContent = body.style.background;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
