const barButton = document.querySelectorAll('.bar_ul_li');
const menuTank = document.querySelector('.menu_tank');

barButton.forEach((elem, index) => {
    elem.onclick = () => {
        menuTank.style.left = -index * 250 + 'px';
    }
})

