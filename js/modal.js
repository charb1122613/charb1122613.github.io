const btn = document.querySelectorAll(".show-details");
const modal = document.querySelector("#modal");

btn.forEach(b => {
    b.removeAttribute("href");
    b.addEventListener("click", (e) => {
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
    })
});

window.addEventListener("click", (event) => {
    if(event.target === modal)
    {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
    }
});