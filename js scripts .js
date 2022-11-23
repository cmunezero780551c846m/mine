let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classlist.toggle('fa-times'); 
    navbar.classlist.toggle('active');

};
window.onscroll = () => {
    menu.classlist.remove('fa-times'); 
    navbar.classlist.remove('active');

};
