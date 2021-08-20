//   // DROPDOWN
const elements = document.querySelectorAll('.drop-down');

for (i = 0; i < elements.length; i++) {
  elements[i].addEventListener('mousedown', showmenu);
  elements[i].addEventListener('mouseleave', hidemenu);
}

function showmenu() {
  if (this.children.length > 1) {
    this.children[1].style.height = 'auto';
    this.children[1].style.opacity = '1';
    this.children[1].style.overflow = 'visible';
  }
  this.classList.add('rotate');
}

function hidemenu() {
  if (this.children.length > 1) {
    this.children[1].style.height = '0';
    this.children[1].style.opacity = '0';
    this.children[1].style.overflow = 'hidden';
  }

  this.classList.remove('rotate');
}


// FIXED HEADER
window.onscroll = function () {
  showHeader();
};

function showHeader() {
  let header = document.querySelector('.header');
  if (window.pageYOffset > 210) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}

// BURGER

(function () {
  const burger = document.querySelector('.burger');
  const header = document.querySelector('.header__bottom');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
    header.classList.toggle('show');
  });
}());

// SLICK

$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-arrow slick-prev"><svg class="slick-icon" xmlns="http://www.w3.org/2000/svg" width="18.969" height="12"><path data-name="стрелка влево" d="M6.659 11.685a1.011 1.011 0 000-1.425l-4.96-4.989a1 1 0 00-1.417 0 1.013 1.013 0 000 1.426l4.96 4.988a1 1 0 001.417 0zm-4.96-4.988l4.96-4.989a1.011 1.011 0 000-1.425 1 1 0 00-1.417 0L.282 5.271a1.013 1.013 0 000 1.426 1 1 0 001.416.003zm-.7.271h16.97a1 1 0 000-2H.998a1 1 0 000 2z" fill="#f1f1f1" fill-rule="evenodd"/></svg></button>',
    nextArrow: '<button class="slick-arrow slick-next"><svg class="slick-icon" xmlns="http://www.w3.org/2000/svg" width="19.03" height="12"><path data-name="стрелка вправо" d="M12.33 11.686a1.015 1.015 0 010-1.426l4.97-4.989a1 1 0 011.42 0 1.015 1.015 0 010 1.426l-4.97 4.989a1 1 0 01-1.42 0zm4.97-4.989l-4.97-4.989a1.014 1.014 0 010-1.425 1 1 0 011.42 0l4.97 4.988a1.015 1.015 0 010 1.426 1 1 0 01-1.42.003zm.7.271H1a1 1 0 110-2h17a1 1 0 110 2z" fill="#f1f1f1" fill-rule="evenodd"/></svg></button>',
    responsive: [{
        breakpoint: 620,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 520,
        settings: {
          dots: false,
          arrows: false
        }
      },
    ],

  });

  $('.rent__slider').slick({
    arrows: true,
    prevArrow: '<a class="slick-arrow slick-prev" href="#" data-name="стрелка влево"></a>',
    nextArrow: '<a class="slick-arrow slick-next" href="#" data-name="стрелка вправо"></a>',
  });

});