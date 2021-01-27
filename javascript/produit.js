const productImage = document.getElementById("imgProduct");
const productTitle = document.getElementById("titleProduct");
const productDescription = document.getElementById("descriptionProduct");
const productPrice = document.getElementById("priceProduct");

const dropDownList = document.getElementById("dropDownList");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const apiUrlId = `http://localhost:3000/api/teddies/${id}`;


// *****************    Afficher la page produit en fonction de l'ourson choisi    *****************

function displayProduct(data) {
    
            productImage.src = data.imageUrl;
            productTitle.innerHTML = data.name;
            productDescription.innerHTML = data.description;
            productPrice.innerHTML = data.price / 100 + " €";
            for(let i = 0; i < data.colors.length; i++){
                let colors = document.createElement("option");
                dropDownList.appendChild(colors);
                colors.innerHTML = data.colors[i];
            }
  
}

fetch(apiUrlId)
    .then(response => response.json())
    .then(data => {
                displayProduct(data); 
            })
    .catch((error) => alert("Erreur : " + error))

   
// *****************    Ajouter l'élément au panier    *****************

const buttonBasket = document.getElementById("addBasket");

buttonBasket.addEventListener("click", function (){
    const colors = document.getElementsByTagName("select");
    const chosenColor = colors[0].value;

    addBasket(chosenColor);
});

function addBasket(chosenColor) {
   let basketContent = JSON.parse(localStorage.getItem("basketContent"));
    if (basketContent === null) {
       basketContent = [];
    }
    // Ajouter le produit au local storage
    let teddy = {
        id: id,
        image : productImage.src,
        name: productTitle.innerHTML,
        price: productPrice.innerHTML,
        color: chosenColor
    };
    basketContent.push(teddy);
    localStorage.setItem("basketContent", JSON.stringify(basketContent));
    alert("Produit ajouté au panier !")
}

    
  
    