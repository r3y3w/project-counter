const counterEl = document.getElementById('counter')
const totalCount = document.getElementById('total')
let count = 0

//function that increases
function increase() {
    // count = count + 1
    count++  // shorthand for the line before
    counterEl.innerHTML = count
}

// function that decreases
function decrease() {
    // count = count - 1
    count-- // this shorthand for the line before
    counterEl.innerHTML = count
}

// bonus fucntion that prinits total
function printTotal() {
    let countStr = count + ' - '
    totalCount.innerHTML += countStr
}