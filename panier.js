// *****************    Afficher le contenu du panier    *****************

const basket = JSON.parse(localStorage.getItem("basketContent"));
const basketList = document.getElementById("basketList");

for(let i = 0; i < basket.length; i++){

    let list = document.createElement("li");
    basketList.appendChild(list);

    let currentImage = document.createElement("img");
    currentImage.src = basket[i].image;
    list.appendChild(currentImage);

    let currentName = document.createElement("p");
    currentName.innerHTML = basket[i].name;
    list.appendChild(currentName);

    let currentColor = document.createElement("p");
    currentColor.innerHTML = "Couleur : " + basket[i].color;
    list.appendChild(currentColor);

    let currentPrice = document.createElement("p");
    currentPrice.innerHTML = basket[i].price;
    list.appendChild(currentPrice);

    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerHTML = "Supprimer";
    deleteButton.classList.add("btn", "btn-primary", "mr-4", "deleteButton");
    list.appendChild(deleteButton);

}

// *****************    Calcul du prix total du panier    *****************

    let basketSum = 0;
    const totalPrice = document.getElementById("total");
    for (let i = 0; i < basket.length; i++) {
        
        basketSum = basketSum + parseInt(basket[i].price);
        totalPrice.innerHTML = basketSum + "€";  
    }



    
// *****************    Vérifier les champs du formulaire    *****************

const form = document.getElementById("form");
const formValid = document.getElementById("validationButton");

const firstName = document.getElementById("prenom");
const lastName = document.getElementById("nom");
const email = document.getElementById("email");
const address = document.getElementById("adresse");
const city = document.getElementById("ville");

const missingLastName = document.getElementById("missingLastName");
const missingFistName = document.getElementById("missingFirstName");
const missingEmail = document.getElementById("missingEmail");
const missingAddress = document.getElementById("missingAddress");
const missingCity = document.getElementById("missingCity");

const inputValid = /^[a-z A-Z éèêëàâäîïùûüôö-]*$/;
const emailValid = /@/;


function validation (e) {
        // Vérifier le nom
        if (lastName.value == ""){
            e.preventDefault();
            missingLastName.innerHTML = "Champ manquant";
            missingLastName.style.color = "red";
        } else if (inputValid.test(lastName.value) == false) {
            missingLastName.innerHTML = "Veuillez renseigner un vrai nom svp.";
            missingLastName.style.color = "red";
        } else {
            missingLastName.innerText = "";
        }
        //Vérifier le prénom
        if (firstName.value == ""){
            e.preventDefault();
            missingFistName.innerHTML = "Champ manquant";
            missingFistName.style.color = "red";
        } else if (inputValid.test(firstName.value) == false) {
            missingFistName.innerHTML = "Veuillez renseigner un vrai prénom svp.";
            missingFistName.style.color = "red";
        } else {
            missingFistName.innerText = "";
        }
        //Vérifier l'adresse email
        if (email.value == ""){
            e.preventDefault();
            missingEmail.innerHTML = "Champ manquant";
            missingEmail.style.color = "red";
        } else if (emailValid.test(email.value) == false) {
            e.preventDefault();
            missingEmail.innerHTML = "Veuillez renseigner une adresse email valide svp.";
            missingEmail.style.color = "red";
        } else {
            missingEmail.innerText = "";
        }
        //Vérifier l'adresse
        if (address.value == ""){
            e.preventDefault();
            missingAddress.innerHTML = "Champ manquant";
            missingAddress.style.color = "red";
        } else {
            missingAddress.innerText = "";
        }
        //Vérifier la ville
        if (city.value == ""){
            e.preventDefault();
            missingCity.innerHTML = "Champ manquant";
            missingCity.style.color = "red";
        } else if (inputValid.test(city.value) == false) {
            missingCity.innerHTML = "Veuillez renseigner une vrai ville svp.";
            missingCity.style.color = "red";
        } else {
            missingCity.innerText = "";
        }
}

formValid.addEventListener("click", validation);


// *****************    fonctionnement du bouton supprimer   *****************

const deleteButton = document.querySelectorAll(".deleteButton");
const liste = document.getElementsByTagName("li");

 
    for (let i = 0; i < basket.length; i++) {
        let currentButton = deleteButton[i];
        let currentListe = liste[i];
 
        currentButton.addEventListener("click", () => {
            basketList.removeChild(currentListe);
            window.localStorage.removeItem(basket[i]);
            basketSum = basketSum - basket[i].price;  
        });
    }


// *****************    Créations des éléments à envoyer lors de la validation du formulaire   *****************
const orderedButton = document.getElementById("validationButton");

function itemsToSend(e) {
    e.preventDefault();
    let products = basket.map(basket => basket.id);
    let contact = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        address: address.value,
        city: city.value
    }
    console.log(contact);
    console.log(products);
}

orderedButton.addEventListener("click", itemsToSend);

