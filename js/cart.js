const slider = document.querySelector("#cart");
const handle = document.querySelector("#sub-handle");
const btnClose = document.querySelector("#cart-close");
const overflow = document.querySelector("#cart-overflow");
const sizeX = slider.offsetWidth;

if (sizeX < 600)
{
    slider.style.right = `-${sizeX}px`;
}

let isOpen = false;

handle.addEventListener("click", () => {
    if (isOpen)
    {
        slider.style.right = `-${sizeX}px`;
        isOpen = false
    }
    else
    {
        slider.style.right = "0";
        isOpen = true;
    }
});

btnClose.addEventListener("click", () => {
    if (isOpen)
    {
        slider.style.right = `-${sizeX}px`;
        isOpen = false;
    }
});