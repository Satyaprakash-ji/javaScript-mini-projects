const modeChange = document.querySelector("#modeChange");
const innerModeChange = document.querySelector("#innerModeChange")
const body = document.querySelector("body");
const innerContainer = document.querySelector(".inner-container")


modeChange.addEventListener("click", () => {
    if(modeChange.checked){
        body.classList.add("dark")
    }else{
        body.classList.remove("dark")
    }

    innerModeChange.checked = modeChange.checked

    changeInnerContainerMode()
    
})

function changeInnerContainerMode(){
    if(innerModeChange.checked){
        innerContainer.classList.add("dark")
    }else{
        innerContainer.classList.remove("dark")
    }
}

innerModeChange.addEventListener("click", () => changeInnerContainerMode())