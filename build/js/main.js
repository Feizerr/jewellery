'use strict';

if (document.querySelector('.new__slider-container--no-js')) {
  var newSliderContainer = document.querySelector('.new__slider-container');
  newSliderContainer.classList.remove('new__slider-container--no-js');
}

if (document.querySelector('.slider--no-js')) {
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

var MIN_HEIGHT = 0;
var accordionItemHeaders = document.querySelectorAll('.accordion__item > h3');
var accordionItemsBody = document.querySelectorAll('.accordion__item-body');
var PADDING = 30;
var PAGE_COUNT = 2;

accordionItemsBody.forEach(function (accordionItem) {
  accordionItem.classList.remove('accordion__no-js');
});

var useAccordion = function (element) {
  var currentlyActiveAccordionItemHeader = document.querySelector('.accordion__item > h3.active');
  if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== element) {
    currentlyActiveAccordionItemHeader.classList.toggle('active');
    currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = MIN_HEIGHT;
  }

  element.classList.toggle('active');
  var accordionItemBody = element.nextElementSibling;
  if (element.classList.contains('active')) {
    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + PADDING + 'px';
  } else {
    accordionItemBody.style.maxHeight = MIN_HEIGHT;
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
});

var useFilter = function (element) {
  element.classList.toggle('active');
  var filterItemBody = element.nextElementSibling;
  if (element.classList.contains('active')) {
    filterItemBody.style.maxHeight = filterItemBody.scrollHeight + PADDING + 'px';
  } else {
    filterItemBody.style.maxHeight = MIN_HEIGHT;
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

var buttonClear = document.querySelector('.filter__button-clear');
var filterForm = document.querySelector('.fitler__form');

if (filterForm && filterForm) {
  buttonClear.addEventListener('click', function () {
    filterForm.reset();
  });
}

//slider

$(document).ready(function () {

  var $paginationCurrentPage = $('#start-pages');
  var $paginationMaxPage = $('#all-pages');

  $('.slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 2;
    $paginationCurrentPage.text(i / 2);
    $paginationMaxPage.text(Math.round(slick.slideCount / 2));
  });

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
        slidesToScroll: 2,
        dots: false,
        arrows: false,
      }
    }]
  });
});


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
  if (btn) {
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();

      if (document.querySelector('.page__open') || document.querySelector('.header--active')) {
        pageHeader.classList.remove('header--active');
        pageSite.classList.remove('page__open');
      }
      loginPopup.classList.add('login--active');
      pageSite.classList.toggle('page__open');
    });
  }
};

openLoginPopup(enterLoginLink);
openLoginPopup(additionalShowpopupButton);

var closeLoginPopup = function () {
  closeButtonPopup.addEventListener('click', function () {
    loginPopup.classList.remove('login--active');
    pageSite.classList.toggle('page__open');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 27 || evt.key === 'Escape') {

      if (loginPopup.classList.contains('login--active')) {
        evt.preventDefault();
        loginPopup.classList.remove('login--active');
        pageSite.classList.toggle('page__open');
      }
    }
  });

  document.onclick = function (e) {
    if (loginPopup.querySelector('.login--active') & e.target !== loginPopup) {
      loginPopup.classList.remove('login--active');
      pageSite.classList.toggle('page__open');
    }
  };
};

closeLoginPopup();
