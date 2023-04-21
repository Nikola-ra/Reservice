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

sliderGiorni.frecciaSinistra.addEventListener('click',()=>{
    sliderGiorni.checkLunghezzaLeft()
    sliderGiorni.slideLeft()
})

sliderGiorni.frecciaDestra.addEventListener('click',()=>{
    sliderGiorni.checkLunghezzaRight()
    sliderGiorni.slideRight()
})

sliderGiorni.startSlide()