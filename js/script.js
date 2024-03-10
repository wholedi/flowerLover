"use strict"
const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');
})

const categoryItems = document.querySelectorAll('.categories__item');
categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Получаем индексы из data-атрибутов
        const filterIndex = item.dataset.filterIndex;
        const buttonIndex = item.dataset.buttonIndex;

        // // Получаем все элементы с классом "filter" и удаляем класс "filter-open" у всех
        const filterElements = document.querySelectorAll('.filter');
        filterElements.forEach(filter => filter.classList.remove('filter-open'));

        // Добавляем класс "filter-open" только к соответствующему элементу по индексу
        filterElements[filterIndex].classList.add('filter-open');

        // Получаем все элементы button и удаляем класс "open-filter" у всех
        const buttons = document.querySelectorAll('.filter__cross');
        buttons.forEach(button => button.classList.remove('open-filter'));

        // Добавляем класс "open-filter" только к соответствующей кнопке по индексу
        buttons[buttonIndex].classList.add('open-filter');
    });
});