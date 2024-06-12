//set variable for the result and the button reset
let amount = document.querySelector(".amount h1"),
  total = document.querySelector(".total h1"),
  reset = document.querySelector(".outputs button");

//function to calculate the tip by click on the button
function calc(selectedTip) {
  //set the main variable for the function
  let bill = document.getElementById("bill").value, //user bill
    numberPeople = document.getElementById("num").value; //user number of people
  if (!bill || bill == 0) {
    //to show error if the user put unvalid input in bill
    document.querySelector(".billerr").classList.add("error");
    document.getElementById("bill").classList.add("error");
  } else if (bill < 0) {
    document.querySelector(".billerr").classList.add("error");
    document.getElementById("bill").classList.add("error");
    document.querySelector(".billerr").textContent = "Can't be a negative";
  } else {
    document.querySelector(".billerr").classList.remove("error");
    document.getElementById("bill").classList.remove("error");
  }
  if (!numberPeople || numberPeople == 0) {
    //to show error if the user put unvalid input in number
    document.querySelector(".numerr").classList.add("error");
    document.getElementById("num").classList.add("error");
  } else if (numberPeople < 0) {
    document.querySelector(".numerr").classList.add("error");
    document.getElementById("num").classList.add("error");
    document.querySelector(".numerr").textContent = "Can't be a negative";
  } else {
    document.querySelector(".numerr").classList.remove("error");
    document.getElementById("num").classList.remove("error");
  }
  if (
    //to don't calc if any error
    !bill ||
    !numberPeople ||
    numberPeople == 0 ||
    bill == 0 ||
    numberPeople < 0 ||
    bill < 0
  ) {
    amount.textContent = "$0.00";
    total.textContent = "$0.00";
    reset.classList.remove("disapled");
    return;
  } else {
    reset.classList.remove("disapled");
    let tipAmount = (bill * selectedTip) / numberPeople,
      totalAmount = ((bill * selectedTip) + +bill) / numberPeople;
    amount.textContent = `$${parseFloat(tipAmount).toFixed(2)}`;
    total.textContent = `$${parseFloat(totalAmount).toFixed(2)}`;
  }
}
// to get the tip value from button
document.querySelectorAll(".tip-btn").forEach((button) => {
  button.addEventListener("click", function () {
    let selectedTip = parseFloat(this.getAttribute("data-tip")).toFixed(2);
    calc(selectedTip);
  });
});
// to get the tip value from input custom
document.getElementById("custom").addEventListener("keyup", function () {
  let custom = document.getElementById("custom").value,
    selectedTip = custom / 100;
  calc(selectedTip);
});
//enable reset button on keyup method
function enableReset() {
  reset.classList.remove("disapled");
}
document.getElementById("bill").addEventListener("keyup", enableReset);
document.getElementById("num").addEventListener("keyup", enableReset);
//reload the page on reset button click
function reload() {
  if (!reset.classList.contains("disapled")) {
    location.reload();
  }
}