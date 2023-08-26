const palavras = ["arroz", "feijão", "carne", "macarrão"]

const mensagem = (listaRevisada) => {
    if (listaRevisada) {
        console.log("revise sua lista, joão. possui bebida com venda proibida!")
    } else {
        console.log("tudo certo, vamos as compras!")
    }
}

const revisarLista = palavras.some((palavra) => {
    return palavra === "cerveja" || palavra === "vodka"

})

mensagem(revisarLista)