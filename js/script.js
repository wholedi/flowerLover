"use strict"
const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');
})

const categoryItems = document.querySelectorAll('.categories__item');
categoryItems.forEach(category => {
    const categoriesButton = category.querySelector(".categories__button")
    const dropdownFiltersList = category.querySelector(".filter")
    const buttonCross =  dropdownFiltersList.querySelector(".filter__cross");
    const buttonFilter =  dropdownFiltersList.querySelector(".filter__button");
    categoriesButton.addEventListener('click', function () {
        dropdownFiltersList.classList.toggle('filter-open');
    })
    buttonCross.addEventListener('click', function () {
        dropdownFiltersList.classList.remove('filter-open');
    })
    buttonFilter.addEventListener('click', function () {
        dropdownFiltersList.classList.remove('filter-open');
    })
});

document.addEventListener("click", documentActions);
function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-spoller]')) {
        const currentElement = targetElement.closest('[data-spoller]');
        if (!currentElement.nextElementSibling.classList.contains('--sliding')) {
            currentElement.classList.toggle('active');
        }
        slideToggle(currentElement.nextElementSibling);
    }
}
const spollers = document.querySelectorAll('[data-spoller]')
if (spollers.length) {
    spollers.forEach(spoller => {
        spoller.dataset.spoller !== 'open' ? spoller.nextElementSibling.hidden = true : spoller.classList.add('active')
    });
    // Filter
    const filterTitle = document.querySelector('.filter__title')
    if (filterTitle) {
        //window.addEventListener('resize', someFunc);
        const breakPointValue = filterTitle.dataset.spollerMedia;
        const breakPoint = breakPointValue ? `(${breakPointValue.split(',')[0]}-width:${breakPointValue.split(',')[1]}px)` : null
        if (breakPoint) {
            const matchMedia = window.matchMedia(breakPoint)
            matchMedia.addEventListener("change", (e) => {
                const isTrue = e.matches
                if (isTrue) {
                    slideUp(filterTitle.nextElementSibling)
                    filterTitle.classList.remove('active')
                } else {
                    slideDown(filterTitle.nextElementSibling)
                    filterTitle.classList.add('active')
                }
            })
        }
    }
}

let slideDown = (target, duration = 500) => {
    if (!target.classList.contains('--sliding')) {
        target.classList.add('--sliding');
        target.hidden = false;
        let height = target.offsetHeight;

        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;

        target.style.overflow = 'hidden';
        target.style.height = 0;

        target.offsetHeight;

        target.style.transitionProperty = `height, margin, padding`;
        target.style.transitionDuration = `${duration}ms`;

        target.style.height = `${height}px`;

        target.style.removeProperty('padding-top')
        target.style.removeProperty('padding-bottom')
        target.style.removeProperty('margin-bottom')
        target.style.removeProperty('margin-top')

        setTimeout(() => {
            target.style.removeProperty('height')
            target.style.removeProperty('overflow')
            target.style.removeProperty('transition-duration')
            target.style.removeProperty('transition-property')
            target.classList.remove('--sliding');
        }, duration);
    }
}
let slideUp = (target, duration = 500) => {
    if (!target.classList.contains('--sliding')) {
        target.classList.add('--sliding');
        let height = target.offsetHeight;

        target.style.transitionProperty = `height, margin, padding`;
        target.style.transitionDuration = `${duration}ms`;
        target.style.height = `${height}px`;

        target.offsetHeight;

        target.style.overflow = 'hidden';
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;

        target.style.height = 0;

        setTimeout(() => {
            target.style.removeProperty('padding-top')
            target.style.removeProperty('padding-bottom')
            target.style.removeProperty('margin-bottom')
            target.style.removeProperty('margin-top')

            target.style.removeProperty('height')
            target.style.removeProperty('overflow')
            target.style.removeProperty('transition-duration')
            target.style.removeProperty('transition-property')
            target.classList.remove('--sliding');

            target.hidden = true;
        }, duration);
    }
}
let slideToggle = (target, duration = 500) => {
    target.hidden ? slideDown(target, duration) : slideUp(target, duration)
}

const customersSlider = document.querySelector('.customers');

if (customersSlider) {
    new Swiper('.customers__swiper', {
        // Optional parameters
        loop: true,
        autoHeight: true,
        speed: 800,
        spaceBetween: 18,
        slidesPerView: 4,
        // Navigation arrows
        navigation: {
            nextEl: '.customers__arrow--right',
            prevEl: '.customers__arrow--left',
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.5,
                spaceBetween: 18
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 18
            },
            // when window width is >= 480px
            650: {
                slidesPerView: 3,
                spaceBetween: 18
            },
            // when window width is >= 640px
            991: {
                slidesPerView: 4,
                spaceBetween: 18
            }
        }
    });
}
