const history = [];

const availableBalanceId =
  document.getElementById("available_balance").textContent;

const availableBalance = parseInt(availableBalanceId);

const noakhaliForm = document.getElementById("noakhali_donate_form");

noakhaliForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const noakhaliValue = document.getElementById("noakhali_input").value;
  if (noakhaliValue < 1) {
    alert("Can't donate less than one taka");
    return;
  }

  if (availableBalance < 1) {
    alert("Insufficient balance");
    return;
  }

  const totalNoakhaliAmount = document.getElementById("total_noakhali_amount");

  const currentTotal = parseInt(totalNoakhaliAmount.textContent);

  const inputValue = parseInt(noakhaliValue);

  const total = currentTotal + inputValue;

  totalNoakhaliAmount.textContent = total;

  const newAvaliableBalance = availableBalance - total;

  document.getElementById("available_balance").textContent =
    newAvaliableBalance;

  history.push({
    amount: inputValue,
    donatedFor: "Noakhali",
    timestamp: new Date(),
  });

  alert("Thanks for the donation");
});

console.log(history);
