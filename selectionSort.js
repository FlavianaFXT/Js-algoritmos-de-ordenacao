const livros = require('./listaLivros')
const menorValor = require('./menorValor')

for (let atual = 0; atual < livros.length - 1; atual++){
    let menor = menorValor(livros, atual) //inteiro com o numero do indice onde vai estar o meu menor valor

    let livrosAtual = livros[atual];
    console.log('livro atual', livros[atual])
    console.log('posição atual', atual)
    let livrosMenorPreco = livros[menor];
    console.log('livro menor preço', livros[menor])

    livros[atual] = livrosMenorPreco;

    livros[menor] = livrosAtual;
}

console.log(livros);