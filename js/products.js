class Product
{
    constructor(name, description, price, details)
    {
        this.Name = name;
        this.Description = description;
        this.Price = price;
        this.Details = details;
    }
}
/*
const clrdn = new Product(
    "clrdn",
    "Voir la musique. Sentir les couleurs sur la peau.",
    1500.00,
    "L'enveloppe sensorielle clrdn offre une expérience si unique que vous croirez avoir acquis vingt nouveaux senses!"
);

const vtyeCrpjt = new Product(
    "vtye-crpjt",
    "Explorez un nouvel horizon de la raison.",
    775.00,
    "L'extension cérébrale vtye-crpjt permet au genre humain d'ouvrir la porte sur de nouveaux raisonnement. Ce qui nous apparaissait comme des règles innébranlables du raisonnement logique sont applaties par les possibilités de vtye-crpjt!"
);
*/


const listeProduits = JSON.parse("ListeProducts.json");

const title = document.querySelector("#hero");

const parag = document.createElement("p");

parag.textContent = "hello";

title.appendChild(parag);

//listeProduits.Product[0].name;