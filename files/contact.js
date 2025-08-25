

$(document).ready(function () {
    $("#contactSubmitBtn").on("click", function (e) {
        e.preventDefault();

        const params = {
        subject: document.getElementById("subject").value,
        company_logo: "https://logo.softwaresolutionhouse.com/Images/Software-Solution-House.jpg",
        company_name: "Software Solution House",
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
        to_email: "softwaresolutionhouse@outlook.com",
        from_emai:"softwaresolutionhouse.official@gmail.com"
    };

        emailjs.send("service_spr4x3d", "template_hwcjqqh", params)
            .then(function (response) {
             showModal("✅ Your message has been sent!", "success");
                $("#contactForm")[0].reset();
            })
            .catch(function (error) {
               showModal("❌ Failed to send your message. Try again later.", "error");
            });
    });

    // Newsletter Subscribe
$("#newsletterSubmitBtn").on("click", function (e) {
    e.preventDefault();

    const params = {
        subject: "Newsletter Subscription",
        company_logo: "https://logo.softwaresolutionhouse.com/Images/Software-Solution-House.jpg",
        company_name: "Software Solution House",
        to_email: "softwaresolutionhouse@outlook.com",  // ✅ Recipient (your email)
        subscriber_email: document.getElementById("NewsLetterEmail").value // ✅ Subscriber email
    };

    emailjs.send("service_spr4x3d", "template_cp5n0a6", params)
        .then(function (response) {
            showModal("✅ Thank you for subscribing!", "success");
            $("#newLetterForm")[0].reset();
        })
        .catch(function (error) {
           showModal("❌ Subscription failed. Please try again.", "error");
        });
});


function showModal(message, type = "success") {
    const modal = document.getElementById("messageModal");
    const modalMessage = document.getElementById("modalMessage");

    // Reset classes
    modalMessage.className = "";
    modalMessage.classList.add(type === "success" ? "modal-success" : "modal-error");

    // Set message
    modalMessage.textContent = message;

    // Show modal
    modal.style.display = "flex";

    // Auto hide after 3 seconds
    setTimeout(() => {
        modal.style.display = "none";
    }, 3000);
}


});
