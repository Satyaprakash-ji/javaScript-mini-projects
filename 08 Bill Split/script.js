const inputAmount = document.querySelector("#amount");
const tipContainer = document.querySelector(".btn-tip")
const customTip = document.querySelector("#custom-tip");
const inputPerson = document.querySelector("#person");
const billGenerateBtn = document.querySelector("#generate-bill");

const tipAmount = document.querySelector(".tip-value");
const totalAmount = document.querySelector(".total-value");
const eachPersonBill = document.querySelector(".each-bill");
const resetBtn = document.querySelector("#reset");

let tipPersentage = 0


inputAmount.addEventListener("input", (e) => {
    console.log();
    if(e.target.value){
        [...tipContainer.children].forEach((tip) => {
            tip.classList.add("true")
            tip.disabled = false
        })
        customTip.disabled = false
        inputPerson.disabled = false
    }else{
        [...tipContainer.children].forEach((tip) => {
            tip.classList.remove("true")
            tip.disabled = true
            tip.classList.remove("active")
        })
        customTip.value = ""
        inputPerson.value = ""
        billGenerateBtn.classList.remove("active")
        customTip.disabled = true
        inputPerson.disabled = true
    }

})


tipContainer.addEventListener("click", (e) => {

    if(e.target !== tipContainer){
        [...tipContainer.children].forEach(tip => tip.classList.remove("active"))
        e.target.classList.add("active")
        tipPersentage = parseInt(e.target.innerText)
        customTip.value = ''
        if(inputPerson.value && tipPersentage){
            billGenerateBtn.classList.add("active")
            billGenerateBtn.disabled = false
        }else{
            billGenerateBtn.classList.remove("active")
            billGenerateBtn.disabled = true
        }
    }
})

customTip.addEventListener("input", (e) => {
    tipPersentage = parseInt(customTip.value)
    if(e.target.value){
        [...tipContainer.children].forEach(tip => tip.classList.remove("active"))
    }

    if(inputPerson.value && tipPersentage){
        billGenerateBtn.classList.add("active")
        billGenerateBtn.disabled = false
    }else{
        billGenerateBtn.classList.remove("active")
        billGenerateBtn.disabled = true
    }
})

inputPerson.addEventListener("input", () => {
    if(inputPerson.value && tipPersentage){
        billGenerateBtn.classList.add("active")
        billGenerateBtn.disabled = false
    }else{
        billGenerateBtn.classList.remove("active")
        billGenerateBtn.disabled = true
    }
})


billGenerateBtn.addEventListener("click", () => {
    let tip = parseFloat(((parseFloat(inputAmount.value)/100)*parseFloat(tipPersentage))).toFixed(2)
    let total = parseFloat(parseFloat(tip)+parseFloat(inputAmount.value)).toFixed(2)
    let eachBill = parseFloat(total/parseFloat(inputPerson.value)).toFixed(2)

    tipAmount.innerText = `₹ ${tip}`
    totalAmount.innerText = `₹ ${total}`
    eachPersonBill.innerText = `₹ ${eachBill}`

    resetBtn.style.cursor = "pointer"

})

resetBtn.addEventListener("click", () => {
    tipPersentage = 0
    inputAmount.value = ""
    customTip.value = ""
    inputPerson.value = ""
    tipAmount.innerText = ""
    totalAmount.innerText = ""
    eachPersonBill.innerText = ""
    billGenerateBtn.classList.remove("active")
    billGenerateBtn.disabled = true
    ;[...tipContainer.children].forEach(tip => {
        tip.classList.remove("active")
        tip.classList.remove("true")
        tip.disabled = true
    })


    resetBtn.style.cursor = "not-allowed"
})