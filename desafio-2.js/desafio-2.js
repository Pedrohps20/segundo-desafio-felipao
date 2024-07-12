let vitorias = 10
let derrotas = 4

function ranking(){
    let rank = vitorias-derrotas
    if (rank <= 10)
        console.log("Ferro")
    else if (rank > 10 && rank <= 20)
        console.log("Bronze")
    else if (rank > 20 && rank <= 50)
        console.log("Prata")
    else if (rank > 50 && rank <= 80)
        console.log("Ouro")
    else if (rank > 80 && rank <= 90)
        console.log("Diamanete")
    else if (rank > 90 && rank <= 100)
        console.log("Lendário")
    else console.log("Imortal")
}

ranking()