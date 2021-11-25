const projCard = document.querySelectorAll('.project__card');
const imgBlack = document.querySelectorAll('.project__card-img-black');
const projImg = document.querySelectorAll('.project__card-img');
const projInfo = document.querySelectorAll('.project__card-info');
const projWrap = document.querySelectorAll('.project__card-img-wrap');
const link = document.querySelectorAll('.project__card-link');
const linkView = document.querySelectorAll('.project__card-linkView');
const menuButton = document.querySelector('.header__menu-button-img');
const popupMenu = document.querySelector('.popup__menu');
const popupMenuClose = document.querySelector('.popup__menu-close');


projCard.forEach((el,i) => el.addEventListener('click', function(event){
    if(event.target === imgBlack[i] || event.target === projWrap[i]) {
        imgBlack[i].classList.toggle('hidden');
        projImg[i].classList.toggle('hidden');
        projInfo[i].classList.toggle('hidden');
        link[i].classList.toggle('hidden');
        if(linkView[i])
        {linkView[i].classList.toggle('hidden');}
    }   
}))

menuButton.addEventListener('click', function(event){
    popupMenu.classList.add('popup__menu_active');
    if(event.target == popupMenuClose) {
        popupMenu.classList.remove('popup__menu_active');
    }
})

popupMenuClose.addEventListener('click', function(){
        popupMenu.classList.remove('popup__menu_active');
})
