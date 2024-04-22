const workoutForm = document.querySelector("#workout-form");
const workoutInput = document.querySelector("#workout");
const durationInput = document.querySelector("#duration");
const workoutList = document.querySelector("#workouts")
const deleteBtn = document.querySelectorAll(".delete-button")

workoutForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const list = document.createElement("li")
    
    const span = document.createElement("span")
    span.innerText = `${workoutInput.value} - ${durationInput.value} minutes`
    
    const DeleteBtn = document.createElement("button")
    DeleteBtn.setAttribute("class", "delete-button")
    DeleteBtn.innerHTML = "Delete"

    list.append(span);
    list.append(DeleteBtn);
    workoutList.append(list);

    workoutInput.value = ""
    durationInput.value = ""
})

workoutList.addEventListener("click", (e) => {
    if(e.target.className === "delete-button"){
        e.target.parentElement.remove();
    }
})