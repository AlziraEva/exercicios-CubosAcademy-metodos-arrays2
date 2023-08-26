const palavras = ["livro", "sol", "carro"]

const verificar = (quantidadeCaracteres) => {
    if (quantidadeCaracteres) {
        console.log('array validado.')
    } else {
        console.log('existe palavra inválida.')
    }
}

const quantidadeCaracteres = palavras.every((palavra) => {
    return palavra.length <= 5

})

verificar(quantidadeCaracteres)

