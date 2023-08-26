const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: true,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: false,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

const verificarHabilitacao = (maiores) => {
    const habilitados = maiores.every((usuario) => {
        return usuario.habilitado === true
    })
    if (habilitados) {
        console.log('todos passaram no teste.')
    } else {
        console.log('todos precisam estar habilitados.')
    }

}

const maioresIdade = usuarios.filter((usuario) => {
    return usuario.idade >= 18
})

verificarHabilitacao(maioresIdade)

