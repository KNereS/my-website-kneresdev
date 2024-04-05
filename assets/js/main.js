const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const mobileMenu = document.getElementById("mobile");

openMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
})

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
})

const links = document.getElementsByName("mobileLinks");

arrLinks = [...links];

arrLinks.forEach(e => {
    e.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    })
});