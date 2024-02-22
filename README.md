# Js-algoritmos-de-ordenacao (Prof Juliana Amoazei)

# APRENDIZADOS

Algoritmos são sequências finitas de passos lógicos para a resolução de um problema e que podem representar tanto problemas comuns em programação quanto qualquer situação que envolva passos lógicos;

Pensar de forma algorítmica não se resume a código e nem precisa necessariamente começar pelo código em si;

Como traduzir os passos de um algoritmo para a linguagem de programação que escolhemos trabalhar (no caso, JavaScript), através de estruturas fundamentais da linguagem como variáveis, laços de repetição e condicionais.

Da mesma forma que criamos “algoritmos mentais” para encontrar o menor valor de uma lista, fazemos um processo parecido para ordenar uma lista;

Como podemos abstrair os passos que fazemos “de cabeça” para código, observando a sequência dos passos utilizados;

Para resolver um problema, muitas vezes utilizamos mais de um algoritmo; para resolver isso, criamos a função menorValor() para reaproveitar o código junto com o Selection Sort.

Um problema pode ser resolvido com algoritmos diferentes, por exemplo, um problema de ordenação resolvido com Selection Sort ou Insertion Sort;

Apesar do resultado final ser o mesmo, o processo (ou passos lógicos) de cada um dos algoritmos é diferente;

A criar funções para melhor reaproveitamento de código, como para fazer o Insertion Sort receber uma lista de produtos diversos;

Praticar mais com testes de mesa e ver o código funcionando passo a passo, e como isso pode nos ajudar a entender melhor como o código de um algoritmo funciona.

Entender a complexidade de um algoritmo é essencial para que nossos programas funcionem da melhor forma possível;

Analisamos esta complexidade observando as operações feitas pelo código e transformando essas operações em números;
 
Performance e tempo impactam em custos e também na experiência do usuário do programa, pois um programa pode ficar muito lento dependendo da quantidade de dados que precisam ser processados;

Analisar os dados de performance e comparar os números para verificar a performance de um algoritmo com relação a quantidade de operações efetuadas e tempo;
 
 O volume de operações efetuadas por um algoritmo se traduz em tempo de processamento, simulando a capacidade de um processador de computador.

Além das formas linear e quadrática, existem outras formas de cálculo de complexidade de um algoritmo, como a constante;

É bem fácil “explodir” a capacidade de processamento de um computador com uma quantidade grande de operações, devido à influência da quantidade de dados na curva de complexidade de um algoritmo;

Devemos levar esse índice de crescimento em conta na hora de definirmos qual algoritmo será utilizado para resolver um problema, especialmente quando envolve grandes quantidades de dados e para isso podemos utilizar a análise assintótica e a notação O grande;

Existem várias notações e vários algoritmos “prontos”, como o Selection Sort e o Insertion Sort, entre diversos outros, cada um com suas vantagens e desvantagens.
 



# 1. PENSANDO EM ALGORITMOS


## Nosso primeiro problema

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/c666dbe2-76e0-4193-ae60-d50492b02f9c)


![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/9a2c35b5-7633-49bc-a1f5-487a405ebfe3)


![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/2d86ac09-9168-4a31-b4e3-610ee12b8c2f)


## Do papel para o codigo

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/32cd41c2-bf06-4734-936a-aa006af64984)


![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/0ceed190-0eed-4dc4-93d7-ddc943b883ba)


executa no terminal


## Exibindo os Livros

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/58ab0e13-0e1e-4330-89a9-89367835a178)


![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/9266153a-7b43-4cbc-933d-7e4728528987)


![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/cbfcfadd-0bc6-42e0-af5f-960363c3c3fd)


![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/ef30df9f-8f7b-448b-a6c8-e84da31160cf)



## Para saber mais: Representando algoritmos


Você já viu ou já ouviu falar de fluxogramas?

Um fluxograma é uma forma de representarmos os passos de um algoritmo, através de símbolos bem definidos para cada tipo de processo (entrada de dados, processamento, condicionais, etc) para facilitar a visualização e o mapeamento de todos os passos necessários e/ou possíveis em um determinado processo. São muito utilizados para descrever algoritmos, mas podem ser utilizados em qualquer situação que envolva um fluxo finito de ações, com entrada e saída.

