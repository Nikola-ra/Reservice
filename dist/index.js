const addScroll = () => {
    if (window.scrollY > 30) {
        document.body.classList.add('scroll')
    } else {
        document.body.classList.remove('scroll')
    }
}

document.querySelector('#burger').addEventListener('click',()=>{
    document.body.classList.toggle('menu-open')
})

document.addEventListener('DOMContentLoaded',addScroll)
document.addEventListener('scroll',addScroll)
