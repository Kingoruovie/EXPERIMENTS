// const handle = document.querySelector(".handle")
// const progress = document.querySelector(".progress")
// const slider = document.querySelector(".slider")

// let isDragging = false

// function moveHandle(x) {
//     const rect = slider.getBoundingClientRect()
//     let sliderXPositionRelative = x - rect.left - 15
//     console.log(rect)
//     // console.log(sliderXPositionRelative)
//     if (sliderXPositionRelative >= 0 && sliderXPositionRelative <= 470) {
//         handle.style.left = `${sliderXPositionRelative}px`
//         progress.style.width = `${sliderXPositionRelative + 30}px`
//     }
// }

// handle.onmousedown = function (event) {
//     isDragging = true
//     handle.style.cursor = "grabbing"
// }

// document.onmouseup = function (event) {
//     isDragging = false
//     handle.style.cursor = "grab"
// }

// document.addEventListener("mousemove", (event) => {
//     if (isDragging) {
//         // console.log(event.pageX, event.pageY)
//         moveHandle(event.pageX)
//     }
// })


const input = document.querySelector("input")
input.addEventListener("input", (event) => {
    let value = Number(event.target.value)
    input.style.background = `linear-gradient(to right, #f50 ${value}%, #ccc ${value}%)`
    //  = `linear-gradient(to right, #00FFAB ${value}%, #fff ${100 - value}%)`
    console.log(input.style.background)
})