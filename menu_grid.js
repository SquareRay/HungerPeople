const barButton = document.querySelectorAll('.menu-bar__ul__li');
const menuLine = document.querySelector('.menu-line-grid');
const menuCel = document.querySelectorAll('.menu-cel-grid');



// menu slider

barButton.forEach((elem, index) => {
    elem.onclick = () => {
        lineMove(index);
        classChange(index);

    }
});

function lineMove(index) {
    menuLine.style.left = -index * menuCel[index].offsetWidth + 16 + 'px';
};

function classChange(index) {
    barButton.forEach((el) => {
        el.classList.remove('menu-bar-li_active');
    });
    barButton[index].classList.add('menu-bar-li_active');
};

// specialities slider

const dot = document.querySelectorAll('.spec__dot');
const slider = document.querySelector('.block-slide');
const blockBox = document.querySelectorAll('.block-box');
const screen = document.querySelector('.block-screen');
let width;

function init() {
    width = screen.offsetWidth;
    slider.style.width = width * blockBox.length + 'px';
    blockBox.forEach(item => {
        item.style.width = width + 'px';
        // item.style.height = 'auto';
    });
}

window.addEventListener('resize', init);
init();

dot.forEach((elem, index) => {
    elem.onclick = () => {
        blockMove(index);
        blockClassChange(index);

    }

});

function blockMove(index) {
    slider.style.left = -index * width + 'px';
    // console.log(index);
    // console.log(width);
};

function blockClassChange(index) {
    dot.forEach((el) => {
        el.classList.remove('active-dot');
    });
    dot[index].classList.add('active-dot');
};

// specialities slider swipe
let count = 0;

screen.addEventListener('touchstart', handleTouchStart, false);
screen.addEventListener('touchmove', handleTouchMove, false);


let x1 = null;
let y1 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
    
};

function handleTouchMove(event) {
    if (!x1 || !y1) {
        return false;
    };

    let x2 = event.touches[0].clientX;
    let xDiff = x2 - x1;
    


    if (xDiff > 0) {
        if (count > 0) count--;

    }
    else {
        if (count < blockBox.length - 1) count++;

    };

    blockMove(count);
    blockClassChange(count);
    x1 = null;

};

// shadow menu

const menuShadow = document.querySelector('.menu-shadow');

const mobMenuBtn = document.querySelector('.nav__lines__btn');

mobMenuBtn.addEventListener('click', heyHey);

menuShadow.onclick = () => {
    menuShadow.style.display = 'none';
}

function heyHey() {
    menuShadow.style.display = 'block';
}