const btn = document.querySelectorAll('.customer__btn');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const cards = document.querySelectorAll('.card2');
const pages = document.querySelectorAll('.pages__link');

var t = 0;

next.addEventListener('click', (e) => {
    e.preventDefault();

    for (let q = 0; q < btn.length; q++) {
        const elemen = btn[q];
        elemen.classList.remove('active3');
        next.classList.add('active3');
    }

    if (t == 0) {
        t = 1;
        console.log(t);
    } else if (t == 1) {
        t = 2;
        console.log(t);
    } else if (t == 2) {
        t = 0;
        console.log(t);
    }

    for (let i = 0; i < cards.length; i++) {
        const elem = cards[i];
        elem.classList.remove('active');
        cards[t].classList.add('active');

        for (let w = 0; w < pages.length; w++) {
            const ele = pages[w];
            ele.classList.remove('active2');
            pages[t].classList.add('active2');
        }
    }

    block();
});

prev.addEventListener('click', (e) => {
    e.preventDefault();

    for (let q = 0; q < btn.length; q++) {
        const elemen = btn[q];

        elemen.classList.remove('active3');
        prev.classList.add('active3');
    }

    if (t == 0) {
        t = 2;
        console.log(t);
    } else if (t == 1) {
        t = 0;
        console.log(t);
    } else if (t == 2) {
        t = 1;
        console.log(t);
    }

    for (let i = 0; i < cards.length; i++) {
        const elem = cards[i];
        elem.classList.remove('active');
        cards[t].classList.add('active');

        for (let e = 0; e < pages.length; e++) {
            const el = pages[e];
            el.classList.remove('active2');
            pages[t].classList.add('active2');
        }
    }

    block();
});

function block() {
    next.disabled = true;
    prev.disabled = true;
    setTimeout(() => {
        next.disabled = false;
        prev.disabled = false;
    }, 500);
}
