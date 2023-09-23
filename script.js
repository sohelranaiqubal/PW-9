//change and icon (dark mode)
const mode = document.querySelector('.mode');
const icon = document.querySelector('.bx-moon');
const garuda = document.querySelector('.grauda-silhoutte')

mode.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
        garuda.classList.add('garuda-dark');
    }
    else{
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
        garuda.classList.remove('garuda-dark');
    }
});

// change toggle-btn navbar

const bars = document.querySelector('.toggle-btn');
const navbar = document.querySelector('header .navbar');

bars.addEventListener('click',function(){
    if (bars.classList.contains('bx-menu')) {
        bars.classList.remove('bx-menu');
        bars.classList.add('bx-x');
        navbar.classList.add('slide');
    }
    else{
        bars.classList.remove('bx-x');
        bars.classList.add('bx-menu');
        navbar.classList.remove('slide');
    }
})