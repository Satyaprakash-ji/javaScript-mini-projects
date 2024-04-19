const display = document.querySelector(".display");
const input = document.querySelectorAll("input");

input[0].focus();

input.forEach((inputs, index) => {
  console.log(inputs);
  inputs.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      input[index].value = "";
      if (index === 5) {
        input[index].focus();
      } else {
        setTimeout(() => input[index + 1].focus(), 10);
      }
    } else if (e.key === "Backspace") {
      if (index === 0) {
        input[index].focus();
      } else {
        setTimeout(() => input[index - 1].focus(), 10);
      }
    }
  });
});
