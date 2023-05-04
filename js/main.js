const container = document.querySelector('.container');
const popup = document.querySelector('.popup');
const btn = document.querySelector('.btn');
const close = document.querySelector('.close');


btn.addEventListener('click', () => {
    container.classList.add('hide');
    popup.classList.remove('hidden');
});
close.addEventListener('click', () => {
    container.classList.remove('hide');
    popup.classList.add('hidden');
})