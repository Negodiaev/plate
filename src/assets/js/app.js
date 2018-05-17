import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
import Swiper from 'swiper/dist/js/swiper.js';

$(document).foundation();

document.addEventListener('DOMContentLoaded', function(event) {
  //------------------------------------------------------------------------//
  // Hero slider
  var heroSwiper = new Swiper('#hero-slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    autoHeight: true,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: '#hero-slider-pagination',
      clickable: true
    },
    breakpoints: {}
  });
  //------------------------------------------------------------------------//

  //------------------------------------------------------------------------//
  // Companies slider
  var companiesSwiper = new Swiper('#companies-slider', {
    slidesPerView: 6,
    slidesPerGroup: 1,
    loop: true,
    autoHeight: true,
    // loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '#companies-slider-next',
      prevEl: '#companies-slider-prev'
    },
    pagination: {
      el: '#companies-slider-pagination',
      clickable: true
    },
    breakpoints: {
      543: {
        // when window width is <= 543px
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      763: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      1023: {
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    }
  });
  //------------------------------------------------------------------------//

  //------------------------------------------------------------------------//
  // Reviews slider
  var reviewsSwiper = new Swiper('#reviews-slider', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    autoHeight: true,
    // loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '#reviews-slider-next',
      prevEl: '#reviews-slider-prev'
    },
    pagination: {
      el: '#reviews-slider-pagination',
      clickable: true
    },
    breakpoints: {
      543: {
        // when window width is <= 543px
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      1023: {
        slidesPerView: 2,
        slidesPerGroup: 2
      }
    }
  });
  //------------------------------------------------------------------------//

  //------------------------------------------------------------------------//
  // Map
  // function initMap() {
  //   var uluru = { lat: -25.363, lng: 131.044 };
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 4,
  //     center: uluru
  //   });
  //   var marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map
  //   });
  // }
  //------------------------------------------------------------------------//
});
