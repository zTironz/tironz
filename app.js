const projCard = document.querySelector('.project__card');
const imgBlack = document.querySelector('.project__card-img-black');
const projImg = document.querySelector('.project__card-img');
const projInfo = document.querySelector('.project__card-info');
const projWrap = document.querySelector('.project__card-img-wrap');
const link = document.querySelector('.project__card-link');
const menuButton = document.querySelector('.header__menu-button-img');
const popupMenu = document.querySelector('.popup__menu');
const popupMenuClose = document.querySelector('.popup__menu-close');



projCard.addEventListener('click', function(event){
    if(event.target === imgBlack || event.target === projWrap) {
        console.log(event.target);
        console.log(this)
        imgBlack.classList.toggle('hidden');
        projImg.classList.toggle('hidden');
        projInfo.classList.toggle('hidden');
        link.classList.toggle('hidden');
    }
   
    
})
menuButton.addEventListener('click', function(event){
    popupMenu.classList.add('popup__menu_active');
    if(event.target == popupMenuClose) {
        popupMenu.classList.remove('popup__menu_active');
    }
})

popupMenuClose.addEventListener('click', function(){

        popupMenu.classList.remove('popup__menu_active');
    
})






    // imgBlack.style.display = 'none';
    // projImg.style.display = 'none';
    // projImg.setAttribute('style', 'display: none')
    // projInfo.setAttribute('style', 'display: block')
//   if (this.style.display === "none") {
//     this.style.display = "block";
//   } else {
//     this.style.display = "none";
//   }