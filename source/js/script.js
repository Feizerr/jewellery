'use strict';

var navigation = document.querySelector(".navigation");
var deleteNavigation = function () {
  window.addEventListener('resize', function () {
    if (window.innerWidth <= 1023) {
      navigation.classList.add("navigation__closed");
    } else {
      navigation.classList.remove("navigation__closed");
    }
  })
}

deleteNavigation();

var inputForSearch = document.querySelector('#search')

var removePlaceholderValue = function () {
  window.addEventListener('resize', function () {
    if (window.innerWidth <= 1023) {
      inputForSearch.placeholder = "";
    } else {
      inputForSearch.placeholder = "Type here to search";
    }
  })
}

removePlaceholderValue();

var pageHeader = document.querySelector('.header');
var headerToggle = document.querySelector('.header__toggle');

headerToggle.addEventListener('click', function () {
  pageHeader.classList.toggle('header--active');
});


// accordion

var minHeight = 0;
var accordionItemHeaders = document.querySelectorAll('.accordion__item > h3');
var accordionItemsBody = document.querySelectorAll('.accordion__item-body');
var padding = 30;

accordionItemsBody.forEach(function (accordionItem) {
  accordionItem.classList.remove('accordion__no-js');
})

var useAccordion = function (element) {
  var currentlyActiveAccordionItemHeader = document.querySelector('.accordion__item > h3.active');
  if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== element) {
    currentlyActiveAccordionItemHeader.classList.toggle('active');
    currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = minHeight;
  }

  element.classList.toggle('active');
  var accordionItemBody = element.nextElementSibling;
  if (element.classList.contains('active')) {
    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + padding + 'px';
  } else {
    accordionItemBody.style.maxHeight = minHeight;
  }
};

accordionItemHeaders.forEach(function (accordionItemHeader) {
  accordionItemHeader.addEventListener('click', function () {
    useAccordion(accordionItemHeader);
  });

  accordionItemHeader.addEventListener('keydown', function () {
    useAccordion(accordionItemHeader);
  });
})



//slider


$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: false,
        }
      }
    ]
  });

  // $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  //   $("#start-pages").text(valueValue);
  // });
});

// var buttonText = document.querySelector('.slick-active button')
// var valueValue = buttonText.textContent;
