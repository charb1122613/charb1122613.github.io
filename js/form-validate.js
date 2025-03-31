document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#contact-form");
    const nameField = document.querySelector("#contactName");
    const emailField = document.querySelector("#contactEmail");
    const messageField = document.querySelector("#contactMessage");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        if (validateForm())
        {
            alert("Formulaire soumis avec succès!");
            form.reset();
            nameField.classList.remove("is-valid");
            emailField.classList.remove("is-valid");
            messageField.classList.remove("is-valid");
        }

        function validateForm()
        {
            let isValid = true;

            const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,3}$/;

            if (nameField.value.trim() === "")
            {
                showError(nameField, "Veuillez entrer votre nom.")
                isValid = false;
            }
            else
            {
                showSuccess(nameField);
            }

            if (emailField.value.trim() === "")
            {
                showError(emailField, "Veuillez entrer votre adresse courriel.")
                isValid = false;
            }
            else if (!emailPattern.test(emailField.value))
            {
                showError(emailField, "Veuillez entrer adresse courriel valide.")
                isValid = false;
            }
            else
            {
                showSuccess(emailField);
            }

            if (messageField.value.trim() === "")
            {
                showError(messageField, "Veuillez saisir un message à transmettre.")
                isValid = false;
            }
            else
            {
                showSuccess(messageField);
            }

            function showError(sender, message)
            {
                const feedback = sender.nextElementSibling;

                sender.classList.add("is-invalid");
                sender.classList.remove("is-valid");
                feedback.textContent = message;
            }

            function showSuccess(sender)
            {
                sender.classList.add("is-valid");
                sender.classList.remove("is-invalid");
            }

            return isValid;
        }

    });

});