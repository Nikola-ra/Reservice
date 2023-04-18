/* SLIDER */

class Slider {

    constructor(frecciaSinistra,frecciaDestra,nodes,contatore) {
        this.frecciaSinistra = frecciaSinistra
        this.frecciaDestra = frecciaDestra
        this.nodes = nodes
        this.contatore = contatore
    }

    reset() {
        for (let i = 0; i < this.nodes.length; i++) {this.nodes[i].style.display = "none"}
    }

    startSlide() {
        this.reset()
        this.nodes[0].style.display = "block"
    }

    slideLeft() {
        this.reset()
        this.nodes[this.contatore - 1].style.display = "block"
        this.contatore--
    }

    slideRight() {
        this.reset()
        this.nodes[this.contatore + 1].style.display = "block"
        this.contatore++
    }

    checkLunghezzaLeft() {
        if (this.contatore === 0) {this.contatore = this.nodes.length}
    }

    checkLunghezzaRight() {
        if (this.contatore === this.nodes.length - 1) {this.contatore = -1}
    }

}

const sliderGiorni = new Slider(
    document.querySelector("#arrow-left"),
    document.querySelector("#arrow-right"),
    document.querySelectorAll('.slide'),
    0
)

const sliderOre = new Slider(
    document.querySelector("#arrow-left2"),
    document.querySelector("#arrow-right2"),
    document.querySelectorAll('.slide2'),
    0
)

sliderGiorni.frecciaSinistra.addEventListener('click',()=>{
    sliderGiorni.checkLunghezzaLeft()
    sliderGiorni.slideLeft()
})

sliderGiorni.frecciaDestra.addEventListener('click',()=>{
    sliderGiorni.checkLunghezzaRight()
    sliderGiorni.slideRight()
})

sliderOre.frecciaSinistra.addEventListener('click',()=>{
    sliderOre.checkLunghezzaLeft()
    sliderOre.slideLeft()
})

sliderOre.frecciaDestra.addEventListener('click',()=>{
    sliderOre.checkLunghezzaRight()
    sliderOre.slideRight()
})

sliderGiorni.startSlide()
sliderOre.startSlide()


/* ROUTING GIORNI/ORE */
class Route {
    constructor(pagina,cta) {
        this.pagina = pagina
        this.cta = cta
    }

    routeTo() {this.pagina.style.display = 'flex'}
}

const clearAllRoutes = (sections) => {
    sections.forEach((section)=>{
        section.pagina.style.display = 'none'
    })
}

const giorni = new Route(document.querySelector('#sezione-giorni'),document.querySelector('#pulsante-ore'))
const ore = new Route(document.querySelector('#sezione-ore'),document.querySelector('#pulsante-giorni'))
const conferma = new Route(document.querySelector('#sezione-conferma'),document.querySelector('#pulsante-conferma'))

const router = [giorni,ore,conferma]

router.forEach((route) => {
    route.cta.addEventListener('click',()=>{
        clearAllRoutes(router)
        route.routeTo()
    })
})