Há outras formas de se representar um algoritmo além do fluxograma, como a descrição textual/verbal dos passos (que estamos utilizando nesse curso), o pseudo-código ou mesmo a própria leitura do código em JavaScript ou outra linguagem de programação. Você pode conferir exemplos destas três formas neste [artigo da Alura](https://www.alura.com.br/artigos/algoritmos-e-logica-de-programacao?_gl=1*1jqdmd2*_ga*MTAyMjIzNjI2OC4xNzAxODc3NTU5*_ga_1EPWSW3PCS*MTcwODQ1NjIyMi4yOS4xLjE3MDg0NTgwNTUuMC4wLjA.*_fplc*cCUyQlRzVjZIOUVHTURUMGc3NGdOaSUyRmMwTWltSVlqJTJGRlR2ZjdKN0owMmsxQ09PdGxCZFFaS1RTa3NXWjhDN251YmRzU2RqJTJGTkZrM1NrQnd0eVhraVRWcVlDRVFlbmpSU3I2SktPUE5nN0NqZjRQUldqVjhENlM1dGQwOGZYUmclM0QlM0Q.).

No caso do fluxograma, os diferentes formatos das caixas de texto ajudam a definir os passos lógicos de um processo. Veja alguns exemplos:

Temos a representação de cinco imagens que, respectivamente, representam as figuras padrão para os tipos de operação em um fluxograma. No 1 temos uma figura com o texto início e fim, no 2 temos uma outra figura diferente, com o texto entrada (input) manual, no 3 temos uma outra imagem com a palavra processamento, no 4 temos um losango com a palavra decisão, e, por fim, na quinta e útlima imagem temos o texto entrada/saída (input/output)

As figuras padrão para os tipos de operação em um fluxograma são:

Início/fim: Marcam o início ou término do processamento que está sendo descrito, normalmente “início” ou “fim”, mas também podem ser utilizados as saídas de processamentos anteriores ou entradas de processamentos posteriores, como “envio do formulário”. Representado por uma figura oval ou retângulo com bordas arredondadas;
Entrada manual: input (ou entrada) manual de dados, por exemplo dados informados pelo usuário do sistema. Representado por um retângulo com o lado direito mais alto;
Processamento: bloco ou conjunto de operações que serão efetuadas com os dados recebidos. Representado por um retângulo;
Decisão: quando o programa pode seguir em mais de um caminho, que envolve uma decisão cujo resultado é “sim” ou “não” (os equivalentes a true e false). Representado por um losango;
Entrada/saída: Processo de recebimento dos dados pelo programa (input ) ou retorno do resultado de um processamento (output). Representado por um paralelogramo.
Vamos ilustrar melhor com um exemplo de fluxograma para uma soma entre dois números:

Temos um fluxograma vertical que se inicia com um retângulo com bordas arredondadas com a inscrição início, uma seta apontada para baixo, um retângulo com o lado direito mais alto com a inscrição num1, uma outra seta apontada para baixo. um retângulo com o lado direito mais alto com a inscrição num2, mais uma seta para baixo, um retângulo com a inscrição soma = num1 + num2, mais uma seta apontada para baixo, uma imagem com cinco lados com a inscrição soma e, por fim, uma última seta apontada para baixo seguida de umretângulo com bordas arredondadas com a inscrição fim

O fluxograma acima descreve:

o ponto de início do processamento;
a entrada de dois dados (as variáveis num1 e num2), cada um por vez;
o processamento (operação matemática entre os dois números);
a saída do resultado através da variável soma;
o fim do processamento.

Podemos representar o algoritmo acima com código JavaScript:

```
const num1 = 2;
const num2 = 2;

const soma = num1 + num2;

console.log(soma)
```


Vamos ver mais um exemplo, para um loop que exibe no console números de 0 a 10:

Temos um fluxograma que se inicia com um retângulo com bordas arredondadas com a inscrição início, em seguida, uma seta apontada para baixo e um paralelogramo com a inscrição i = 0, em seguida, temos outra seta apontada para baixo, com um losango com a inscrição i <= 10?, o fluxograma, então, se desmembra em duas ramificações. Na esquerda do losango, temos uma seta, a inscrição “não”, que leva a um retângulo com bordas arredondadas com a inscrição fim, já abaixo do losango, em outra ramificação possível, temos uma seta apontada para baixo, a inscrição “sim” e um paralelogramo com a inscrição imprime i, após esse paralelogramo, temos uma seta à direita que leva a um retângulo com a inscrição i = i + 1 e, em seguida, uma seta apontada retornando para o losango com a inscrição i <= 10?

O fluxograma acima pode ser traduzido, em código JavaScript, em um for:

```
for (let i = 0; i <= 10; i++) {
 console.log(i);
}
```


Existem outros símbolos que usamos nos fluxogramas para ilustrar outros tipos de operações possíveis, como impressão em papel ou envio de dados para um banco.

Você pode praticar com fluxogramas para criar algoritmos tanto para códigos que você já escreveu quanto para “colocar no papel” e ajudar a organizar a estrutura para um algoritmo que esteja desenvolvendo; ou mesmo treinar com outras situações, como fazer um bolo ou pagar uma conta de luz.


## Faça como eu fiz: Encontrar o livro mais caro


Durante a aula, criamos um algoritmo para encontrar o menor valor em uma lista (array). Mas a mesma lógica pode ser invertida para funcionar com o maior valor.

Dentro do for, basta invertermos a condição do if, para ao invés de verificar se o produto atual tem valor menor <, agora verifique se tem valor maior >:

```
let maisCaro = 0;
for (let atual = 0; atual < livros.length; atual++) {
 if (livros[atual].preco > livros[maisCaro].preco) {
   maisCaro = atual;
 }
}
```


Futuramente este loop poderá ser extraído para uma função que faz ambas as operações e consegue, com o mesmo código, encontrar tanto o valor menor quanto o maior.

# 2. Ordenação com Selection Sort

## Ordenar para organizar

## Reaproveitando codigo

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/1188de6f-8dbe-40ab-b50f-09e59ad4814c)


