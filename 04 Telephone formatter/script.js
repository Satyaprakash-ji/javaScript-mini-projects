const phone = document.querySelector("#phone");

phone.addEventListener("input", () => {
    let inputValue = phone.value

    if(/\d+$/g.test(inputValue)){
        phone.value = inputValue
    } else {
        phone.value = inputValue.slice(0, inputValue.length-1)
    }

    if(inputValue.length === 4){
        phone.value = "+(" + inputValue.slice(0,3) + ") - " + inputValue.slice(3,inputValue.length);
    }else if(inputValue.length === 9){
        phone.value = inputValue.slice(2,5)
    }
})



