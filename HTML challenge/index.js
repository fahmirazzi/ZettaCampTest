const fold = document.querySelector('.fold-button');
const comment = document.querySelector('.card__comment__profile');

fold.addEventListener('click', ()=>{
    fold.classList.toggle('fold-button-rotate')
    comment.classList.toggle('fold');
})