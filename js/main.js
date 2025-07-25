(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);


function redirectPrice() {
    window.open("https://www.instagram.com/p/DC6yrq-SeqJ/", "_blank")
}

 // Scroll-based active navbar highlighting
        $(window).on('scroll', function() {
            let scrollPosition = $(window).scrollTop() + 100; // Offset for better accuracy
            $('section, .hero-header').each(function() {
                let section = $(this);
                let sectionId = section.attr('id');
                if (sectionId && scrollPosition >= section.offset().top && scrollPosition < section.offset().top + section.outerHeight()) {
                    $('.navbar-nav .nav-link').removeClass('active');
                    $('.navbar-nav .nav-link[href="#' + sectionId + '"]').addClass('active');
                }
            });
        });

        // Trigger scroll event on page load to set initial active state
        $(document).ready(function() {
            $(window).trigger('scroll');
        });
        
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