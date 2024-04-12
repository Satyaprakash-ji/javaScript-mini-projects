const textList = document.querySelector(".text-list");

const words = ["Student", "Developer", "Programmer"]

let wordsIndex = 0;
let wordCharIndex = 0;
let reversType = false

setInterval(() => {
    if(!reversType){
        textList.innerText += words[wordsIndex][wordCharIndex]
        wordCharIndex++
    }else{  
        textList.innerText = textList.innerText.slice(0, textList.innerText.length-1)
    }

    if(wordCharIndex === words[wordsIndex].length){
        reversType = true
    }

    if(textList.innerText.length === 0 && reversType){
        reversType = false
        wordCharIndex = 0;
        wordsIndex++
    }

    if(wordsIndex === words.length){
        wordsIndex = 0
    }

},200)