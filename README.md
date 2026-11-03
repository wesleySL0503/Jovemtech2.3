Descrição do trabalho desenvolvido
O código desenvolvido em JavaScript tem como objetivo criar um sistema de cadastro e cálculo de médias de alunos, permitindo registrar o nome e quatro notas de cada estudante, calcular a média final e apresentar a situação de cada aluno.

Para iniciar o programa, utilizei a biblioteca prompt-sync, que permite receber informações digitadas pelo usuário diretamente no terminal. Em seguida, utilizei uma estrutura de repetição for, que faz com que o programa execute o processo 10 vezes, permitindo cadastrar e avaliar 10 alunos.

Durante a execução, o programa solicita o nome do aluno e suas quatro notas. Para receber as notas como números inteiros, utilizei a função parseInt(). Depois, realizei o cálculo da média aritmética, somando as quatro notas e dividindo o resultado por 4.

Também utilizei o comando console.log() para exibir os resultados no terminal, mostrando o nome do aluno, sua média e sua situação escolar.

Para identificar a situação de cada estudante, utilizei a estrutura condicional if, else if e else, seguindo os seguintes critérios:

Aprovado: média maior ou igual a 6.

Recuperação: média maior ou igual a 5 e menor que 6.

Reprovado: média menor que 5.
