// login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
  document.getElementById("login-page").style.display = "none";
  document.getElementById("transaction-page").style.display = "block";
});

//deposit button event handler
var depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function() {
  var getDepositNumber = updateInputText("depositAmount");

  updateBalance("currentDeposit", getDepositNumber);
  updateBalance("balance", getDepositNumber);

  updateInputForm("depositAmount");
});

// withdraw button event handler
const withdraw = document.getElementById("withdraw");
withdraw.addEventListener("click", function() {
  var getWithdrawNumber = updateInputText("withdrawAmount");

  updateBalance("currentWithdraw", getWithdrawNumber);
  updateBalance("balance", -1 * getWithdrawNumber);

  updateInputForm("withdrawAmount");
});
function updateBalance(id, getDepositNumber) {
  const currentDeposit = document.getElementById(id).innerText;
  const currentNumber = parseFloat(currentDeposit);
  const total = currentNumber + getDepositNumber;
  document.getElementById(id).innerText = total;
}
function updateInputText(id) {
  var depositAmount = document.getElementById(id).value;
  var depositNumber = parseFloat(depositAmount);
  return depositNumber;
}
function updateInputForm(id) {
  document.getElementById(id).value = "";
}
