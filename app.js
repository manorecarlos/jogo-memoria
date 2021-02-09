// Selecionando o elemento HTML onde as cartas serão inseridas
const board = document.querySelector(".table-board")

// Pares de cartas iniciais
let pairs = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]

// Pares de cartas selecionadas
let selectedCards = []

// Criando as cartas no tabuleiro de acordo com o número de pares iniciais
pairs.forEach(pair => {
    const card = document.createElement("div")

    card.className = "table-board-card"
    card.dataset.value = pair
    card.innerText = pair

    card.addEventListener("click", compareCards)

    board.append(card)
})

// Verifica se as cartas selecionadas são iguais ou diferentes
function compareCards(value) {
    const clickedCard = value.target

    if(clickedCard.classList.contains('selected-card')) {
        console.log("Esta carta já foi selecionada. Selecione outra carta")

        return
    }

    // Adiciona um estilo a carta clicada
    clickedCard.classList.add('selected-card')

    // Adiciona a carta selecionada ao array
    selectedCards.push(clickedCard)

    if(selectedCards.length > 1) {
        const [firstCard, secondCard] = [...selectedCards]

        console.log("Primeira carta = " + firstCard.dataset.value)
        console.log("Segunda carta = " + secondCard.dataset.value)

        if(firstCard.dataset.value === secondCard.dataset.value) {
            console.log("As cartas são iguais!")

            // Limpa o array
            selectedCards = []
        } else {
            console.log("As cartas não são iguais!")
            
            // Limpa o array
            selectedCards = []

            // Remove o estilo das cartas selecionadas após 1 segundo
            setTimeout(() => {
                firstCard.classList.remove('selected-card')
                secondCard.classList.remove('selected-card')
            },1000)
        }
    }
}