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

setInterval(() => {
  const newLayer = layer.cloneNode(true)
  newLayer.setAttribute("data-layer", layerCount++)
  newLayer.addEventListener("animationend", function animationend() {
    newLayer.removeEventListener("animationend", animationend)
    main.removeChild(newLayer)
  })
  main.appendChild(newLayer)

  const x = window.pageXOffset + window.innerWidth / 2
  const y = window.pageYOffset + window.innerHeight / 2

  console.log({
    pageXOffset: window.pageXOffset,
    pageYOffset: window.pageYOffset
  })
  newLayer.style.setProperty("--circleX", `${x}px`)
  newLayer.style.setProperty("--circleY", `${y}px`)
}, 5000)
