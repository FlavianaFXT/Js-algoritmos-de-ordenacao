# Js-algoritmos-de-ordenacao (Prof Juliana Amoazei)

# APRENDIZADOS

Algoritmos são sequências finitas de passos lógicos para a resolução de um problema e que podem representar tanto problemas comuns em programação quanto qualquer situação que envolva passos lógicos;

Pensar de forma algorítmica não se resume a código e nem precisa necessariamente começar pelo código em si;

Como traduzir os passos de um algoritmo para a linguagem de programação que escolhemos trabalhar (no caso, JavaScript), através de estruturas fundamentais da linguagem como variáveis, laços de repetição e condicionais.

Da mesma forma que criamos “algoritmos mentais” para encontrar o menor valor de uma lista, fazemos um processo parecido para ordenar uma lista;

Como podemos abstrair os passos que fazemos “de cabeça” para código, observando a sequência dos passos utilizados;

Para resolver um problema, muitas vezes utilizamos mais de um algoritmo; para resolver isso, criamos a função menorValor() para reaproveitar o código junto com o Selection Sort.


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

livros.forEach((livro) => {
  // código aqui
})COPIAR CÓDIGO
Também vamos precisar do número do índice de cada elemento, para fazer a troca de lugares entre os valores. Para isso vamos precisar do segundo parâmetro da função callback, que é opcional, e que leva justamente o número do índice atual que está sendo percorrido. Ou seja, é o equivalente à nossa variável atual:

livros.forEach((livro, indice) => {
  // código aqui
})COPIAR CÓDIGO
Agora podemos passar para dentro do bloco a lógica do algoritmo, substituindo atual por indice:

livros.forEach((livro, indice) => {
 let menor = menorValor(livros, indice)

 let livroAtual = livros[indice];
 let livroMenorPreco = livros[menor];

 livros[indice] = livroMenorPreco
 livros[menor] = livroAtual 
})COPIAR CÓDIGO
Se examinarmos o laço, vemos que o primeiro parâmetro da função callback, livro, não está sendo utilizado; nesse caso, podemos usar a notação do JavaScript para informar que o primeiro parâmetro não será utilizado no código, através do _:

livros.forEach((_, indice) => {
 let menor = menorValor(livros, indice)

 let livroAtual = livros[indice];
 let livroMenorPreco = livros[menor];

 livros[indice] = livroMenorPreco
 livros[menor] = livroAtual 
})

console.log(livros)COPIAR CÓDIGO
Agora é só testar com node selectionSort.js.











