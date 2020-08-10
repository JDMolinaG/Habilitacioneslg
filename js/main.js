AOS.init();


// menu
$(function() {
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<i class='fas fa-bars'></i>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<i class='fas fa-times'></i>");
        }
    });
});


$(document).ready(function() {


});

// animaciones estadisticas
function contador() {
    var time = setInterval(intervalo, 100);
    x = 0;
    var clases = $("*[data-valor]");

    function intervalo() {
        x++;
        for (var i = 0; i < clases.length; i++) {
            resultados = $(clases[i]).attr('data-valor');
            if (x > resultados) {

                continue;
            } else {

            }
            $(clases[i]).text(x);
        }
    }
}



// comenzar animacion cuando llegue a las estadisticas
window.addEventListener('scroll', function() {
    let animacion = document.getElementById('estadisticas');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let posicionObj2 = animacion.getBoundingClientRect().bottom;
    let tamañodePantalla = window.innerHeight / 3.5;

    if (posicionObj1 > tamañodePantalla) {
        contador()

    }
})

// slider
var galleryThumbs = new Swiper('.gallery-thumbs', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '2',
    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows : true,
    // },

    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows: false,
    },

});


var galleryTop = new Swiper('.swiper-container.testimonial', {
    speed: 400,
    spaceBetween: 50,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    direction: 'vertical',
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});



// efecto menu
let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function() {
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamientoActual) {
        document.getElementById('nav').style.top = '0';
    } else {
        document.getElementById('nav').style.top = '-100px';
    }
    ubicacionPrincipal = desplazamientoActual;
}

// mapa