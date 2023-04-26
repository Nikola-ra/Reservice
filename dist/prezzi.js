/* ABBONAMENTI */

const clearInnerElements = (element) => {
    while (element.firstChild) {
        element.removeChild(element.lastChild)
      }
}

const wrapperAbbonamenti = document.querySelector('.abbonamenti-wrapper')

const prezzi = {
    "mese": {
        "tipo": "MENSILE",
        "standard": 20,
        "premium": 40
    },
    "3 mesi": {
        "tipo": "3 MESI",
        "standard": 30,
        "premium": 60
    },
    "anno": {
        "tipo": "ANNUALE",
        "standard": 80,
        "premium": 105
    }
}

const abbonamentiStandard = () => {
    bottonePremium.classList.remove('bg-sky-500')
    bottonePremium.classList.add('text-gray-600')
    bottonePremium.classList.remove('text-white')
    bottoneStandard.classList.add('bg-sky-500')
    bottoneStandard.classList.remove('text-gray-600')
    bottoneStandard.classList.add('text-white')
    let tmpStr = ''
    for (let i = 0; i < Object.keys(prezzi).length; i++) {
        tmpStr += `<div class="p-4 xl:w-1/3 w-full sm:px-32 md:px-40 px-4 min-w-min xl:px-4">
            <div class="h-full p-6 rounded-lg shadow-lg bg-zinc-50 flex flex-col relative overflow-hidden">
            <h2 class="text-sm tracking-widest mb-1">${Object.values(prezzi)[i].tipo}</h2>
            <h1 class="text-5xl text-gray-900 flex items-center pb-4 mb-4 border-b border-gray-200">
                <span class="text-5xl text-slate-700 font-semibold">€${Object.values(prezzi)[i]["standard"]}</span>
                <span class="text-lg ml-1 text-gray-500">/${Object.keys(prezzi)[i]}</span>
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
            <a href="./areapriv.html">
            <button
                class="flex items-center mt-auto text-white bg-sky-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-sky-600 rounded">Conferma
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
            </a>
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
        tmpStr += `<div class="p-4 xl:w-1/3 w-full sm:px-32 md:px-40 px-4 min-w-min xl:px-4">
            <div class="h-full p-6 rounded-lg bg-zinc-50 drop-shadow-lg flex flex-col relative overflow-hidden">
            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">${Object.values(prezzi)[i].tipo}</h2>
            <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                <span class="text-5xl text-slate-700 font-semibold">€${Object.values(prezzi)[i]["premium"]}</span>
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
            <a href="./areapriv.html">
                <button
                    class="flex items-center mt-auto text-white bg-sky-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-sky-600 rounded">Conferma
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </a>
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
