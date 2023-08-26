const numeros = [0, 122, 4, 6, 8, 7]

const mensagem = (verificacao) => {
    if (verificacao) {
        console.log("array válido.")
    } else {
        console.log("array inválido.")
    }

}

const verificarPares = numeros.every((numero) => {
    return numero % 2 === 0

})

mensagem(verificarPares)