const bmiForm = document.querySelector("#bmi-form");
const inputHeight = document.querySelector("#height");
const inputWeight = document.querySelector("#weight");
const bmiValue = document.querySelector("#bmi-value")
const resultBox = document.querySelector("#result")

bmiForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const heightInMeter = inputHeight.value / 100
    const bmi = parseFloat(inputWeight.value / heightInMeter ** 2).toFixed(2)
    bmiValue.innerText = bmi
    resultBox.style.display = "block"
})