
const hamburger = document.getElementById('hamburger')
const closeButtn = document.getElementById('close')
const mobileNav = document.getElementById('mobileNav')

hamburger.addEventListener('click', () => { 
    mobileNav.style.display = 'block'
})

closeButtn.addEventListener('click', () => {
    mobileNav.style.display = 'none'
})