// Obtén los divs donde agregarás la información de contacto y las redes sociales
const footerContentLeft = document.getElementById("footer-content-left");
const footerContentRight = document.getElementById("footer-content-right");

// Crea elementos para la información de contacto
const contactInfoHeading = document.createElement("h2");
contactInfoHeading.textContent = "Información de Contacto";

const phonePara = document.createElement("p");
phonePara.textContent = "Teléfono: (123) 456-7890";

const emailPara = document.createElement("p");
emailPara.textContent = "Correo Electrónico: info@alberstore.com";

const addressPara = document.createElement("p");
addressPara.textContent = "Dirección: 123 Calle Principal, Ciudad";

// Agrega los elementos al div de la información de contacto
footerContentLeft.appendChild(contactInfoHeading);
footerContentLeft.appendChild(phonePara);
footerContentLeft.appendChild(emailPara);
footerContentLeft.appendChild(addressPara);

// Crea elementos para las redes sociales
const socialHeading = document.createElement("h2");
socialHeading.textContent = "Síguenos en nuestras redes sociales:";

const facebookLink = document.createElement("a");
facebookLink.href = "https://www.facebook.com/albenstore1/";
facebookLink.innerHTML = '<i class="fab fa-facebook-f"></i> Facebook';
facebookLink.style.marginRight = "10px";

const instagramLink = document.createElement("a");
instagramLink.href = "https://www.instagram.com/albenstore/?hl=es";
instagramLink.innerHTML = '<i class="fab fa-instagram"></i> Instagram';

// Agrega los elementos al div de las redes sociales
footerContentRight.appendChild(socialHeading);
footerContentRight.appendChild(facebookLink);
footerContentRight.appendChild(instagramLink);
// Agrega más redes sociales si es necesario

// Puedes personalizar los estilos y la estructura de los elementos creados según tus preferencias

