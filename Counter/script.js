const count = document.querySelector(".count");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const reset = document.querySelector("#reset")
const inputValue = document.querySelector("#changeBy")

console.log(changeBy.value);
// plus.addEventListener("click", digitPlus)
// minus.addEventListener("click", digitMinus)


// function digitPlus(){
//     count.innerText = Number(count.innerText) + Number(changeBy.value)
// }

// function digitMinus(){
//     count.innerText = Number(count.innerText) - Number(changeBy.value)
// }

plus.addEventListener("click", () => {
    const countValue = parseInt(count.innerText)
    const inputValues = parseInt(inputValue.value)
    count.innerText = countValue + inputValues
})
minus.addEventListener("click", () => {
    const countValue = parseInt(count.innerText)
    const inputValues = parseInt(inputValue.value)
    count.innerText = countValue - inputValues
})


reset.addEventListener("click", (() => {
    count.innerText = "0"
}))
