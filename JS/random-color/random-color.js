let button = document.querySelector("button");

button.addEventListener("click", function () {
  let h3 = document.querySelector("h3");
  let randomColor = getRandomColor();
  h3.innerText = randomColor;

  console.log("color updated");

  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}
