const userInput = document.querySelector("#userInput");

const lowerCaseValue = document.querySelector("#lowercase");
const upperCaseValue = document.querySelector("#uppercase");
const camelCaseValue = document.querySelector("#camelcase");
const pascalCaseValue = document.querySelector("#pascalcase");
const snakeCaseValue = document.querySelector("#snakecase");
const kebabCaseValue = document.querySelector("#kebabcase");
const trimValue = document.querySelector("#trim");


function updateValue(){
    lowerCaseValue.innerText = userInput.value.trim().toLowerCase();
    upperCaseValue.innerText = userInput.value.trim().toUpperCase();
    camelCaseValue.innerText = camelCase(userInput.value.trim());
    pascalCaseValue.innerText = pascalCase(userInput.value.trim());
    snakeCaseValue.innerText = snakeCase(userInput.value.trim());
    kebabCaseValue.innerText = kebabCase(userInput.value.trim());
    trimValue.innerText = trim(userInput.value.trim());
}
updateValue()

userInput.addEventListener("input", updateValue)

function camelCase(string){
    lowerCaseString = string.toLowerCase();
    const finalArr = lowerCaseString.split(" ").map((word, i) => {
        if(i === 0){
            return word
        }else if(!word){
            return word
        }else{
            return word[0].toUpperCase() + word.slice(1)
        }
    })
    return finalArr.join("")
}

function pascalCase(string){
    lowerCaseString = string.toLowerCase()
    const finalArr = lowerCaseString.split(" ").map((word, i) => {
        if(!word){
            return word
        }else{
            return word[0].toUpperCase() + word.slice(1)
        }
    })
    return finalArr.join("")
}

function snakeCase(string){
    return string.replaceAll(" ", "_")
}

function kebabCase(string){
    return string.replaceAll(" ", "-")
}

function trim(string){
    return string.replaceAll(" ", "")
}
