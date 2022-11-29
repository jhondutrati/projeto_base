let scanf = require('scanf');

const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônico",
        valor: 1999.99
    },
    {
        nome: "Impressora",
        categoria: "Eletrônico",
        valor: 999.99
    },
    {
        nome: "Caneta BIC",
        categoria: "Escolar",
        valor: 0.50
    },
    {
        nome: "Lapiseira Pentel",
        categoria: "Escolar",
        valor: 7.50
    },
]


function listar (value){
    if (value.categoria == "Eletrônico")
    return value;
}
var listar = produtos.filter(listar);
listar.forEach(listar => { 
    console.log(listar);
})

function valor (value){
    if (value.valor >= 0 && value.valor <= 1000) 
    return value;
    else {
        console.log("fora da faixa selecionada")
    }
}
var valor = produtos.filter(valor);
valor.forEach(valor => { 
    console.log(valor);
})


