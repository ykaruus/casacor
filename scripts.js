const $menu = document.getElementById('menu');
const $btn = document.getElementById('btn');
const $btn_close = document.getElementById('btnClose')

$btn.addEventListener('click', () => {
    if ($menu.style.left = '-450px') {
        $menu.style.left = '0px';
    }
})

$btn_close.addEventListener('click', () => {
    $menu.style.left = '-450px'
})