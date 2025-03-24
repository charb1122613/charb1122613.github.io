const row = document.querySelector("#products-section .row");
/*
const pugOne = "img/charlesdeluvio-DziZIYOGAHc-unsplash-600x400.jpg";
const pugTwo = "img/charlesdeluvio-lJJlaUWYrPE-unsplash-600x400.jpg";
const pugThree = "img/charlesdeluvio-Mv9hjnEUHR4-unsplash-600x400.jpg";
const pugFour = "img/charlesdeluvio-v3HlPuZ03II-unsplash-600x400.jpg";
*/

const clspr = "img/maxim-berg-clspr-600x400.jpg";
const brclypjt = "img/maxim-berg-brclypjt-600x400.jpg";
const brjt = "img/maxim-berg-brjt-600x400.jpg";
const duon = "img/maxim-berg-duon-600x400.jpg";
const gwmytpj = "img/maxim-berg-gwmytpj-600x400.jpg";
const plty = "img/maxim-berg-plty-600x400.jpg";
const trclyrdon = "img/maxim-berg-trclyrdon-600x400.jpg";
const umytClrdn = "img/maxim-berg-umyt-clrdn-600x400.jpg";
const vtyeCrpjt = "img/maxim-berg-vtye-crpjt-600x400.jpg";

const allImgs = [clspr, brclypjt, brjt, duon, gwmytpj, plty, trclyrdon, umytClrdn, vtyeCrpjt];
let counter = 0;

for (let i = 0; i < 9; i++)
{
    let col = document.createElement("div");
    col.classList.add("col");

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = allImgs[counter];

    let body = document.createElement("div");
    body.classList.add("card-body");

    let title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = "Product Name";

    let text = document.createElement("p");
    text.classList.add("card-text");
    text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nobis deleniti fugit?";

    let price = document.createElement("h4");
    price.classList.add("card-text");
    price.classList.add("text-end");
    price.textContent = "5,99$";

    let btnRow = document.createElement("div");
    btnRow.classList.add("row");

    let colBtn = document.createElement("div");
    colBtn.classList.add("col-auto");

    let colBuy = document.createElement("div");
    colBuy.classList.add("col-auto");
    colBuy.classList.add("ms-auto");

    let btn = document.createElement("a");
    btn.classList.add("btn");
    btn.classList.add("btn-primary");
    btn.classList.add("btn-details");
    btn.textContent = "Details";

    let buy = document.createElement("a");
    buy.classList.add("btn");
    buy.classList.add("btn-primary");
    buy.textContent = "Add to cart";

    colBtn.appendChild(btn);
    colBuy.appendChild(buy);

    btnRow.appendChild(colBtn);
    btnRow.appendChild(colBuy);

    body.appendChild(title);
    body.appendChild(text);
    body.appendChild(price);
    body.appendChild(btnRow);

    card.appendChild(img);
    card.appendChild(body);

    col.appendChild(card);

    row.appendChild(col);

    if (counter < allImgs.length - 1)
    {
        counter++;
    }
    else
    {
        counter = 0;
    }
}