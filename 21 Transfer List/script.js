const btnControls = document.querySelector(".controls");
const leftSection = document.querySelector(".left-section");
const rightSection = document.querySelector(".right-section");


btnControls.addEventListener("click", (e) => {
    if(e.target.className === "move-all-right"){

        Array.from(leftSection.children).forEach((item) => {
            item.remove()
            rightSection.appendChild(item)
        })

    }else if(e.target.className === "move-all-left"){

        Array.from(rightSection.children).forEach((item) => {
            item.remove()
            leftSection.appendChild(item)
        })

    }else if(e.target.className === "move-left"){

        Array.from(rightSection.children).forEach((item) => {
            if(item.firstChild.nextSibling.checked){
                item.remove()
                leftSection.appendChild(item)
                item.firstChild.nextSibling.checked = false
            }
        })

    }else if(e.target.className === "move-right"){

        Array.from(leftSection.children).forEach((item) => {
            if(item.firstChild.nextSibling.checked){
                item.remove()
                rightSection.appendChild(item)
                item.firstChild.nextSibling.checked = false
            }
        })

    }
})

