const livros = require('./listaLivros')

function menorValor(arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial;

    for(let atual = posicaoInicial; atual < arrProdutos.length; atual ++){
        if(arrProdutos[atual] < arrProdutos[maisBarato]){
            maisBarato = atual
        }
    }
    return maisBarato;
}

module.exports = menorValor;


