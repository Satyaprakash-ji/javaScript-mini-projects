const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const listContainer = document.querySelector(".list-container")
const deleteList = document.querySelector(".delete")


todoForm.addEventListener("submit", (e) => {
    console.log(todoInput.value);
    e.preventDefault()

    const list = document.createElement("li")

    const span = document.createElement("span")
    span.setAttribute("class", "text");
    span.innerText = todoInput.value

    const editButton = document.createElement("button")
    editButton.setAttribute("class", "edit")
    editButton.innerText = "✏️"

    const deleteButton = document.createElement("button")
    deleteButton.setAttribute("class", "delete")
    deleteButton.innerText = "🗑️"

    list.append(span)
    list.append(editButton)
    list.append(deleteButton)

    listContainer.append(list)

    todoInput.value = ""

})


listContainer.addEventListener("click", (e) => {

    if(e.target.className == "edit"){

        let parent = e.target.parentElement
        let newInput = document.createElement("input")
        newInput.value = parent.firstElementChild.innerText
        let replace = parent.firstElementChild
        parent.replaceChild(newInput, replace)

        e.target.classList.remove("edit")
        e.target.classList.add("save")
        e.target.innerText = "💾"
        
    }else if(e.target.className == "save"){
        let parent = e.target.parentElement
        let text = document.createElement("span")
        text.innerText = parent.firstElementChild.value
        let replace = parent.firstElementChild
        parent.replaceChild(text, replace)

        e.target.classList.remove("save")
        e.target.classList.add("edit")
        e.target.innerText = "✏️"
        
    }

    if(e.target.className == "delete"){

        console.log(e.target);
        e.target.parentElement.remove()
    }
})