![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/dfdf79c2-d757-41b0-90f0-e3b9852b2ebd)


## Selection Sort

Ordenação por seleção

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/1bcdf6bd-298b-4aa3-9ca1-441c202c8109)

## Para saber mais: O sort() do JavaScript


Durante este curso estamos criando nossos próprios algoritmos de busca e ordenação. Porém, se formos investigar a documentação do JavaScript, descobrimos que o pacote da linguagem já traz, prontos para uso, métodos/funções que buscam ocorrências e ordenam listas, da mesma forma que estamos fazendo. Por exemplo, para varrer arrays em busca de dados específicos, podemos utilizar includes(), find() ou filter(), entre outros, e para ordenar arrays podemos usar o método sort().

Mais do que pensar “por que não usamos o método pronto do JavaScript ao invés de escrever outro do zero?” vamos olhar por outro ângulo: se o JavaScript tem um método/função de ordenação “pronto para usar”, esse método com certeza utiliza algum algoritmo de ordenação para fazer esse trabalho. E qual seria ele? É o mesmo que utilizamos?

A verdade é que o sort() utiliza mais de um algoritmo de ordenação, dependendo de principalmente duas coisas: 1) as características do array a ser ordenado e 2) a implementação do JavaScript que está sendo utilizada.

Como assim, implementação?

