const histories = [];

const availableBalanceId =
  document.getElementById("available_balance").textContent;

const availableBalance = parseInt(availableBalanceId);

const noakhaliForm = document.getElementById("noakhali_donate_form");
const feniForm = document.getElementById("feni_donate_form");
const quotaForm = document.getElementById("quota_donate_form");

noakhaliForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const noakhaliValue = document.getElementById("noakhali_input").value;

  if (availableBalance < 1 || availableBalance === 0) {
    alert("Insufficient balance");
    return;
  }

  if (noakhaliValue < 1) {
    alert("Can't donate less than one taka");
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

  histories.push({
    amount: inputValue,
    donatedFor: "Noakhali",
    timestamp: new Date(),
  });

  const historyData = histories
    .map(
      history => `
     <div class="border p-6 rounded-lg space-y-2">
          <h6 class="font-bold text-xl">${history.amount} Taka is Donated for ${history.donatedFor}, Bangladesh</h6>
          <p class="text-sm">Date: ${history.timestamp}</p>
        </div>
  `
    )
    .join("");

  const historyContainer = document.getElementById("histories");

  historyContainer.innerHTML = historyData;

  noakhaliForm.reset();

  const modal = document.getElementById("my_modal_2");

  modal.showModal();
});

feniForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const feniValue = document.getElementById("feni_input").value;

  if (availableBalance < 1 || availableBalance === 0) {
    alert("Insufficient balance");
    return;
  }

  if (feniValue < 1) {
    alert("Can't donate less than one taka");
    return;
  }

  const totalFeniAmount = document.getElementById("total_feni_amount");

  const currentTotal = parseInt(totalFeniAmount.textContent);

  const inputValue = parseInt(feniValue);

  const total = currentTotal + inputValue;

  totalFeniAmount.textContent = total;

  const newAvaliableBalance = availableBalance - total;

  document.getElementById("available_balance").textContent =
    newAvaliableBalance;

  histories.push({
    amount: inputValue,
    donatedFor: "Feni",
    timestamp: new Date(),
  });

  const historyData = histories
    .map(
      history => `
          <div class="border p-6 rounded-lg space-y-2">
              <h6 class="font-bold text-xl">${history.amount} Taka is Donated for ${history.donatedFor}, Bangladesh</h6>
              <p class="text-sm">Date: ${history.timestamp}</p>
          </div>
        `
    )
    .join("");

  const historyContainer = document.getElementById("histories");

  historyContainer.innerHTML = historyData;

  feniForm.reset();

  const modal = document.getElementById("my_modal_2");

  modal.showModal();
});

quotaForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const quotaValue = document.getElementById("quota_input").value;

  if (availableBalance < 1 || availableBalance === 0) {
    alert("Insufficient balance");
    return;
  }

  if (quotaValue < 1) {
    alert("Can't donate less than one taka");
    return;
  }

  const totalQuotaAmount = document.getElementById("total_quota_amount");

  const currentTotal = parseInt(totalQuotaAmount.textContent);

  const inputValue = parseInt(quotaValue);

  const total = currentTotal + inputValue;

  totalQuotaAmount.textContent = total;

  const newAvaliableBalance = availableBalance - total;

  document.getElementById("available_balance").textContent =
    newAvaliableBalance;

  histories.push({
    amount: inputValue,
    donatedFor: "Quota Movement",
    timestamp: new Date(),
  });

  const historyData = histories
    .map(
      history => `
          <div class="border p-6 rounded-lg space-y-2">
              <h6 class="font-bold text-xl">${history.amount} Taka is Donated for ${history.donatedFor}, Bangladesh</h6>
              <p class="text-sm">Date: ${history.timestamp}</p>
          </div>
        `
    )
    .join("");

  const historyContainer = document.getElementById("histories");

  historyContainer.innerHTML = historyData;

  quotaForm.reset();

  const modal = document.getElementById("my_modal_2");

  modal.showModal();
});
