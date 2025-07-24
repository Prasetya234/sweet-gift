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

        con

        function redirectToWhatsApp(productName) {
            const phoneNumber = "+6288289400588";
            const message = encodeURIComponent(`Halo, saya tertarik dengan ${productName}. Bisa beri informasi lebih lanjut?`);
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        }

function submitData() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const no_telp = document.getElementById('no_telp').value
    const message = document.getElementById('message').value

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=cahyaarizkika@students.unnes.ac.id&su=Customer Service&body=${email} - No.Telp ${no_telp} %0A ${message} %0A %0A ${name} %0ATerimakasih `)
}

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", () => {
            const isActive = question.classList.contains("active");
            document.querySelectorAll(".faq-item .faq-question").forEach((q) => q.classList.remove("active"));
            document.querySelectorAll(".faq-item .faq-answer").forEach((a) => (a.style.display = "none"));

            if (!isActive) {
                question.classList.add("active");
                answer.style.display = "block";
            }
        });
    });
});
