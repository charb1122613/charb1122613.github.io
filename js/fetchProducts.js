const row = document.querySelector("#products-section .row");
const cartContainer = document.querySelector("#cart-items");
const totalContainer = document.querySelector("#total");
const cartCount = document.querySelector("#cart-count");
const clearButton = document.querySelector("#cart-clear");


let cartStorage = JSON.parse(localStorage.getItem("cartStorage")) || [];


fetch("json/ProductsList.json")
    .then(response => response.json()) // Convertit la réponse en JSON
    .then(products => {
        products.forEach(p => {
            const productCard = document.createElement("div");
            productCard.classList.add("col");

            productCard.innerHTML =
                `<div class="card">
                    <img src=${p.img} class="card-img-top" alt=${p.name}>
                    <div class="card-body">
                        <h5 class="card-title">${p.name}</h5>
                        <p class="card-text">${p.description}</p>
                        <h4 class="card-text text-end">${p.price}$</h4>
                        <div class="row">
                            <div class="col-auto">
                                <button
                                    data-id="${p.id}"
                                    data-name="${p.name}"
                                    data-description="${p.description}"
                                    data-price="${p.price}"
                                    data-img="${p.img}"
                                    data-details="${p.details}"
                                    data-full="${p.full}"
                                    class="btn btn-primary show-details">
                                        Détails
                                </button>
                            </div>
                            <div class="col-auto ms-auto">
                                <button
                                    data-id="${p.id}"
                                    data-name="${p.name}"
                                    data-description="${p.description}"
                                    data-price="${p.price}"
                                    data-img="${p.img}"
                                    data-details="${p.details}"
                                    data-full="${p.full}"
                                    class="btn btn-primary add-to-cart">
                                        Ajouter au panier
                                </button>
                            </div>
                        </div>
                    </div>`

            row.appendChild(productCard);
        });

        document.querySelectorAll(".show-details").forEach(button => {
            button.addEventListener("click", (e) => {
                const id = e.target.getAttribute("data-id");
                const name = e.target.getAttribute("data-name");
                const price = e.target.getAttribute("data-price");
                const details = e.target.getAttribute("data-details");
                const full = e.target.getAttribute("data-full");

                showDetails(id, name, price, details, full);
            });
        });
        
        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", (e) => {
                const id = e.target.getAttribute("data-id");
                const name = e.target.getAttribute("data-name");
                const price = e.target.getAttribute("data-price");
        
                addToCart(id, name, price);
            });
        });

        updateCart();
    })
        
    .catch(error => console.error("Erreur :", error)); // Gère les erreurs

function showDetails(id, name, price, details, full)
{
    let modalTitle = document.querySelector("#product-details .modal-title");
    modalTitle.textContent = name;

    let modalBody = document.querySelector("#product-details .modal-body");
    modalBody.innerHTML =
        `<div class="row">
            <div class="col-12 col-lg-6">
                <img src="${full}" class="img-fluid mb-3" alt="${name}">
            </div>
            <div class="col-12 col-lg-6 d-flex flex-column justify-content-between">
                <div class="m-3">
                    ${details}
                </div>
                <p class="text-end me-3 fs-4">Prix : ${price}$</p>
            </div>
        </div>`;

    let modalFooter = document.querySelector("#product-details .modal-footer");

    modalFooter.innerHTML =
        `<button type="button" class="btn btn-primary add-to-cart">Ajouter au panier</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>`

    document.querySelectorAll("#product-details .add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            addToCart(id, name, price);
        });
    });
    
    let myModal = new bootstrap.Modal(document.querySelector("#product-details"));
    myModal.show();
}

function addToCart(id, name, price)
{
    const existingItem = cartStorage.find(item => item.id === id);

    if (existingItem)
    {
        existingItem.quantity++;
    }
    else
    {
        cartStorage.push({id, name, price, quantity : 1});
    }

    updateCart();
    saveCart();
}

function updateCart()
{
    cartContainer.innerHTML = "";
    let total = 0;
    let itemCount = 0;

    cartStorage.forEach(item => {
        total += item.price * item.quantity;
        itemCount += item.quantity;

        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        listItem.innerHTML = `${item.name} x ${item.quantity} = ${(item.price * item.quantity).toFixed(2)}
            <button class="btn btn-primary remove-item" data-id="${item.id}"><i class="bi bi-x"></i></button>`;

        cartContainer.appendChild(listItem);
    })

    cartCount.textContent = itemCount;
    totalContainer.textContent = total.toFixed(2);

    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", (e) => {
            e.target.closest("button").getAttribute("data-id");

            removeFromCart(id);
        })
    })

    displayClearCartButton();
}

function removeFromCart(id)
{
    const index = cartStorage.findIndex(item => item.id === id);

    if (index !== -1)
    {
        if (cartStorage[index].quantity > 1)
        {
            cartStorage[index].quantity--;
        }
        else
        {
            cartStorage.splice(index, 1);
        }
    }

    updateCart();
    saveCart();
}

function displayClearCartButton()
{
    if (cartStorage.length > 0)
    {
        clearButton.style.display = "block";
    }
    else
    {
        clearButton.style.display = "none";
    }
}

clearButton.addEventListener("click", () => {
    if (confirm("Voulez-vous vraiment supprimer tout le contenu de votre panier?"))
    {
        clearCart();
    }
});

function clearCart()
{
    cartStorage = [];
    updateCart()
    saveCart();
}

function saveCart()
{
    localStorage.setItem("cartStorage", JSON.stringify(cartStorage));
}

//.then(data => console.log(data)) // Affiche les données reçues