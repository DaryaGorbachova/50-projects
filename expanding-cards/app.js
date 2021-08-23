const photo = document.querySelectorAll('.photo');

photo.forEach(photo => {
    photo.addEventListener('click', () => {
    removeActive();
    photo.classList.add('active');
    })
})

function removeActive () {
    photo.forEach(photo => {
    photo.classList.remove('active');
})
}

