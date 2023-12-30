const btn = document.querySelector(".btn"),
  tip = document.querySelector(".tip");
  total = document.querySelector(".total"),
  error = document.querySelector(".error");

const hideError = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 3000);
}
  const calculateTip = () => {
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;

    if (bill === "" || rate == ""){
      // console.log('please add a number');
      error.style.display = "block";
      hideError();
    } else if(isNaN(bill)){
      error.innerHTML = "Not a number" ;
      error.style.display = "block";
      hideError();
    } else {
      let totalTip = bill * rate;
      totalTip = Math.ceil(totalTip);
      tip.innerHTML = `Tip: $ ${totalTip}`;

      let totalBill = Number(bill) + totalTip;
      total.innerHTML = `Total Bill: $ ${totalBill}`
    }

  }

  btn.addEventListener("click", calculateTip);