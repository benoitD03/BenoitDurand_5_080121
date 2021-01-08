const apiUrl = "http://localhost:3000/api/teddies";
let bearImg = document.getElementsByClassName("card-img");
let bearName = document.getElementsByClassName("card-title");
let bearPrice = document.getElementsByClassName("card-text");

// Compléter chaque cartes de la liste des ours en peluche
function completeProductList(data) {
    for(let i = 0; i < data.length; i++) {
        bearImg[i].src = data[i].imageUrl;
        bearName[i].innerHTML = data[i].name;
        bearPrice[i].innerHTML = data[i].price + " €";
    }
}

fetch(apiUrl)
    .then(response => {
        if(response.ok){
            response.json().then(data => {
                completeProductList(data);
            })
        } else {
            for(let i in bearName) {
                bearName[i].textContent = "Erreur";
            }
        }
    });
