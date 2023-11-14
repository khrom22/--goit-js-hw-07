import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery')
list.insertAdjacentHTML('beforeend', createMarkup())

function createMarkup(galeryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        `<li class ="gallery__item">  <a class="gallery__link" href="${original}"><img class = "gallery__image " data-source = ${original} src = ${preview} alt = ${description}/></a></li>`
    ).join('')
}
list.addEventListener('click', handleClick)

function handleClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        return
    }
    const urlOrigin = event.target.dataset.source;

    const instance = basicLightbox.create(
        `<img src="${urlOrigin}" width="auto" height="auto"/>`
        ,
        {
            onShow: (instance) => {
                window.addEventListener('keydown', pressEsc);
            },
            onClose: (instance) => {
                window.removeEventListener('keydown', pressEsc);
            },
        }
    )
    instance.show();
    console.log(instance.visible())
    function pressEsc(event) {
        const escDown = 'Escape';
        const isEscDown = event.code === escDown;
        if (!isEscDown) return;
        instance.close();
    }
}


