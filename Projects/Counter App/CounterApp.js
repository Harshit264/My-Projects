let entryEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save(){
    let Storage = count + " - "
    entryEl.textContent += Storage
    countEl.textContent = 0
    count = 0
}