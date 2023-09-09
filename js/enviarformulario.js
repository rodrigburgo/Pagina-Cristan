emailjs.init("vnHupVgtIi6wzkm3U"); // Reemplaza con tu clave pública de EmailJS

    document.getElementById("signup-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const templateParams = {
            name: formData.get("YourName"),
            lastName: formData.get("YourLastName"),
            stayDuration: formData.get("YourStayDuration"),
            email: formData.get("YourEmail")
        };

        emailjs.send("service_m5pztc3", "template_unnmprq", templateParams)
            .then(function (response) {
                alert("Correo enviado con éxito");
            })
            .catch(function (error) {
                alert("Error al enviar el correo: " + error);
            });
    });