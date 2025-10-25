

// $(document).ready(function () {
//     $("#contactSubmitBtn").on("click", function (e) {
//         e.preventDefault();

//         const params = {
//         subject: document.getElementById("subject").value,
//         company_logo: "https://logo.softwaresolutionhouse.com/Images/Software-Solution-House.jpg",
//         company_name: "Software Solution House",
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         message: document.getElementById("message").value,
//         to_email: "softwaresolutionhouse@outlook.com",
//         from_emai:"softwaresolutionhouse.official@gmail.com"
//     };

//         emailjs.send("service_spr4x3d", "template_hwcjqqh", params)
//             .then(function (response) {
//              showModal("✅ Your message has been sent!", "success");
//                 $("#contactForm")[0].reset();
//             })
//             .catch(function (error) {
//                showModal("❌ Failed to send your message. Try again later.", "error");
//             });
//     });

//     // Newsletter Subscribe
// $("#newsletterSubmitBtn").on("click", function (e) {
//     e.preventDefault();

//     const params = {
//         subject: "Newsletter Subscription",
//         company_logo: "https://logo.softwaresolutionhouse.com/Images/Software-Solution-House.jpg",
//         company_name: "Software Solution House",
//         to_email: "softwaresolutionhouse@outlook.com",  // ✅ Recipient (your email)
//         subscriber_email: document.getElementById("NewsLetterEmail").value // ✅ Subscriber email
//     };

//     emailjs.send("service_spr4x3d", "template_cp5n0a6", params)
//         .then(function (response) {
//             showModal("✅ Thank you for subscribing!", "success");
//             $("#newLetterForm")[0].reset();
//         })
//         .catch(function (error) {
//            showModal("❌ Subscription failed. Please try again.", "error");
//         });
// });


// function showModal(message, type = "success") {
//     const modal = document.getElementById("messageModal");
//     const modalMessage = document.getElementById("modalMessage");

//     // Reset classes
//     modalMessage.className = "";
//     modalMessage.classList.add(type === "success" ? "modal-success" : "modal-error");

//     // Set message
//     modalMessage.textContent = message;

//     // Show modal
//     modal.style.display = "flex";

//     // Auto hide after 3 seconds
//     setTimeout(() => {
//         modal.style.display = "none";
//     }, 3000);
// }


// });




/////////////////
$(document).ready(function () {

    // ===== Helper Functions =====
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        const phoneRegex = /^[0-9]{10,15}$/;
        return phoneRegex.test(phone);
    }

    function showError(inputId, message) {
        const $input = $("#" + inputId);
        $input.addClass("input-error");

        if ($input.next(".error-text").length === 0) {
            $input.after(`<small class="error-text" style="color:red;">${message}</small>`);
        }
    }

    function clearError(inputId) {
        const $input = $("#" + inputId);
        $input.removeClass("input-error");
        $input.next(".error-text").remove();
    }

    // ===== Contact Form Submit =====
    $("#contactSubmitBtn").on("click", async function (e) {
        e.preventDefault();

        // Clear old errors
        $(".error-text").remove();
        $(".input-error").removeClass("input-error");

        // Get form values
        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const phone = $("#phone").val().trim();
        const subject = $("#subject").val().trim();
        const message = $("#message").val().trim();

        let isValid = true;

        // Validation checks
        if (name === "") {
            showError("name", "Name is required");
            isValid = false;
        }

        if (email === "") {
            showError("email", "Email is required");
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError("email", "Enter a valid email address");
            isValid = false;
        }

        if (phone === "") {
            showError("phone", "Phone number is required");
            isValid = false;
        } else if (!isValidPhone(phone)) {
            showError("phone", "Enter a valid phone number (10–15 digits)");
            isValid = false;
        }

        if (subject === "") {
            showError("subject", "Subject is required");
            isValid = false;
        }

        if (message === "") {
            showError("message", "Message cannot be empty");
            isValid = false;
        }

        if (!isValid) return;

        // Optional: check if email is real using ZeroBounce or Hunter.io API
        // Example (pseudo - requires API key):
        /*
        const verifyResponse = await fetch(`https://api.zerobounce.net/v2/validate?api_key=YOUR_API_KEY&email=${email}`);
        const verifyData = await verifyResponse.json();
        if (verifyData.status !== "valid") {
            showError("email", "This email address seems invalid or not registered");
            return;
        }
        */

        // Prepare params for EmailJS
        const params = {
            subject,
            company_logo: "https://logo.softwaresolutionhouse.com/Images/Software-Solution-House.jpg",
            company_name: "Software Solution House",
            name,
            email,
            phone,
            message,
            to_email: "softwaresolutionhouse@outlook.com",
            from_email: "softwaresolutionhouse.official@gmail.com"
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

    // ===== Newsletter Subscribe =====
    $("#newsletterSubmitBtn").on("click", function (e) {
        e.preventDefault();

        $(".error-text").remove();
        $(".input-error").removeClass("input-error");

        const subscriberEmail = $("#NewsLetterEmail").val().trim();
        if (subscriberEmail === "") {
            showError("NewsLetterEmail", "Email is required");
            return;
        } else if (!isValidEmail(subscriberEmail)) {
            showError("NewsLetterEmail", "Enter a valid email address");
            return;
        }

        const params = {
            subject: "Newsletter Subscription",
            company_logo: "https://logo.softwaresolutionhouse.com/Images/Software-Solution-House.jpg",
            company_name: "Software Solution House",
            to_email: "softwaresolutionhouse@outlook.com",
            subscriber_email: subscriberEmail
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

    // ===== Show Modal =====
    function showModal(message, type = "success") {
        const modal = document.getElementById("messageModal");
        const modalMessage = document.getElementById("modalMessage");

        modalMessage.className = "";
        modalMessage.classList.add(type === "success" ? "modal-success" : "modal-error");
        modalMessage.textContent = message;
        modal.style.display = "flex";

        setTimeout(() => {
            modal.style.display = "none";
        }, 3000);
    }

});
