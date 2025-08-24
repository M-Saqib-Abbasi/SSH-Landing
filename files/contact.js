// Initialize EmailJS
// (function() {
//     emailjs.init("9GxxFCrdiZZwEnmHh"); // 🔑 Replace with your EmailJS Public Key
// })();

// contact.js

// Handle Contact Us Form
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        subject: "Contact Form",
        company_logo: "https://abbasihajjumrah.com/img/abbasilogo-removebg-preview.png",
        company_name: "Software Solution House",
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
        to_email: "softwaresolutionhouse@outlook.com.com"
    };

    emailjs.send("service_spr4x3d", "template_hwcjqqh", params)
        .then(function (response) {
            alert("✅ Your message has been sent successfully!");
            document.getElementById("contactForm").reset();
        }, function (error) {
            console.error("FAILED...", error);
            alert("❌ Failed to send message. Please try again.");
        });
});

// Handle Newsletter Form
document.querySelector(".newsletter-form")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
        subject: "Newsletter",
        company_logo: "https://abbasihajjumrah.com/img/abbasilogo-removebg-preview.png",
        company_name: "Softwrare Solution House",
        subscriber_email: document.querySelector(".newsletter-input").value,
        to_email: "softwaresolutionhouse@outlook.com",
        email: "softwaresolutionhouse@outlook.com"
    };

    emailjs.send("service_spr4x3d", "template_cp5n0a6", params)
        .then(function (response) {
            alert("✅ Newsletter subscription successful!");
            document.querySelector(".newsletter-form").reset();
        }, function (error) {
            console.error("FAILED...", error);
            alert("❌ Failed to subscribe. Please try again.");
        });
});
