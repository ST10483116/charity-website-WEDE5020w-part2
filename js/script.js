// =========================
// Accordion FAQ Section
// =========================
const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

// =========================
// Gallery Lightbox
// =========================
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll(".gallery img");
images.forEach(image => {
    image.addEventListener("click", e => {
        lightbox.classList.add("active");
        const img = document.createElement("img");
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
});

// =========================
// Form Validation
// =========================
function validateForm(formId) {
    const form = document.getElementById(formId);
    const name = form.querySelector("input[name='name']");
    const email = form.querySelector("input[name='email']");
    const message = form.querySelector("textarea[name='message']");

    let valid = true;
    let errorMsg = "";

    if (!name.value.trim()) {
        valid = false;
        errorMsg += "Name is required.\n";
    }

    if (!email.value.trim() || !email.value.includes("@")) {
        valid = false;
        errorMsg += "Valid email is required.\n";
    }

    if (message && !message.value.trim()) {
        valid = false;
        errorMsg += "Message is required.\n";
    }

    if (!valid) {
        alert(errorMsg);
    }

    return valid;
}

// Attach validation to forms
document.getElementById("enquiryForm")?.addEventListener("submit", function(e){
    if (!validateForm("enquiryForm")) e.preventDefault();
});

document.getElementById("contactForm")?.addEventListener("submit", function(e){
    if (!validateForm("contactForm")) e.preventDefault();
});
