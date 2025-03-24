const imgLink = document.querySelectorAll(".img-link");

imgLink.forEach(e => {
    let hover = e.querySelector(".hover");
    let img = e.querySelector("img");
    let imgX = img.offsetWidth;
    let imgY = img.offsetHeight;
    hover.style.width = `${imgX}px`;
    hover.style.height = `${imgY}px`;
    hover.style.top = "16px";
    hover.style.left = "16px";

    e.addEventListener("mouseenter", () => {
        img.style.filter = "blur(4px)";
        hover.style.opacity = 0.75;
        hover.style.visibility = "visible";
    })

    e.addEventListener("mouseleave", () => {
        img.style.filter = "none";
        hover.style.opacity = 0;
        hover.style.visibility = "hidden";
    })
});