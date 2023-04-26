class Route {
    constructor(target,param){
        this.target = target
        this.param = param
    }
}

const clearNone = (pagine) => {
    for (let i = 0; i < pagine.length; i++) {
        pagine[i].style.display = 'none'
    }
}

const urlParams = new URLSearchParams(window.location.search)

const dashboard = document.querySelector('#dashboard-p')
const agenda = document.querySelector('#agenda-p')
const analitica = document.querySelector('#analitica-p')
const abbonamenti = document.querySelector('#abbonamenti-p')
const recensioni = document.querySelector('#recensioni-p')
const dipendenti = document.querySelector('#dipendenti-p')

const dashboardI = new Route(document.querySelector('#dashboard-i'),'dashboard')
const agendaI = new Route(document.querySelector('#agenda-i'),'agenda')
const analiticaI = new Route(document.querySelector('#analitica-i'),'analitica')
const abbonamentiI = new Route(document.querySelector('#abbonamenti-i'),'abbonamenti')
const recensioniI = new Route(document.querySelector('#recensioni-i'),'recensioni')
const dipendentiI = new Route(document.querySelector('#dipendenti-i'),'dipendenti')

const icone = [dashboardI,agendaI,analiticaI,abbonamentiI,recensioniI,dipendentiI]

addEventListener('DOMContentLoaded',()=>{
    console.log(myParam)
    switch (myParam) {
        
        case dashboardI.param:
            document.body.classList.remove('menu-open')
            dashboardI.target.classList.remove('border-not-hover')
            dashboardI.target.classList.add('border-hover')
            break
        case agendaI.param:
            document.body.classList.remove('menu-open')
            agendaI.target.classList.remove('border-not-hover')
            agendaI.target.classList.add('border-hover') 
            break
        case analiticaI.param:
            document.body.classList.remove('menu-open')
            analiticaI.target.classList.remove('border-not-hover')
            analiticaI.target.classList.add('border-hover')
            break
        case abbonamentiI.param:
            document.body.classList.remove('menu-open')
            abbonamentiI.target.classList.remove('border-not-hover')
            abbonamentiI.target.classList.add('border-hover')
            break
        case recensioniI.param:
            document.body.classList.remove('menu-open')
            recensioniI.target.classList.remove('border-not-hover')
            recensioniI.target.classList.add('border-hover')
            break
        case dipendentiI.param:
            document.body.classList.remove('menu-open')
            dipendentiI.target.classList.remove('border-not-hover')
            dipendentiI.target.classList.add('border-hover')
            break
        default:
            document.body.classList.remove('menu-open')
            dashboardI.target.classList.remove('border-not-hover')
            dashboardI.target.classList.add('border-hover')
            break
    }
})

icone.forEach((link) => {
    link.target.addEventListener('click',()=>{window.location.href = `areapriv.html?L=${link.param}`})
})

const pagine = [dashboard,agenda,analitica,abbonamenti,recensioni,dipendenti]

const myParam = urlParams.get('L')

switch (myParam) {
    case dashboardI.param:
        clearNone(pagine)
        dashboard.style.display = 'block'
        break
    case agendaI.param:
        clearNone(pagine)
        agenda.style.display = 'block'
        break
    case analiticaI.param:
        clearNone(pagine)
        analitica.style.display = 'block'
        break
    case abbonamentiI.param:
        clearNone(pagine)
        abbonamenti.style.display = 'block'
        break
    case recensioniI.param:
        clearNone(pagine)
        recensioni.style.display = 'block'
        break
    case dipendentiI.param:
        clearNone(pagine)
        dipendenti.style.display = 'block'
        break
    default:
        clearNone(pagine)
        dashboard.style.display = 'block'
        break
}
