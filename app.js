// Selecionando o elemento HTML onde as cartas serão inseridas
const board = document.querySelector(".table-board")

// Selecionado o elemento HTML onde a pontuação será inserida
const score = document.querySelector(".table-score")

// Selecionando o elemento HTML onde o jogo será reiniciado
const btnRestart = document.querySelector("#btn-restart")

// Pares de cartas iniciais
let initialPairs = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]

// Pares de cartas selecionadas
let selectedCards = []

// Contador da pontuação
let scoreCount = 0

// Carregando o jogo
const loadGame = () => {
    scoreCount = 0
    selectedCards = []

    const shufflePairs = shuffle(initialPairs)

    while(board.firstChild) {
        board.firstChild.remove()
    }

    createCards(shufflePairs)
}

// Embaralhando as cartas
const shuffle = (pairs) => {
    for(let i = pairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [pairs[i], pairs[j]] = [pairs[j], pairs[i]]
    }

    return pairs
}

// Criando as cartas no tabuleiro de acordo com o número de pares iniciais
const createCards = (pairs) => {
    pairs.forEach(pair => {
        const card = document.createElement("div")

        card.className = "table-board-card"
        card.dataset.value = pair
        card.innerText = pair

        card.addEventListener("click", compareCards)

        board.append(card)
    })
}

// Verifica se as cartas selecionadas são iguais ou diferentes
const compareCards = (value) => {
    const clickedCard = value.target

    if(clickedCard.classList.contains('selected-card')) {
        console.log("Esta carta já foi selecionada. Selecione outra carta")

        return
    }

    // Adiciona um estilo a carta clicada
    clickedCard.classList.toggle('selected-card')

    // Adiciona a carta selecionada ao array
    selectedCards.push(clickedCard)

    if(selectedCards.length > 1) {
        const [firstCard, secondCard] = [...selectedCards]

        console.log("Primeira carta = " + firstCard.dataset.value)
        console.log("Segunda carta = " + secondCard.dataset.value)

        if(firstCard.dataset.value === secondCard.dataset.value) {
            console.log("As cartas são iguais!")

            // Quando as cartas forem iguais, aumenta a pontuação
            scoreCount = scoreCount + 1

            // Exibe a pontuação quando as cartas forem iguais
            score.innerText = `Pontuação: ${scoreCount}`

            // Limpa o array
            selectedCards = []

        } else {
            console.log("As cartas não são iguais!")
            
            // Limpa o array
            selectedCards = []

            // Remove o estilo das cartas selecionadas após 1 segundo
            setTimeout(() => {
                firstCard.classList.toggle('selected-card')
                secondCard.classList.toggle('selected-card')
            },1000)
        }
    }
}

loadGame()

btnRestart.addEventListener("click", loadGame)