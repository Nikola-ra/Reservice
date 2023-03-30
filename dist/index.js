const addScroll = () => {
    if (window.scrollY > 30) {
        document.body.classList.add('scroll')
    } else {
        document.body.classList.remove('scroll')
    }
}

// const addScrollImage = () => {
//     if (window.scrollY > 350 && window.scrollY < 900) {
//         document.body.classList.add('scroll_image')
//     } else {
//         document.body.classList.remove('scroll_image')
//     }
// }

document.querySelector('#burger').addEventListener('click',()=>{
    document.body.classList.toggle('menu-open')
})

document.addEventListener('DOMContentLoaded',()=>{
    addScroll()
    // addScrollImage()
})

document.addEventListener('scroll',()=>{
    addScroll()
    // addScrollImage()
})