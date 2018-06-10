import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
import Swiper from 'swiper/dist/js/swiper.js';
import './vendor/wa-mediabox';

$(document).foundation();

document.addEventListener('DOMContentLoaded', function(event) {
  //------------------------------------------------------------------------//
  // Hero slider
  var heroSwiper = new Swiper('#hero-slider', {
    loop: true,
    autoHeight: true,
    pagination: {
      el: '#hero-slider-pagination',
      clickable: true
    },
    breakpoints: {
      1023: {}
    }
  });
  //------------------------------------------------------------------------//

  //------------------------------------------------------------------------//
  // Companies slider
  var companiesSwiper = new Swiper('#companies-slider', {
    slidesPerView: 6,
    loop: true,
    loopedSlides: 6,
    spaceBetween: 20,
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
        slidesPerView: 2
      },
      763: {
        slidesPerView: 3
      },
      1023: {
        slidesPerView: 4
      }
    }
  });
  //------------------------------------------------------------------------//

  //------------------------------------------------------------------------//
  // Reviews slider
  var reviewsSwiper = new Swiper('#reviews-slider', {
    slidesPerView: 3,
    loop: true,
    loopedSlides: 6,
    spaceBetween: 20,
    navigation: {
      nextEl: '#reviews-slider-next',
      prevEl: '#reviews-slider-prev'
    },
    pagination: {
      el: '#reviews-slider-pagination',
      clickable: true
    },
    breakpoints: {
      639: {
        slidesPerView: 1
      },
      1023: {
        slidesPerView: 2
      }
    }
  });
  //------------------------------------------------------------------------//
});
