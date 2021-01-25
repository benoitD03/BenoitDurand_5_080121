const basketData = JSON.parse(localStorage.getItem("basketData"));

const basketPrice = JSON.parse(localStorage.getItem("basketSum"));

const confirmationOrderId = document.getElementById("confirmationOrderId");
const confirmationPrice = document.getElementById("confirmationPrice");

confirmationOrderId.innerHTML = basketData.orderId;
confirmationPrice.innerHTML = basketPrice + "€";
