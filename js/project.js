window.onload = function () {

    //Create map
    initMap();
    var map;
    var coordinates;
    var marker;

    function initMap() {
        coordinates = {
                lat: -7.947416,
                lng: 112.615161
            },
            markerImage = './img/marker.png',
            zoom = 14.8,
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: zoom,
                center: coordinates,
                disableDefaultUI: true,
            });
        coordinates = {
                lat: -7.943367,
                lng: 112.620067
            },
            marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                icon: markerImage
            });
        $.getJSON("../js/bundles/map-style.json", function (data) {
            map.setOptions({
                styles: data
            });
        });
    }

// Nav scroll to section
    $('.menu-btn').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('menu-btn-active');
        $('.menu').toggleClass('menu-active')

    });

    $('.menu a').on('click', function(){
        $('.menu-btn').toggleClass('menu-btn-active');
        $('.menu').toggleClass('menu-active')
    });
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        id = '#' + id;
        var top;
        top = $(id).offset().top;
        if (top > 2500) {
            $('body,html').animate({
                scrollTop: top
            }, 2500);
        } else if (top < 1000)
            $('body,html').animate({
                scrollTop: top
            }, 1000);
        else {
            $('body,html').animate({
                scrollTop: top
            }, 1500);
        }
    });

    $(".menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href');

        id = '#' + id;
        var top;
        top = $(id).offset().top;
        if (top > 2500) {
            $('body,html').animate({
                scrollTop: top
            }, 2500);
        } else if (top < 1000)
            $('body,html').animate({
                scrollTop: top
            }, 1000);
        else {
            $('body,html').animate({
                scrollTop: top
            }, 1500);
        }
    });


// Slider recent-works
    $('.recent-work__slider').slick({
        dots: true,
        arrows: true,
        prevArrow: $('.recent-work .slider-arrow_prev'),
        nextArrow: $('.recent-work .slider-arrow_next'),
        slidesToShow: 1,

    });


// Create section team
    Vue.component("team-card", {
        template: `<div class="our-team__card">
        <div class="our-team__card-photo">
            <img :src="user.photo" alt="" class="card-photo">
        </div>
        <h3 class="our-team__card-title"> {{user.name}} </h3>
        <p class="our-team__card-position"> {{user.position}} </p>
        <div class="our-team__card-footer" >
        <a v-for="social in user.socials"
        :key="social.id"
        :href="social[0]"
        ><i :class="social[1]"></i></a>
        </div>
    </div>`,
        props: ["user"],
    })

    var vm = new Vue({
        el: "#our-team",
        data: {
            users: [{
                    id: 1,
                    photo: './img/avatarFounder.jpg',
                    name: 'Miguel Obrien',
                    position: 'CEO & Founder',
                    socials: {
                        in: ['https://www.linkedin.com/', "fab fa-linkedin"],
                        g: ['https://accounts.google.com', "fab fa-google-plus-square"],
                        fb: ['https://fb.com/', "fab fa-facebook-square"],
                        tw: ['https://twitter.com/', 'fab fa-twitter-square']
                    }
                },
                {
                    id: 2,
                    photo: './img/avatarArtDirector.jpg',
                    name: 'Jackie Carroll',
                    position: 'Art Director',
                    socials: {
                        be: ['https://www.behance.net/', 'fab fa-behance-square'],
                        in: ['https://www.linkedin.com/', "fab fa-linkedin"],
                        g: ['https://accounts.google.com', "fab fa-google-plus-square"],
                        fb: ['https://fb.com/', "fab fa-facebook-square"],
                        tw: ['https://twitter.com/', 'fab fa-twitter-square']
                    }
                },
                {
                    id: 3,
                    photo: './img/avatarDesigner.jpg',
                    name: 'Ida Morrison',
                    position: 'Designer',
                    socials: {
                        be: ['https://www.behance.net/', 'fab fa-behance-square'],
                        in: ['https://www.linkedin.com/', "fab fa-linkedin"],
                        g: ['https://accounts.google.com', "fab fa-google-plus-square"],
                        fb: ['https://fb.com/', "fab fa-facebook-square"],
                        tw: ['https://twitter.com/', 'fab fa-twitter-square']
                    }
                },
                {
                    id: 4,
                    photo: './img/avatarSensei.jpg',
                    name: 'Aikido Budo',
                    position: 'Sensei',
                    socials: {
                        be: ['https://www.behance.net/', 'fab fa-behance-square'],
                        in: ['https://www.linkedin.com/', "fab fa-linkedin"],
                        g: ['https://accounts.google.com', "fab fa-google-plus-square"],
                        fb: ['https://fb.com/', "fab fa-facebook-square"],
                        tw: ['https://twitter.com/', 'fab fa-twitter-square']
                    }
                },
                {
                    id: 5,
                    photo: './img/avatarRealMen2.png',
                    name: 'Bogdan Bogdanovych',
                    position: 'Real Men',
                    socials: {
                        be: ['https://www.behance.net/', 'fab fa-behance-square'],
                        in: ['https://www.linkedin.com/in/bohdan-shumakov-096b07186/', "fab fa-linkedin"],
                        g: ['https://accounts.google.com', "fab fa-google-plus-square"],
                        fb: ['https://www.facebook.com/bohdan.shumakov.vn.ua', "fab fa-facebook-square"],
                        tw: ['https://twitter.com/', 'fab fa-twitter-square']
                    }
                },

            ]
        },
    })

   // Slick our team
    $('.our-team__slider').slick({
        dots: false,
        arrows: true,
        prevArrow: $('.our-team .slider-arrow_prev'),
        nextArrow: $('.our-team .slider-arrow_next'),
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [{
                breakpoint: 1330,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                   
                    arrows: false,

                }
            }
        ]
    });
    
// Add class to map box right
    $('.map-home__icon').on('click', function () {
        $('.map-home__box').toggleClass("map-home__box--hidden");
        $(this).toggleClass("fillBG");

    })
    $('.map-phone__icon').on('click',  function () {
        $('.map-phone__box').toggleClass("map-phone__box--hidden");
        $(this).toggleClass("fillBG");
    })

   
// hide placeholder
    $('.name-wrapper__text').click(function () {
        $(this).hide();
    });

    $('#input').focusout(function () {
        if ($(this).val().trim() == '') {
            $('#inputLbl').addClass('top');
        }
    });

    // Scroll to top
    $('#scroll').on("click", scrollToUp);
    function scrollToUp(ev) {

        var id = $(this).attr('href');
        id = '#' + id;
        var top;
        top = $("#home").offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 3000);
    }




    if($('input').focus()){
        console.log(true)
    }
}