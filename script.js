let stars = document.getElementById('stars');
let meteorid = document.getElementById('jupiter');
let rocket = document.getElementById('earth')
let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let saturn =document.getElementById('saturn');
let astro = document.getElementById('astro')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    earth.style.left = value * -0.5 + 'px';
    text.style.marginBottom = value * 0.5 + 'px';
    text2.style.marginBottom = value * 0.25 + 'px';
    jupiter.style.top = value * -0.5 + 'px';
    saturn.style.left= value * -0.25 + 'px';
    astro.style.left = value * -0.25 + 'px';
});

