const basketData = JSON.parse(localStorage.getItem("basketData"));

const basketPrice = JSON.parse(localStorage.getItem("basketSum"));

const confirmationOrderId = document.getElementById("confirmationOrderId");
const confirmationPrice = document.getElementById("confirmationPrice");

// *****************    Affichage de l'orderId et du prix total de la commande    *****************
confirmationOrderId.innerHTML = basketData.orderId;
confirmationPrice.innerHTML = basketPrice + "€";
// *****************    Supprimer le panier    *****************
localStorage.removeItem("basketContent");
