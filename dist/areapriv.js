const clearInnerElements = (element) => {
    while (element.firstChild) {
        element.removeChild(element.lastChild)
      }
}

/* ROUTING DEL MENU */

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


/* ABBONAMENTI */

const wrapperAbbonamenti = document.querySelector('.abbonamenti-wrapper')

const prezzi = {
    "mo": {
        "tipo": "MENSILE",
        "standard": 20,
        "premium": 40
    },
    "3-mo": {
        "tipo": "3 MESI",
        "standard": 30,
        "premium": 60
    },
    "6-mo": {
        "tipo": "6 MESI",
        "standard": 45,
        "premium": 75
    },
    "y": {
        "tipo": "ANNUALE",
        "standard": 80,
        "premium": 105
    }
}

const pianoAttivo = '<span class="bg-sky-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">PIANO ATTIVO</span>'

const abbonamentiStandard = () => {
    bottonePremium.classList.remove('bg-sky-500')
    bottonePremium.classList.add('text-gray-600')
    bottonePremium.classList.remove('text-white')
    bottoneStandard.classList.add('bg-sky-500')
    bottoneStandard.classList.remove('text-gray-600')
    bottoneStandard.classList.add('text-white')
    let tmpStr = ''
    for (let i = 0; i < Object.keys(prezzi).length; i++) {
        tmpStr += `<div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-sky-500 flex flex-col relative overflow-hidden">
            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">${Object.values(prezzi)[i].tipo}</h2>
            <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>€${Object.values(prezzi)[i]["standard"]}</span>
                <span class="text-lg ml-1 font-normal text-gray-500">/${Object.keys(prezzi)[i]}</span>
            </h1>
            <p class="flex items-center text-gray-600 mb-2">
                <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-lime-600 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                    class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>Maggiore visibilità
            </p>
            <p class="flex items-center text-gray-600 mb-2">
                <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                    class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>Posto tra le prime pagine
            </p>
            <p class="flex items-center text-gray-600 mb-2">
                <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                    class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>Assistenza clienti
            </p>
            <p class="flex items-center text-gray-600 mb-6">
                <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                    class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>Primo posto per categoria
            </p>
            <button
                class="flex items-center mt-auto text-white bg-sky-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-sky-600 rounded">Conferma
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
            </div>
        </div>`}
        return tmpStr
}
const abbonamentiPremium = () => {
    bottoneStandard.classList.remove('bg-sky-500')
    bottoneStandard.classList.add('text-gray-600')
    bottoneStandard.classList.remove('text-white')
    bottonePremium.classList.add('bg-sky-500')
    bottonePremium.classList.remove('text-gray-600')
    bottonePremium.classList.add('text-white')
    let tmpStr = ''
    for (let i = 0; i < Object.keys(prezzi).length; i++) { 
        tmpStr += `<div class="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div class="h-full p-6 rounded-lg border-2 border-sky-500 flex flex-col relative overflow-hidden">
            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">${Object.values(prezzi)[i].tipo}</h2>
            <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span>€${Object.values(prezzi)[i]["premium"]}</span>
                <span class="text-lg ml-1 font-normal text-gray-500">/${Object.keys(prezzi)[i]}</span>
            </h1>
            <p class="flex items-center text-gray-600 mb-2">
                <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-lime-600 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                    class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>Maggiore visibilità
            </p>
            <p class="flex items-center text-gray-600 mb-2">
                <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-lime-600 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                    class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>Posto tra le prime pagine
            </p>
            <p class="flex items-center text-gray-600 mb-2">
                <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-lime-600 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                    class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>Assistenza clienti
            </p>
            <p class="flex items-center text-gray-600 mb-6">
                <span
                class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-lime-600 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                    class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                </span>Primo posto per categoria
            </p>
            <button
                class="flex items-center mt-auto text-white bg-sky-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-sky-600 rounded">Conferma
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
            </div>
        </div>`}

    return tmpStr
}

const cambiaAbbonamenti = (funzioneScelta) => {
    let stringaDaCaricare = funzioneScelta
    clearInnerElements(wrapperAbbonamenti)
    wrapperAbbonamenti.insertAdjacentHTML('beforeend',stringaDaCaricare)
}

addEventListener('DOMContentLoaded',()=>{cambiaAbbonamenti(abbonamentiStandard())})

const bottoneStandard = document.querySelector('#bottone-standard')
const bottonePremium = document.querySelector('#bottone-premium')
bottoneStandard.addEventListener('click',()=>{cambiaAbbonamenti(abbonamentiStandard())})
bottonePremium.addEventListener('click',()=>{cambiaAbbonamenti(abbonamentiPremium())})