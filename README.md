# Js-algoritmos-de-ordenacao

#1. PENSANDO EM ALGORITMOS

Prof Juliana Amoazei

Nosso primeiro problema

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/230bc9f7-4237-415a-8f6d-c8538533727d)

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/b3df8066-9cc6-40e0-82c8-b33a945d6daf)

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/6ed6702c-d614-49c1-ba89-a7f9395882f1)

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/258271c7-50f3-4e4a-9d0c-5a134ce2ed85)

Do papel para o codigo

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/a1996b11-7f9c-4e75-93dc-69bdc80807d0)


![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/b17c2995-398f-4567-813a-691a8f75c354)

executa no terminal

Exibindo os Livros

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/02c16d4e-f689-4d29-bbbe-c137b9c5de8c)

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/dbfb6140-a1fc-4a7b-826f-f650a703cbf1)
![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/c1e5417d-0d28-4f3c-9eef-ff6fc602e280)

![image](https://github.com/FlavianaFXT/Js-algoritmos-de-ordenacao/assets/113718720/50c8ac36-4a98-4827-a128-6fcd72e0cb11)


Para saber mais: Representando algoritmos
PRÓXIMA ATIVIDADE

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

const num1 = 2;
const num2 = 2;

const soma = num1 + num2;

console.log(soma) //4COPIAR CÓDIGO
Vamos ver mais um exemplo, para um loop que exibe no console números de 0 a 10:

Temos um fluxograma que se inicia com um retângulo com bordas arredondadas com a inscrição início, em seguida, uma seta apontada para baixo e um paralelogramo com a inscrição i = 0, em seguida, temos outra seta apontada para baixo, com um losango com a inscrição i <= 10?, o fluxograma, então, se desmembra em duas ramificações. Na esquerda do losango, temos uma seta, a inscrição “não”, que leva a um retângulo com bordas arredondadas com a inscrição fim, já abaixo do losango, em outra ramificação possível, temos uma seta apontada para baixo, a inscrição “sim” e um paralelogramo com a inscrição imprime i, após esse paralelogramo, temos uma seta à direita que leva a um retângulo com a inscrição i = i + 1 e, em seguida, uma seta apontada retornando para o losango com a inscrição i <= 10?

O fluxograma acima pode ser traduzido, em código JavaScript, em um for:

for (let i = 0; i <= 10; i++) {
 console.log(i);
}COPIAR CÓDIGO
Existem outros símbolos que usamos nos fluxogramas para ilustrar outros tipos de operações possíveis, como impressão em papel ou envio de dados para um banco.

Você pode praticar com fluxogramas para criar algoritmos tanto para códigos que você já escreveu quanto para “colocar no papel” e ajudar a organizar a estrutura para um algoritmo que esteja desenvolvendo; ou mesmo treinar com outras situações, como fazer um bolo ou pagar uma conta de luz.

08
Faça como eu fiz: Encontrar o livro mais caro
PRÓXIMA ATIVIDADE

Durante a aula, criamos um algoritmo para encontrar o menor valor em uma lista (array). Mas a mesma lógica pode ser invertida para funcionar com o maior valor.

Dentro do for, basta invertermos a condição do if, para ao invés de verificar se o produto atual tem valor menor <, agora verifique se tem valor maior >:

let maisCaro = 0;
for (let atual = 0; atual < livros.length; atual++) {
 if (livros[atual].preco > livros[maisCaro].preco) {
   maisCaro = atual;
 }
}COPIAR CÓDIGO
Futuramente este loop poderá ser extraído para uma função que faz ambas as operações e consegue, com o mesmo código, encontrar tanto o valor menor quanto o maior.









