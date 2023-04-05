const menuIcons = document.querySelectorAll('.burger')

menuIcons.forEach((menuIcon) => {
    menuIcon.addEventListener('click',()=>{
        document.body.classList.toggle('menu-open')
    })
})