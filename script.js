// PAGE D'ACCUEIL
const apiUrl = "http://localhost:3000/api/teddies";

let row = document.getElementById("teddies");



// Compléter chaque cartes de la liste des ours en peluche
function completeProductList(data) {

    for(let i = 0; i < data.length; i++) {
        

        let col = document.createElement("div");
        col.classList.add("col-12", "col-md-3", "carte");
        row.appendChild(col);

        let linkCard = document.createElement("a");
        linkCard.href = "produit.html?id=" + data[i]._id;
        col.appendChild(linkCard);

        // let card = document.createElement("div");
        // card.classList.add("card");
        // linkCard.appendChild("card");

        let bearImg = document.createElement("img");
        bearImg.src = data[i].imageUrl;
        bearImg.classList.add("card-img");
        linkCard.appendChild(bearImg);

        let bearName = document.createElement("h3");
        bearName.innerText = data[i].name;
        linkCard.appendChild(bearName);

        let bearPrice = document.createElement("p");
        bearPrice.innerText = data[i].price / 100 + " €";
        linkCard.appendChild(bearPrice);
    
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


{/* <div class="col-12 col-md-3">
    <a href="produit.html" id="link2" class="liens">
        <div class="card">
            <img src="" alt="" class="card-img">
            <div class="card-body">
                <h3 class="card-title text-center"></h3>
                <p class="card-text text-center"></p>
            </div>
        </div>
    </a>
</div> */}