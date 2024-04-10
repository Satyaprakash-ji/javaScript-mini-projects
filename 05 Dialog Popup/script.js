const showDialog = document.querySelector(".showDialog");
const closeDialog = document.querySelector(".closeDialog")
const popupOverlay = document.querySelector(".overlay");

showDialog.addEventListener("click", () => popupOverlay.classList.add("open"))

closeDialog.addEventListener("click", () => popupOverlay.classList.remove("open"))