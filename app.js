const projCard = document.querySelector('.project__card');
const imgBlack = document.querySelector('.project__card-img-black');
const projImg = document.querySelector('.project__card-img');
const projInfo = document.querySelector('.project__card-info');
const projWrap = document.querySelector('.project__card-img-wrap');
const link = document.querySelector('.project__card-link');


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





    // imgBlack.style.display = 'none';
    // projImg.style.display = 'none';
    // projImg.setAttribute('style', 'display: none')
    // projInfo.setAttribute('style', 'display: block')
//   if (this.style.display === "none") {
//     this.style.display = "block";
//   } else {
//     this.style.display = "none";
//   }