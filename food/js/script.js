import tabs from'./modules/tabs';
import modal from'./modules/modal';
import timer from'./modules/timer';
import cards from'./modules/cards';
import calc from'./modules/calc';
import forms from'./modules/forms';
import slider from'./modules/slider';
import {openModal} from './modules/modal';


window.addEventListener('DOMContentLoaded', function() {
    
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items','tabheader__item_active');
    modal('[data-modal]','.modal', modalTimerId);
    timer('.timer', '2021-01-01');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });


});







// Вариант простого слайдера


    // showSlides(slideIndex);

    // if( slides.length < 10 ){
    //     total.textContent= `0${slides.length}`;
    // } else {
    //     total.textContent= slides.length;
    // }

    // function showSlides(n){
    //     if (n > slides.length)
    //     {
    //         slideIndex = 1;
    //     }

    //     if (n < 1)
    //     {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach( item =>  item.style.display = 'none'
    //     );

    //     slides[slideIndex - 1].style.display = 'block';

    //     if( slides.length < 10 ){
    //         current.textContent= `0${slideIndex}`;
    //     } else {
    //         current.textContent= slideIndex;
    //     }

    // }

    // function plusSlides(n){
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });
    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });