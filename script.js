const apiUrl = "http://localhost:3000/api/teddies";

let row = document.getElementById("teddies");


// *****************    Compléter chaque cartes de la liste des ours en peluche    *****************
function completeProductList(data) {

    for(let i = 0; i < data.length; i++) {
        

        let col = document.createElement("div");
        col.classList.add("col-12", "col-md-3", "carte");
        row.appendChild(col);

        let linkCard = document.createElement("a");
        linkCard.href = "produit.html?id=" + data[i]._id;
        col.appendChild(linkCard);

        let card = document.createElement("div");
        card.classList.add("card", "mb-2");
        linkCard.appendChild(card);

        let bearImg = document.createElement("img");
        bearImg.src = data[i].imageUrl;
        bearImg.classList.add("card-img");
        card.appendChild(bearImg);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);

        let bearName = document.createElement("h3");
        bearName.innerText = data[i].name;
        cardBody.appendChild(bearName);

        let bearPrice = document.createElement("p");
        bearPrice.innerText = data[i].price / 100 + " €";
        cardBody.appendChild(bearPrice);
    
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