O JavaScript se desenvolveu como uma linguagem interpretada pelos navegadores, e a partir da especificação do que cada versão da linguagem deve seguir (definida pelo [ECMA](https://ecma-international.org/publications-and-standards/standards/ecma-262/) cada navegador implementa os métodos e funções de acordo com suas próprias engines, ou seja, cada navegador tem seu próprio “motor” de interpretação do JavaScript, e a forma como o código é interpretado “por baixo dos panos” em cada navegador pode ser diferente.

No caso do método sort(), a engine de interpretação do JavaScript implementada pela Mozilla no navegador Firefox utiliza um algoritmo chamado Merge Sort, enquanto o Google utiliza, na engine do Chrome (chamada de V8) alterna entre outros dois algoritmos de ordenação, o Quick Sort e o Insertion Sort, dependendo do caso. Existem vários algoritmos de ordenação!

No caso do NodeJS, uma vez que utiliza como base a engine V8 do Google, os algoritmos utilizados no sort() também serão os mesmos.

E que casos são estes? O método sort(), executado sem nenhum parâmetro, interpreta todos os elementos do array como strings e ordena em ordem alfabética crescente, a partir da tabela [Unicode](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types). Para outros tipos de ordenação, por exemplo numérica ou decrescente, é preciso passar parâmetros de comparação para o sort().

A [documentação do MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) sobre o sort() tem vários exemplos sobre os diversos casos de ordenação e como utilizar este método.

## Faça como eu fiz: Usando loops do JavaScript


Durante o curso vamos usar o for para escrever os laços de repetição. Esta forma de escrever laços é muito comum em linguagens de programação e pode ser encontrada praticamente da mesma forma tanto no JavaScript quanto em outras linguagens muito utilizadas, como o Java e a família C (C, C++, C#, entre outras). Assim como o for, a maior parte dessas linguagens, além de várias outras, também utiliza os laços while e do… while.

O JavaScript tem outras formas de escrever laços de repetição além desse for “clássico” e podemos reescrever o nosso código para testar com um método mais moderno, o forEach().

forEach() é um [método de array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) do JavaScript que percorre o array e executa um bloco de código para cada índice.

Este método pede como parâmetro uma função que chamamos de função callback. Esta função callback controla o laço para que percorra cada um dos elementos do array, através do parâmetro que estamos chamando de livro (afinal de contas, trata-se de um array de livros):

```
livros.forEach((livro) => {
  // código aqui
})
```

Também vamos precisar do número do índice de cada elemento, para fazer a troca de lugares entre os valores. Para isso vamos precisar do segundo parâmetro da função callback, que é opcional, e que leva justamente o número do índice atual que está sendo percorrido. Ou seja, é o equivalente à nossa variável atual:

```
livros.forEach((livro, indice) => {
  // código aqui
})
```

Agora podemos passar para dentro do bloco a lógica do algoritmo, substituindo atual por indice:

```
livros.forEach((livro, indice) => {
 let menor = menorValor(livros, indice)

 let livroAtual = livros[indice];
 let livroMenorPreco = livros[menor];

 livros[indice] = livroMenorPreco
 livros[menor] = livroAtual 
})
```

Se examinarmos o laço, vemos que o primeiro parâmetro da função callback, livro, não está sendo utilizado; nesse caso, podemos usar a notação do JavaScript para informar que o primeiro parâmetro não será utilizado no código, através do _:

```
livros.forEach((_, indice) => {
 let menor = menorValor(livros, indice)

 let livroAtual = livros[indice];
 let livroMenorPreco = livros[menor];

 livros[indice] = livroMenorPreco
 livros[menor] = livroAtual 
})

console.log(livros)
```


Agora é só testar com node selectionSort.js.


# 3. Insertion Sort

um novo algoritmo (Insertion Sort) para resolver o mesmo problema do algoritmo anterior (Selection Sort); ou seja, ambos são algoritmos de ordenação.

## Outras formas de Ordenar

Ordenação em ordem alfabética.

## Programando o algoritmo

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/4659444d-bb0e-40bf-9cb8-7ac1831f4883)

## Mais testes de Mesa - Desk Checking

interpretar o código passo a passo, anotando o que tem dentro de cada variável, em cada momento de cada linha de cada passo do loop.

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/409d013e-2ff8-4fa7-8e59-c0b8aadb2b1c)

## Para saber mais: Testes de mesa


Comentamos durante a aula sobre testes de mesa, ou desk checking, em inglês.

Um teste de mesa é justamente o processo manual de verificar todas as linhas de um código e executá-lo passo a passo com ajuda de, por exemplo, papel e lápis para anotar qual os valores das variáveis em cada passo de cada linha. É como compilar/interpretar um bloco de código usando o cérebro como compilador/interpretador.

Apesar de hoje as [IDEs](https://www.alura.com.br/artigos/o-que-e-uma-ide?_gl=1*1wv7q5s*_ga*MTAyMjIzNjI2OC4xNzAxODc3NTU5*_ga_1EPWSW3PCS*MTcwODYwNTg5OC4zMS4xLjE3MDg2MDgxMTQuMC4wLjA.*_fplc*YlZBS01jN2t3RFd2ZEZNSzFicEpscEtDRHVQSW5GZ0g4akI0ZWFlRFVTNyUyQlhpSzU3U0MxdlBlak9iZDJQTzQ3MzlPWXpqVVIyNEwyM2pCdDU0QmVEdHQ5S2t0M2VzJTJCVW5temNsczhsU21JU2hpZGx4TWQ5QUtHdEJnbmVRZyUzRCUzRA..) e as linguagens terem ferramentas práticas, modernas e eficientes para avisar, “debugar” e encontrar erros de código, o teste de mesa é uma forma muito boa de se estudar lógica de programação e para entender o que acontece em cada passo de execução do código, especialmente no caso de algoritmos que envolvem laços de repetição, substituição de valores e variáveis temporárias, como vimos durante a aula.

Uma forma muito comum de fazer o registro de valores de variáveis durante um teste de mesa é utilizando tabelas de rastreio, ou trace tables. Por exemplo, um teste de mesa para um for que imprime números de 0 a 5 no console poderia ser representado pelo seguinte teste de mesa/tabela de rastreio:

Captura de tela do editor de código mostrando um trecho de código e, à esquerda, o número de cada linha. Na linha 1: let num = 0; na linha 2: console.log(num); na linha 3 não há código; na linha 4: for (let i = 1; i <= 5; i++) {; na linha 5: console.log(i); na linha 6: } (fechamento de bloco).

```
linha	num	i	saída
1	0		
2			0
4		1	
5			1
4		2	
5			2
4		3	
5			3
4		4	
5			4
4		5	
5			5
4		6
```


Nos seus exercícios e testes, a tabela pode tranquilamente ser feita com papel e lápis, se preferir.

O importante no teste de mesa (com ou sem uso da tabela) é percorrer cada linha e executar realmente o código, anotando as criações/reatribuições de variáveis, resultados de operações matemáticas (se houver), alterações em arrays e objetos, etc. Dessa forma, resultados não esperados na execução do código já vão aparecer na hora.

Pratique com os códigos que já desenvolveu!


## Faça como eu fiz: Extraindo funções


Durante a aula, utilizamos duas vezes a seguinte estrutura de código:


```
let itemAnalise = lista[analise];
let itemAnterior = lista[analise - 1];

lista[analise] = itemAnterior
lista[analise - 1] = itemAnalise
```


Repetição de código quase sempre é sinal de que o trecho repetido poderia ser extraído para uma função, assim pode ser reaproveitado. Vamos ver como podemos fazer isso:

Vamos começar criando um novo arquivo, que vamos chamar de troca.js, e dentro dele a função:

```
function troca(lista, analise) {
  // código aqui
}
```


A função troca() vai fazer toda a lógica de substituição de valores dentro de insertionSort(), então vamos trazer de lá o código correspondente e ver o que precisamos refatorar:

```
function troca(lista, analise) {
 let itemAnalise = lista[analise];
 let itemAnterior = lista[analise - 1];

 lista[analise] = itemAnterior
 lista[analise - 1] = itemAnalise
}
```


Veja que a função troca() está fazendo alterações direto na lista que está sendo passada por parâmetro; assim, essa função não precisa retornar nenhum valor.

Sem esquecer de exportar a função no final do arquivo, para que possamos importá-la em insertionSort.js:

```
function troca(lista, analise) {
 let itemAnalise = lista[analise];
 let itemAnterior = lista[analise - 1];

 lista[analise] = itemAnterior;
 lista[analise - 1] = itemAnalise;
}

module.exports = troca;
````

Agora, no arquivo insertionSort.js, começamos importando a função troca() no topo do arquivo:

```
const troca = require('./troca');
```

E todo o trecho que foi passado para a função troca() pode ser substituído pela chamada da função:


```
function insertionSort(lista) {
 for (let atual = 0; atual < lista.length; atual++) {
   let analise = atual;
   while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
     troca(lista, analise);
     analise--
   }
 }
 console.log(lista);
}
```


Veja que estamos passando como parâmetro da função troca() o array que vamos trabalhar (lista, o mesmo parâmetro que passamos como parâmetro da função externa, insertionSort()) e a variável analise. Dessa forma, a cada laço de repetição feito com o for, de 0 ao fim do array, o valor da variável analise também será atualizado, e este novo valor é passado como parâmetro da função troca() também a cada laço.

Agora você pode fazer o mesmo processo para o código do algoritmo selectionSort que criamos anteriormente, e substituir o código pela chamada da função troca().


# 4. Analisando a Complexidade

## Porque comparar algoritmos

## Complexidade do selection sort

Vamos começar analisando os algoritmos que nós criamos para fazer uma busca pelo menor número, nós chamamos essa função de menorValor. Então, vamos ver como nós analisamos, em termos de processamento, esse algoritmo de busca que acabamos criando.

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/ba733e32-fb6d-494b-a41d-2657bdd71fb8)

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/2d4d3ad2-bdab-49b2-b1f2-0e6a1f4f2943)

## Comparando com Numeros

Já estamos desenhando de cabeça qual é o processo de descobrir a complexidade de um algoritmo, mas é sempre mais legal trabalharmos com números para termos uma ideia melhor.
Como fizemos anteriormente com o nosso algoritmo buscaMenor, vamos deixar a planilha de Excel calcular para nós a quantidade de operações dada uma quantidade n de elementos em uma lista.

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/dab2138c-2d02-4aa6-ac77-fbe3cfbe82b5)

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/1df4ccc4-7f87-4db4-a9d8-13f7e93b2a32)

## Simulando um computador

Você já prestou atenção nas informações técnicas de um computador? Quando vamos comprar um computador, o que significam alguns daqueles números de processador, de velocidade etc., e o que isso tem a ver com os cálculos que estamos fazendo aqui, que estamos até utilizando a planilha, já saímos do código.
O que vamos fazer é ver de uma forma um pouco mais simplificada como que a quantidade de operações que estamos calculando na nossa planilha impacta no processamento do computador, em como o computador processa essas informações.


A complexidade de um algoritmo impacta diretamente no seu processamento, já que a memória do nosso computador não é infinita.


![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/1f833ca9-0cd9-4551-b849-f92f53e0a4f1)


![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/24abe043-5f66-4b84-986c-9ac76d4c6d01)


## Para saber mais: Comparação de algoritmos


Durante a aula usamos um vídeo que compara a performance de diversos algoritmos de ordenação. Você pode conferir o vídeo nesse [link](https://www.youtube.com/watch?v=BeoCbJPuvSE&feature=youtu.be)! Veja como existem vários outros algoritmos apenas para resolver o problema de ordenar listas, como Quick Sort, Radix Sort e etc. Todos esses algoritmos já foram desenvolvidos anteriormente, assim como o Selection Sort e o Insertion Sort que utilizamos durante o curso.

Se quiser checar outros modos de visualizar os dados, pode buscar por sorting algorithm comparison no YouTube e comparar os resultados.

Você pode praticar a implementação em javaScript de alguns desses outros algoritmos!


## Para saber mais: Como funciona um processador


Nesta aula falamos muito brevemente sobre como funciona um processador, e simplificamos um pouco o tema para trabalhar com nossos exemplos.

É interessante que você, ao começar seus estudos em programação, busque também relacionar o código e a forma como ele é interpretado pelo computador. Esse conhecimento nos ajuda a entender o porquê de alguns comportamentos das linguagens de programação, porque alguns bugs acontecem e como corrigi-los ou evitá-los. E, como vimos durante a aula, essa questão pode ser essencial para uma boa performance dos nossos programas.

Para entender melhor como o computador processa as informações e o que significam alguns dos números e siglas que acompanham os modelos dos componentes de computadores, você pode conferir o nosso curso de Arquitetura de computadores.

## Faça como eu fiz: Tabelas de comparação


Utilizamos o Google Sheets (equivalente ao Excel) para montar as tabelas de comparação de algoritmos.

Caso queira replicar as tabelas e fazer mais testes, pode aproveitar as fórmulas que usamos na aula:

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/5336af85-17b0-437a-8425-08063ecee42a)

```
elementos	n	2n	n^2	2*n^2	1	n^3
1	=+A2	=2*A2	=A2*A2	=2*D2	1	=A2A2A2
=+A2*2	=+A3	=2*A3	=A3*A3	=2*D3	1	=A3A3A3
=+A3*2	=+A4	=2*A4	=A4*A4	=2*D4	1	=A4A4A4
=+A4*2	=+A5	=2*A5	=A5*A5	=2*D5	1	=A5A5A5
=+A5*2	=+A6	=2*A6	=A6*A6	=2*D6	1	=A6A6A6
```

A tabela acima está preparada para uma lista de até 16 elementos, mas você pode expandir a partir daí e ver os resultados!


# 5. Comparando ALgoritmos


## Analisando o Insertion Sort

## Outros tipos de Algoritmo

Voltando à planilha e aos gráficos que estávamos gerando, nós comparamos o crescimento de um algoritmo linear com um algoritmo quadrático anteriormente, mas será que existe algum algoritmo que seja mais rápido do que o linear?

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/641851df-0a2a-43a7-bf91-4c5db24e4f58)

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/4b93673e-46fd-4ed9-98e1-410ae693c55a)

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/fec5ddb5-f582-4e3b-a722-a95951d2b449)

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/8075900c-360d-4f37-9e0e-40b015be36f5) Bugou o grafico

 normalmente, no dia a dia, nós não trabalhamos com uma lista de 128 elementos, trabalhamos com quantidades muito maiores de dados.
 Por isso, sempre temos que saber: como analisamos algoritmos, que eles precisam ser analisados com relação à complexidade deles; tem que levar o índice de crescimento em conta – se é quadrático, se é linear, se é logarítmica etc.
Que existem vários tipos de crescimento e vários algoritmos prontos - selectionSort e insertionSort são só dois deles para ordenação, porque existem algoritmos para todos os tipos de problema; e cada um tem as suas vantagens e desvantagens.

## Para saber mais: Big O Notation


Ao começarmos o estudo de algoritmos, é comum nos depararmos com a expressão Big O Notation (ou Notação “O Grande”).

Essa notação é utilizada para expressar a complexidade de um algoritmo, com relação ao tempo e volume de recursos computacionais necessários para executar esse algoritmo, de acordo com o volume de dados de entrada. Em geral, utiliza-se o tempo de uso de CPU (unidade central de processamento) do computador.

Ou seja, usamos O para classificar funções (implementações de algoritmos) de acordo com a forma como crescem em complexidade. Algoritmos diferentes podem crescer em complexidade da mesma forma, então podem ter a mesma classificação O, como vimos durante o curso com o Selection Sort e o Insertion Sort.

Podemos classificar os exemplos que vimos durante a aula da seguinte forma:

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/583eabf3-323c-4f6f-b319-cb4207b2a9d1)


A função menorValor() é um exemplo de algoritmo de crescimento linear: o “custo” (referente à quantidade total de operações necessárias) depende da quantidade de elementos na lista; uma lista de 10 elementos resulta em 10 operações de busca e uma lista de 1000 elementos resulta em 1000 operações. Ou seja, menorValor() tem complexidade de O(n), onde n é o tamanho (quantidade de elementos) da lista.

Já nas funções selectionSort() e insertionSort(), vimos que um laço de repetição dentro do outro faz com que a taxa de crescimento não aumenta mais de forma linear com relação à quantidade de elementos na lista, porém de forma quadrática, pois um laço dentro de outro significa que a quantidade de operações será de n*n (sendo n a quantidade de elementos). Ou seja, selectionSort() e insertionSort() têm complexidade de O(n²).

Como os exemplos que vimos na planilha e nos gráficos da aula, existem outras formas de avaliar o crescimento de um algoritmo, e que também podem ser representada segundo a notação O grande:


![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/8efa9c44-b710-4e18-8c08-ecef785f6bda)


A notação O grande não é usada apenas em computação, mas também em várias áreas da matemática e existem outras notações na lista além dos exemplos que utilizamos.

Se quiser saber mais e ter outros exemplos de notações relacionadas a algoritmos comuns em programação, o site [Big O cheatsheet](https://www.bigocheatsheet.com/) (em inglês) fornece ótimo material para estudo.

## Faça como eu fiz: Mais cálculos de complexidade


Podemos aproveitar a planilha e os gráficos que utilizamos na aula para testar a complexidade (pela notação O grande) de outros algoritmos, como a logarítmica e a linear-logarítmica, além das que vimos na aula:

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/b5b0e413-7ff4-4bd4-8a8d-220518464dc3)

Se quiser fazer mais testes, atualize sua planilha com as fórmulas que utilizamos e expanda para maiores quantidades de elementos:

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/7f798970-fa65-448d-82da-53c71065865e)

Atualize os gráficos e veja os resultados!



