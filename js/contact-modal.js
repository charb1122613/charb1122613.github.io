const btn = document.querySelector("#open-contact-form")

btn.addEventListener("click", (e) => {
    e.preventDefault();

    let myModal = new bootstrap.Modal(document.querySelector("#contact-modal"));
    myModal.show();
})