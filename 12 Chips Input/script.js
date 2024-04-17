const form = document.querySelector("#form");
const userInput = document.querySelector("#userInput");
const chipDisplay = document.querySelector(".chips-display");
const chip = document.querySelector(".chip")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if(userInput.value.trim() !== ""){
        const chip = document.createElement("div")
        chip.setAttribute("class", "chip")
    
        const span = document.createElement("span")
        span.setAttribute("class", "chip-name")
        span.innerText = userInput.value.trim();
    
        const button = document.createElement("button")
        button.setAttribute("class", "remove")
        button.innerText = "✕"
    
        chip.append(span);
        chip.append(button);
    
        chipDisplay.append(chip)
    }

    userInput.value = ""

})

chipDisplay.addEventListener("click", (e) => {
    if(e.target.className == "remove"){
        e.target.parentElement.remove()
    }
})
