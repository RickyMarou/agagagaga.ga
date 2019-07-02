let scrollPosition = window.scrollY;
const main = document.getElementById("main");
const og = document.querySelector("[data-layer]");
const layer = og.cloneNode(true);
let layerCount = 0;
og.addEventListener("animationend", function animationend() {
  console.log("animationend");
  og.removeEventListener("animationend", animationend);
  og.parentElement.removeChild(og);
});

console.log({ layer });

window.addEventListener("scroll", () => {
  scrollPosition = window.scrollY;
});

document.addEventListener("click", mouseMoveEvent => {
  mousePosition = {
    x: mouseMoveEvent.clientX,
    y: mouseMoveEvent.clientY + scrollPosition
  };
  const newLayer = layer.cloneNode(true);
  newLayer.setAttribute("data-layer", layerCount++);
  newLayer.addEventListener("animationend", function animationend() {
    newLayer.removeEventListener("animationend", animationend);
    main.removeChild(newLayer);
  });
  main.appendChild(newLayer);
  newLayer.style.setProperty("--circleX", `${mousePosition.x}px`);
  newLayer.style.setProperty("--circleY", `${mousePosition.y}px`);
});
