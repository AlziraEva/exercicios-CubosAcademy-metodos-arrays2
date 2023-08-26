const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

const programadoresMaioresIdade = pessoas.filter((pessoa) => {
    return pessoa.profissao === "Programador" && pessoa.idade > 20
})
console.log(programadoresMaioresIdade)


const jornalistasMaioresIdade = pessoas.filter((pessoa) => {
    return pessoa.profissao === "Jornalista" && pessoa.idade > 30
})
console.log(jornalistasMaioresIdade)

const programadoresJovens = pessoas.filter((pessoa) => {
    return pessoa.idade <= 29 && pessoa.profissao === "Programador"
})
console.log(programadoresJovens)

const jornalistaJovens = pessoas.filter((pessoa) => {
    return pessoa.idade <= 29 && pessoa.profissao === "Jornalista"
})
console.log(programadoresJovens)
