const menuBtn = document.querySelector('.menu__btn');
const menuBtnClose = document.querySelector('.menu__list-close');
const menuMobile = document.querySelector('.menu__list');
let el = document.querySelectorAll('.label');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.add('menu--open');
});
menuBtnClose.addEventListener('click', () => {
    menuMobile.classList.remove('menu--open');
});
el.forEach(el =>
    el.addEventListener('click', () => {
        let content__label = el.nextElementSibling;

        if (content__label.style.maxHeight) {
            document.querySelectorAll('.content__label').forEach(el => el.style.maxHeight = null)

        } else {
            document.querySelectorAll('.label').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.content__label').forEach(el => el.style.maxHeight = null)
            content__label.style.maxHeight = content__label.scrollHeight + 'px';
            console.log(content__label.style.maxHeight)
        }
        el.classList.toggle('active');

    }))

$(function () {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});

$('.flowing-scroll').on('click', function () {
    let el = $(this);
    let dest = el.attr('href');
    if (dest !== undefined && dest !== '') {
        $('html').animate({
                scrollTop: $(dest).offset().top
            }, 500
        );
    }
    return false;
});

const swiperBlog = new Swiper('.photos__swiper', {
    loop: true,

    slidesPerView: 1,
    spaceBetween: 20,
});

const swiperPopDest = new Swiper('.popdest__swiper', {
    loop: true,

    slidesPerView: 1,
    spaceBetween: 20,
});

const swiperBlogArt = new Swiper('.blog__swiper', {
    loop: false,

    slidesPerView: 1,
    spaceBetween: 24,
});