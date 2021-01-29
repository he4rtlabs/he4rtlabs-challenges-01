# Projeto 001 - Calculadora de hora p/ Freelas (1/2)

Uma calculadora que irá te mostrar o valor da sua hora perante o freelance cotado.

## Qual é o valor que o desafio entrega?

O projeto tem a finalidade de descrever alguns fatores determinantes para você saber o seu valor da sua hora em um freelance.

1. Tempo diário investido no projeto

   Agora vamos entender um pouco mais sobre esses fatores começando pelo fator _tempo diário_ investido. Quando tratamos de freelances, há uma certa demanda do seu tempo em off. Ou seja: depois do trabalho, escola ou aquele tempinho vago no final do dia que você usa pra relaxar e descontrair.
   Esse tempo é algo muito valioso para qualquer pessoa, certo? Então claramente temos que levar esse fator em consideração.

2. Dias efetivos trabalhando

   Outro fator é a quantidade de dias efetivos que você irá disponibilizar para trabalhar no projeto. Não há nenhuma garantia que você poderá trabalhar todos os dias e de fato lidar com o processo de confirmar tudo com o cliente. Logo, você terá que cotar uma quantidade de dias específicos para lidar com todo o processo, sendo ele a parte comercial e desenvolvimento.

3. Dias de Férias por projeto

   Qualquer modalidade de trabalho, seja CLT ou PJ, há seus encargos referentes à verba de férias e não seria diferente para lidar com um freela. Uma parte do valor da sua hora reflete diretamente na quantidade de dias que você deseja tirar "férias" com o valor total projeto.

4. Valor total do Projeto

   Não podemos esquecer do principal fator que é o total a ser recebido pelo freela. A partir desse valor, do quanto você desejaria ganhar em cima do trabalho, é feito o cálculo maior.

Essas quatro variáveis, vão definir um bom jeito de você cotar alguns de seus trabalhos até você começar a ter uma noção maior do que fazer nesses momentos.

### Desafio

O que queremos ensinar é que há algo muito além do software dentro desses meios de freelance. Há de fato muitas outras variáveis a serem levadas em conta, porém isso você irá descobrir com o tempo. Tá, mas e o desafio?

- Crie um fork deste repositório e trabalhe os arquivos da pasta **"src"**.
- Crie uma página explicando o valor de cada variável, com estilo livre e uma sinalização da He4rt (logo, link, cores etc);
- Nessa página haverá um formulário com 4 entradas e um botão. Sendo essas entradas:

  1.  Valor total do Projeto
  2.  Quantidade de horas trabalhadas por dia
  3.  Dias efetivos trabalhados na semana
  4.  Dias de férias pelo projeto

- Ao submeter o formulário será gerada uma nova div com o resultado da conta abaixo:

  ```
  // Conta para calcular valor da sua hora no projeto
  //
  // By: danielhe4rt

  valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) )
  ```

Cuidados a se tomar:

- Validar entradas de texto para apenas aceitar números ou sua aplicação não irá funcionar;
- Fazer um layout agradável e explicando o motivo do projeto;
- Não ter pressa para terminar o projeto.

### Conclusão do Desafio

Commite as alterações feitas e faça um post ou no nosso Discord na sala #he4rtlabs-challenges ou um post no Twitter com a hashtag #He4rtLabsChallenges e iremos divulgar e/ou fazer um review do seu código.

Caso você se sinta confortável, deixamos um arquivo chamado REVIEW.MD para você fazer alguns comentários sobre o desafio e o que você achou no geral.

## Créditos

Este desafio foi desenvolvido pelo grupo He4rt Developers para uso livre da comunidade.

## Autor

- Daniel Reis (danielhe4rt) - Back-end Developer && He4rt Developers Leader - [Portfólio](https://danielheart.dev) - [Twitter](https://twitter.com/danielhe4rt)
