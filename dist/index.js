const addScroll = () => {
    if (window.scrollY > 30) {
        document.body.classList.add('scroll')
    } else {
        document.body.classList.remove('scroll')
    }
}

angolo = 0
const animateBackground = ()=>{
    angolo += 1
    if (angolo == 360){angolo = 0}
    document.querySelector("#mainSegment").style.background = 'linear-gradient('+ angolo + 'deg, rgba(98,142,224,1) 0%, rgba(92,204,237,1) 100%)'
}
setInterval(animateBackground,100)

document.querySelector('#burger').addEventListener('click',()=>{document.body.classList.toggle('menu-open')})

document.addEventListener('DOMContentLoaded',addScroll)
document.addEventListener('scroll',addScroll)