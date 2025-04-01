const arrowUp = document.querySelector("#back-to-top");
const footerY = document.querySelector("footer").offsetHeight;

// Get visual feedback on scroll behavior
/*
const scrollData = document.querySelector("#scroll-value");
const limitData = document.querySelector("#limit-value");
const offsetData = document.querySelector("#offset-value");
*/

window.addEventListener("scroll", () => {

    let limitY = document.body.offsetHeight - window.innerHeight - footerY;
    let offsetY = window.scrollY - limitY;

    if (window.scrollY >= 800)
    {
        arrowUp.style.right = "2rem";
    }
    else {
        arrowUp.style.right = "-5rem";
    }

    if (window.scrollY > limitY)
    {
        arrowUp.style.bottom = `calc(32px + ${offsetY}px)`;
    }
    else
    {
        arrowUp.style.bottom = "2rem";
    }

    // Send data to the div for display
    /*
    scrollData.textContent = window.scrollY;
    limitData.textContent = limitY;
    offsetData.textContent = offsetY;
    */
})

arrowUp.addEventListener("click", () => {
    window.scrollTo(0, 0);
});