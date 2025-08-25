const areaJogo = document.querySelector('#area-jogo')
const pontosDisplay = document.querySelector('#pontos')
const listaHistorico = document.querySelector('#lista-historico')

let pontos = 0
const emojis = ['👌', '🤣', '🥺', '😁', '😒', '🙊']
const mensagensZoeiras = [
    'Tchê Tchê! 👏',
    'Matei mais um neguinho! 🔫',
    'Quero pica! 🥺',
    'Mais uma bala perdida na favela... 😁',
    'Esfrega na minha cara japones! 🐸',
    'Mateus Ribeiro Lopes 🐵🐵🐵'
];

function adicionarHistorico(texto) {
    const li = document.createElement('li')
    const horario = new Date().toLocaleTimeString('pt-BR')
    li.textContent  = `${horario} - ${texto}`
    li.classList.add('zoeiro')
    listaHistorico.appendChild(li)

    if(listaHistorico.children.length > 10) {
        listaHistorico.removeChild(listaHistorico.firstChild)
    }
}

function criarEmoji() {
    const emoji = document.createElement('div')
    emoji.classList.add('emoji')

    const indiceAleatorio = Math.floor(Math.random() * emojis.length)
    emoji.textContent = emojis[indiceAleatorio]

    const maxX = areaJogo.offsetWidth - 50
    const maxY = areaJogo.offsetHeight - 50

    emoji.style.left = `${Math.random() * maxX}px`
    emoji.style.top = `${Math.random() * maxY}px`
}