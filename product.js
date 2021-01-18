const productImage = document.getElementById("imgProduct");
const productTitle = document.getElementById("titleProduct");
const productDescription = document.getElementById("descriptionProduct");
const productPrice = document.getElementById("priceProduct");

const dropDownList = document.getElementById("dropDownList");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const apiUrlId = `http://localhost:3000/api/teddies?id=${id}`;

// Afficher la page produit en fonction de l'ourson choisi
function displayProduct(data) {
    
    switch (id) {
        case data[0]._id : 
            productImage.src = data[0].imageUrl;
            productTitle.innerHTML = data[0].name;
            productDescription.innerHTML = data[0].description;
            productPrice.innerHTML = data[0].price / 100 + " €";
            for(let i = 0; i < data[0].colors.length; i++){
                let colors = document.createElement("option");
                dropDownList.appendChild(colors);
                colors.innerHTML = data[0].colors[i];
            }
            break;
        case data[1]._id : 
            productImage.src = data[1].imageUrl;
            productTitle.innerHTML = data[1].name;
            productDescription.innerHTML = data[1].description;
            productPrice.innerHTML = data[1].price / 100 + " €";
            for(let i = 0; i < data[1].colors.length; i++){
                let colors = document.createElement("option");
                dropDownList.appendChild(colors);
                colors.innerHTML = data[1].colors[i];
            }
            break;
        case data[2]._id : 
            productImage.src = data[2].imageUrl;
            productTitle.innerHTML = data[2].name;
            productDescription.innerHTML = data[2].description;
            productPrice.innerHTML = data[2].price / 100 + " €";
            for(let i = 0; i < data[2].colors.length; i++){
                let colors = document.createElement("option");
                dropDownList.appendChild(colors);
                colors.innerHTML = data[2].colors[i];
            }
            break;
        case data[3]._id : 
            productImage.src = data[3].imageUrl;
            productTitle.innerHTML = data[3].name;
            productDescription.innerHTML = data[3].description;
            productPrice.innerHTML = data[3].price / 100 + " €";
            for(let i = 0; i < data[3].colors.length; i++){
                let colors = document.createElement("option");
                dropDownList.appendChild(colors);
                colors.innerHTML = data[3].colors[i];
            }
            break;
        case data[4]._id : 
            productImage.src = data[4].imageUrl;
            productTitle.innerHTML = data[4].name;
            productDescription.innerHTML = data[4].description;
            productPrice.innerHTML = data[4].price / 100 + " €";
            for(let i = 0; i < data[4].colors.length; i++){
                let colors = document.createElement("option");
                dropDownList.appendChild(colors);
                colors.innerHTML = data[4].colors[i];
            }
            break;
    }
  
}


fetch(apiUrlId)
    .then(response => {
        if(response.ok){
            response.json().then(data => {
                displayProduct(data); 
            })
        } else {
            console.log("erreur");
            }
        
    });

   
   
    // Ajouter l'élément au panier



class Teddies {
    constructor(id, chosenColor) {
        this.id = id;
        this.colors = chosenColor;  
    }
}


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
    let teddy = new Teddies(id, chosenColor);
    basketContent.push(teddy);
    localStorage.setItem("basketContent", JSON.stringify(basketContent));
    console.log(basketContent);
}

    
  
    