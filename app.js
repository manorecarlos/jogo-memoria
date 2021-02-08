const board = document.querySelector(".table-board")

let pairs = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]

pairs.forEach(pair => {
    const card = document.createElement("div")

    card.className = "table-board-card"
    card.innerText = pair

    card.addEventListener("click", SameCards)

    board.append(card)
})

let value1
let value2

function SameCards(card) {
    if(value1 > 0) {
        value2 = card.target.innerText
    } else {
        value1 = card.target.innerText
    }

    if(value1 == value2) {
        console.log("Formou um par")
        value1 = 0
        value2 = 0
    } else {
        console.log("Não formou um par")
        value1 = 0
        value2 = 0
    }

    console.log("O primeiro valor é ", value1)
    console.log("O segundo valor é ", value2)
}


// 1h21




