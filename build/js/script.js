'use strict';

if (document.querySelector('.new__slider-container--no-js')) {
  var newSliderContainer = document.querySelector('.new__slider-container');
  newSliderContainer.classList.remove('new__slider-container--no-js');
}

if(document.querySelector('.slider--no-js')) {
  var slider = document.querySelector('.slider');
  slider.classList.remove('slider--no-js');
}

var navigation = document.querySelector('.navigation');
var pageSite = document.querySelector('.page');

var deleteNavigation = function () {
  window.addEventListener('resize', function () {
    if (window.innerWidth <= 1023) {
      navigation.classList.add('navigation__closed');
    } else {
      navigation.classList.remove('navigation__closed');
    }
  });
};

deleteNavigation();

var inputForSearch = document.querySelector('#search');

if (window.innerWidth <= 1023) {
  inputForSearch.placeholder = '';
}

var removePlaceholderValue = function () {
  window.addEventListener('resize', function () {
    if (window.innerWidth <= 1023) {
      inputForSearch.placeholder = '';
    } else {
      inputForSearch.placeholder = 'Type here to search';
    }
  });
};

removePlaceholderValue();

var pageHeader = document.querySelector('.header');
var headerToggle = document.querySelector('.header__toggle');

headerToggle.addEventListener('click', function () {
  pageHeader.classList.toggle('header--active');
  pageSite.classList.toggle('page__open');
});

// accordion

var minHeight = 0;
var accordionItemHeaders = document.querySelectorAll('.accordion__item > h3');
var accordionItemsBody = document.querySelectorAll('.accordion__item-body');
var padding = 43;
var filterPadding = 843;

accordionItemsBody.forEach(function (accordionItem) {
  accordionItem.classList.remove('accordion__no-js');
});

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
});

if (document.querySelector('.main__wrapper .filter')) {
  var filter = document.querySelector('.main__wrapper .filter');

  filter.classList.add('filter__delete');
}

// filter

var filterItemHeaders = document.querySelectorAll('.filter__accordion-item > legend');
var filterItemsBody = document.querySelectorAll('.filter__accordion-item-body');

filterItemsBody.forEach(function (accordionItem) {
  accordionItem.classList.remove('accordion__no-js');
})

var useFilter = function (element) {
  var currentlyFilterActiveItemHeader = document.querySelector('.filter__accordion-item > legend.active');
  if (currentlyFilterActiveItemHeader && currentlyFilterActiveItemHeader !== element) {
    currentlyFilterActiveItemHeader.classList.toggle('active');
    currentlyFilterActiveItemHeader.nextElementSibling.style.maxHeight = minHeight;
  }

  element.classList.toggle('active');
  var filterItemBody = element.nextElementSibling;
  if (element.classList.contains('active')) {
    filterItemBody.style.maxHeight = filterItemBody.scrollHeight + filterPadding + 'px';
  } else {
    filterItemBody.style.maxHeight = minHeight;
  }
};

filterItemHeaders.forEach(function (accordionItemHeader) {
  accordionItemHeader.addEventListener('click', function () {
    useFilter(accordionItemHeader);
  });

  accordionItemHeader.addEventListener('keydown', function () {
    useFilter(accordionItemHeader);
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
  //   $('#start-pages').text(valueValue);
  // });
});

// var buttonText = document.querySelector('.slick-active button')
// var valueValue = buttonText.textContent;


// Фильтр
// if ('content' in document.createElement('template')) {

//   // Находим элемент tbody таблицы
//   // и шаблон строки
//   var filterPopup = document.querySelector('#filter-template');

//   window.addEventListener('resize', function () {
//     if (window.innerWidth <= 1023) {
//       if (wrapper.querySelector('#template__form')) {
//       }

//       else {
//         var clone = template.content.cloneNode(true);
//         wrapper.appendChild(clone);
//         console.log('add')
//       }
//     } else {
//       if (wrapper.querySelector('#template__form')) {
//         wrapper.removeChild(template);
//         console.log ('del')
//       }
//     }
//   });
// }

var filterPopup = document.querySelector('.filter__popup');
var showButton = document.querySelector('.catalog__show-button');
var closePopupButton = document.querySelector('.modal-filter__close-button')

if (filterPopup || showButton || closePopupButton) {
  showButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    filterPopup.classList.add('modal-filter');
    pageSite.classList.toggle('page__open');
  });

  closePopupButton.addEventListener('click', function () {
    filterPopup.classList.remove('modal-filter');
    pageSite.classList.toggle('page__open');
  });
}


// login
var enterLoginLink = document.querySelector('.header__login');
var loginPopup = document.querySelector('.login');
var closeButtonPopup = loginPopup.querySelector('.login__button-close');
var additionalShowpopupButton = document.querySelector('.header__additional-special');

var openLoginPopup = function (btn) {
  btn.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (document.querySelector('.page__open') || document.querySelector('.header--active')) {
      pageHeader.classList.remove('header--active');
      pageSite.classList.remove('page__open');
    }
    loginPopup.classList.add('login--active');
  });
};

openLoginPopup(enterLoginLink);
openLoginPopup(additionalShowpopupButton);

var closeLoginPopup = function () {
  closeButtonPopup.addEventListener('click', function () {
    loginPopup.classList.remove('login--active');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 27 || evt.key === 'Escape') {

      if (loginPopup.classList.contains('login--active')) {
        evt.preventDefault();
        loginPopup.classList.remove('login--active');
      }
    }
  });

  document.onclick = function (e) {
    if (loginPopup.querySelector('.login--active') & e.target !== loginPopup) {
      loginPopup.classList.remove('login--active');
    }
  };
};

closeLoginPopup();
