# Projeto 001 - Calculadora de Freelas

Uma calculadora que irá te mostrar o valor da sua hora perante o freelance cotado.

## Qual é o valor que o desafio entrega?

O projeto tem a finalidade de descrever alguns fatores determinantes para você saber o seu valor da sua em um freelance.

1. Tempo diário investido no projeto

   Agora vamos entender um pouco mais sobre esses fatores começando pelo fator _tempo diário_ investido. Quando tratamos de freelances, há uma certa demanda do seu tempo em off. Ou seja: depois do trabalho, escola ou aquele tempinho vago no final do dia que você usa pra relaxar e descontrair.
   Esse tempo é algo muito valioso para qualquer pessoa, certo? Então claramente temos que levar esse fator em consideração.

2. Dias efetivos trabalhando

   Outro fator é a quantidade de dias efetivos que você irá disponibilizar para trabalhar no projeto. Não há nenhuma garantia que você poderá trabalhar todos os dias e de fato lidar com o processo de confirmar tudo com o cliente. Logo, você terá que cotar uma quantidade de dias especificos para lidar com todo o processo, sendo ele a parte comercial e desenvolvimento.

3. Dias de Férias por projeto

   Qualquer modalidade de trabalho, seja CLT ou PJ há seus encargos referentes a verba de férias e não seria diferente para lidar com um freela. Uma parte do valor da sua hora reflete diretamente na quantidade de dias que você deseja tirar "férias" com o valor total projeto.

4. Valor total do Projeto

   Não podemos esquecer do principal fator que é o total a ser recebido pelo freela. A partir desse valor, do quanto você desejaria ganhar em cima do trabalho, é feito o calculo maior.

Essas quatro variaveis, vão definir um bom jeito de você cotar alguns de seus trabalhos até você começar a ter uma noção maior do que fazer nesses momentos.

### Desafio

O que queremos ensinar é o que há algo muito além do software dentro desses meios de freelance. Há de fato muitas outras variáveis a serem levadas em conta, porém isso você irá descobrir com o tempo. Tá, mas é o desafio?

- Crie um fork deste repositório
- Crie uma pagina explicando o valor de cada variável, com estilo livre e uma sinalização da He4rt (logo, link, cores etc);
- Nessa pagina haverá um formulário com 4 entradas entradas e um botão. Sendo essas entradas:

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

A step by step series of examples that tell you how to get a development env running

Say what the step will be

Give the example

And repeat

until finished

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

Give an example

### And coding style tests

Explain what these tests test and why

Give an example

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- _Billie Thompson_ - Initial work - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
