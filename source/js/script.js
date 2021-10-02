'use strict';

var navigation = document.querySelector(".navigation");
var deleteNavigation = function () {
  window.addEventListener('resize', function () {
    if (window.innerWidth <= 1023) {
      navigation.classList.add("navigation__closed");
    }

    else {
      navigation.classList.remove("navigation__closed");
    }
  })
}

deleteNavigation();

var inputForSearch = document.querySelector('#search')

var removePlaceholderValue = function () {
  window.addEventListener('resize', function () {
    if (window.innerWidth <= 767) {
      inputForSearch.placeholder = "";
    }

    else {
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


//slider

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:4,
		slidesToScroll:4,
		speed:1000,
		responsive:[
			{
				breakpoint: 1023,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2,
					dots:false,
					arrows:false,
				}
			}
		]
	});
});

