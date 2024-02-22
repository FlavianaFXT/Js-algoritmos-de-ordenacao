const livros = require('./listaLivros')

function insertionSort(lista){

    for (let atual = 0; atual < lista.length; atual++){ //o let atual pode ser = a 1 e tirariamos do while a primeira condição de analise > 0
        let analise = atual;
        while(analise > 0 && lista[analise].preco < lista[analise-1].preco){
            let itemAnalise = lista[analise];
           
            let itemAnterior = lista[analise-1];
        
            lista[analise] = itemAnterior;
        
            lista[analise-1] = itemAnalise;

            analise -- //ele vai analisando e vai voltando
        }
    }
    console.log(lista);
}

insertionSort(livros);