document.addEventListener("DOMContentLoaded", () => {
    // FAQ Toggle
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item, index) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const toggle = item.querySelector(".toggle");

        // Set initial state: hide all answers except the first (active) one
        if (!question.classList.contains("active")) {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
            toggle.textContent = "▲";
        }

        // Toggle on click
        question.addEventListener("click", () => {
            const isActive = question.classList.contains("active");

            // Close all items
            faqItems.forEach((otherItem) => {
                const otherQuestion = otherItem.querySelector(".faq-question");
                const otherAnswer = otherItem.querySelector(".faq-answer");
                const otherToggle = otherItem.querySelector(".toggle");
                otherQuestion.classList.remove("active");
                otherAnswer.style.display = "none";
                otherToggle.textContent = "▼";
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                question.classList.add("active");
                answer.style.display = "block";
                toggle.textContent = "▲";
            }
        });
    });

    // Scroll-based active navbar highlighting
    $(window).on('scroll', function() {
        let scrollPosition = $(window).scrollTop() + 100;
        $('section, .hero-header').each(function() {
            let section = $(this);
            let sectionId = section.attr('id');
            if (sectionId && scrollPosition >= section.offset().top && scrollPosition < section.offset().top + section.outerHeight()) {
                $('.navbar-nav .nav-link').removeClass('active');
                $('.navbar-nav .nav-link[href="#' + sectionId + '"]').addClass('active');
            }
        });
    });

    // Trigger scroll event on page load
    $(window).trigger('scroll');
});

// WhatsApp Redirect for Products
function redirectToWhatsApp(productName) {
    const phoneNumber = "+6288289400588";
    const message = encodeURIComponent(`Halo, saya tertarik dengan ${productName}. Bisa beri informasi lebih lanjut?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// Form Submission to WhatsApp
function submitData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const no_telp = document.getElementById('no_telp').value;
    const message = document.getElementById('message').value;

    const phoneNumber = "+6288289400588";
    const formattedMessage = encodeURIComponent(
        `Halo, saya ${name}\n` +
        `Email: ${email}\n` +
        `No. Telp: ${no_telp}\n` +
        `Pesan: ${message}\n` +
        `Terima kasih`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${formattedMessage}`, '_blank');
}

// Track Product Clicks for Google Analytics
function trackProductClick(productName) {
    gtag('event', 'select_product', {
        'product_name': productName,
        'product_category': productName === 'Buket Bunga' ? 'Bouquet' : productName === 'Custom Buket Snack' ? 'Snack Bouquet' : 'Doll Bouquet'
    });
}