const descriptionInput = document.querySelector("#description");
const amountInput = document.querySelector("#amount");
const transactionType = document.querySelector("#transaction-type");
const transactionBtn = document.querySelector("#add-button");
const transactionList = document.querySelector("#transaction-list");
const balanceAmount = document.querySelector("#balance-amount");

let yourBalance = 0;

transactionBtn.addEventListener("click", () => {
  if (transactionType.value === "income") {
    if (descriptionInput.value.trim() && amountInput.value) {
      const list = document.createElement("li");
      list.setAttribute("class", "income");

      const span1 = document.createElement("span");
      span1.innerText = descriptionInput.value;

      const span2 = document.createElement("span");
      span2.innerText = `$${parseFloat(amountInput.value).toFixed(2)}`;

      list.append(span1);
      list.append(span2);

      transactionList.append(list);

      yourBalance += +amountInput.value;
      balanceAmount.innerText = `$${parseFloat(yourBalance).toFixed(2)}`;

      descriptionInput.value = "";
      amountInput.value = "";
    } else {
      alert("Please enter a valid description and amount");
    }
  } else if (transactionType.value === "expense") {
    if (descriptionInput.value.trim() && amountInput.value) {
      const list = document.createElement("li");
      list.setAttribute("class", "expense");

      const span1 = document.createElement("span");
      span1.innerText = descriptionInput.value;

      const span2 = document.createElement("span");
      span2.innerText = `$${parseFloat(amountInput.value).toFixed(2)}`;

      list.append(span1);
      list.append(span2);

      transactionList.append(list);

      yourBalance -= +amountInput.value;
      balanceAmount.innerText = `$${parseFloat(yourBalance).toFixed(2)}`;

      descriptionInput.value = "";
      amountInput.value = "";
    } else {
      alert("Please enter a valid description and amount");
    }
  }
});
