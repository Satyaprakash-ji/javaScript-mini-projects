const pinInput = document.querySelector("#pin");
const buttons = document.querySelectorAll("button")
const output = document.querySelector("#output")

const atmPIN = 1234;
let currentBalance = 1000;
let isLogin = false;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        
        if(e.target.innerText === "Submit"){
            
            if(atmPIN == pinInput.value){
                output.innerText = "Login successful."
                isLogin = true
            }else{
                output.innerText = "Invalid PIN. Please try again."
            }
        
        }else if(e.target.innerText === "Check Balance"){
            if(isLogin){
                output.innerText = `Your balance is $${currentBalance}`
            }else{
                output.innerText = "Please login first."
            }
        }else if(e.target.innerText === "Deposit"){
            if(isLogin){
                const depositMoney = prompt("Enter the amount to deposit:")
                if(depositMoney){
                    currentBalance += +depositMoney
                    output.innerText = `Deposited $${depositMoney}. Your new balance is $${currentBalance}`
                }else{
                    output.innerText = `Invalid amount. Please try again.`
                }

            }else{
                output.innerText = "Please login first."
            }
        }else if(e.target.innerText === "Withdraw"){
            if(isLogin){
                const withdrawMoney = prompt("Enter the amount to withdraw:")
                if(currentBalance - withdrawMoney < 0){
                    output.innerText = `Invalid amount or insufficient balance. Please try again.`
                }
                else if(withdrawMoney){
                    currentBalance -= +withdrawMoney
                    output.innerText = `Withdrawn $${withdrawMoney}. Your new balance is $${currentBalance}`
                }
            }else{
                output.innerText = "Please login first."
            }
        }else if(e.target.innerText === "Logout"){
            if(isLogin){
                isLogin = false
                output.innerText = "Logged out successfully."
            }
        }
    })
})