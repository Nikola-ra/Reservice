const menuIcons = document.querySelectorAll('.burger')

menuIcons.forEach((menuIcon) => {
    menuIcon.addEventListener('click',()=>{
        document.body.classList.toggle('menu-open')
    })
})

const addScroll = () => {
    if (window.scrollY > 30) {
        document.body.classList.add('scroll')
    } else {
        document.body.classList.remove('scroll')
    }
}

document.addEventListener('DOMContentLoaded',addScroll)
document.addEventListener('scroll',addScroll)