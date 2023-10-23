const $menu = document.getElementById('menu');
const $btn = document.getElementById('btn');
const $btn_close = document.getElementById('btnClose')
const $toggle_class = document.querySelector('.menu-item')
let state = false

$btn.addEventListener('click', () => {
    if ($menu.style.left = '-450px') {
        $menu.style.left = '0px';
    }
})

$btn_close.addEventListener('click', () => {
    $menu.style.left = '-450px'
})


$toggle_class.addEventListener('click', () => {
    if(state == false) {
        state = true
    } else {
        state = false
    }
})