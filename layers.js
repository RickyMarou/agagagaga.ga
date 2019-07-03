const main = document.getElementById("main")
const og = document.querySelector("[data-layer]")
const layer = og.cloneNode(true)

let scrollPosition = window.scrollY
let layerCount = 0

og.addEventListener("animationend", function animationend() {
  og.removeEventListener("animationend", animationend)
  og.parentElement.removeChild(og)
})

window.addEventListener("scroll", () => {
  scrollPosition = window.scrollY
})

document.addEventListener("click", mouseMoveEvent => {
  createLayer({
    x: mouseMoveEvent.clientX,
    y: mouseMoveEvent.clientY + scrollPosition
  })
})

setInterval(() => {
  const { pageXOffset, innerHeight, innerWidth } = window

  const x = pageXOffset + getRandomInt(50, innerWidth - 50)
  const y = pageYOffset + getRandomInt(50, innerHeight - 50)

  createLayer({ x, y })
}, 1000)

function createLayer({ x, y }) {
  const newLayer = layer.cloneNode(true)
  newLayer.setAttribute("data-layer", layerCount++)
  newLayer.addEventListener("animationend", function animationend() {
    newLayer.removeEventListener("animationend", animationend)
    main.removeChild(newLayer)
  })
  newLayer.style.setProperty("--circleX", `${x}px`)
  newLayer.style.setProperty("--circleY", `${y}px`)
  main.appendChild(newLayer)
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
