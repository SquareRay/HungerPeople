const barButton = document.querySelectorAll('.menu-bar__ul__li');
const menuLine = document.querySelector('.menu-line-grid');
const menuCel = document.querySelectorAll('.menu-cel-grid');

barButton.forEach((elem, index) => {
    elem.onclick = () => {
        lineMove(index);
        classChange(index);

    }
})

function lineMove(index) {
    menuLine.style.left = -index * menuCel[index].offsetWidth + 16 + 'px';
    console.log(menuCel[index].offsetWidth);
}

function classChange(index) {
    barButton.forEach((el) => {
        el.classList.remove('menu-bar-li_active');
    });
    barButton[index].classList.add('menu-bar-li_active');
}

console.log(menuCel[0].offsetWidth);