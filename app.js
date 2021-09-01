const projCard = document.querySelectorAll('.project__card');
const imgBlack = document.querySelectorAll('.project__card-img-black');
const projImg = document.querySelectorAll('.project__card-img');
const projInfo = document.querySelectorAll('.project__card-info');
const projWrap = document.querySelectorAll('.project__card-img-wrap');
const link = document.querySelectorAll('.project__card-link');
const menuButton = document.querySelector('.header__menu-button-img');
const popupMenu = document.querySelector('.popup__menu');
const popupMenuClose = document.querySelector('.popup__menu-close');

console.log(projCard)

projCard.forEach((el,i) => el.addEventListener('click', function(event){
    if(event.target === imgBlack[i] || event.target === projWrap[i]) {
        console.log(event.target);
        console.log(this)
        imgBlack[i].classList.toggle('hidden');
        projImg[i].classList.toggle('hidden');
        projInfo[i].classList.toggle('hidden');
        link[i].classList.toggle('hidden');
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






    // imgBlack.style.display = 'none';
    // projImg.style.display = 'none';
    // projImg.setAttribute('style', 'display: none')
    // projInfo.setAttribute('style', 'display: block')
//   if (this.style.display === "none") {
//     this.style.display = "block";
//   } else {
//     this.style.display = "none";
//   }