class Route {
    constructor(pagina,icona) {
        this.pagina = pagina
        this.icona = icona
    }

    routeTo() {this.pagina.style.display = 'block'}
}

const dashboard = new Route(document.querySelector('#dashboard-p'),document.querySelector('#dashboard-i'))
const agenda = new Route(document.querySelector('#agenda-p'),document.querySelector('#agenda-i'))
const analitica = new Route(document.querySelector('#analitica-p'),document.querySelector('#analitica-i'))
const abbonamenti = new Route(document.querySelector('#abbonamenti-p'),document.querySelector('#abbonamenti-i'))
const recensioni = new Route(document.querySelector('#recensioni-p'),document.querySelector('#recensioni-i'))

const router = [dashboard,agenda,analitica,abbonamenti,recensioni]

const clearAllRoutes = (sections) => {
    sections.forEach((section)=>{
        section.pagina.style.display = 'none'
        section.icona.classList.remove('border-hover')
        section.icona.classList.add('border-not-hover')
    })
}

router.forEach((route) => {
    route.icona.addEventListener('click',()=>{
        clearAllRoutes(router)
        route.routeTo()
        document.body.classList.remove('menu-open')
        route.icona.classList.remove('border-not-hover')
        route.icona.classList.add('border-hover')
    })
})