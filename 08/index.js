const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const novoArray = frutas.map((fruta) => {

    return `${frutas.indexOf(fruta)} - ${fruta[0].toUpperCase()}${fruta.slice(1).toLowerCase()} `


})
console.log(novoArray)