### 💻 Microserviços-node 

Um sistema de reservas de hotéis desenvolvido utilizando Node.js e microsserviços!

### Objetivo:

Oferecer uma plataforma para que os usuários reservem quartos de hotel de maneira simples e eficiente.

### Tecnologias:

* **Node.js** (https://nodejs.org/en)
* **ExpressJS** (https://expressjs.com/)

### O que são Microsserviços?

A arquitetura de microsserviços é um estilo que estrutura um aplicativo como uma coleção de serviços pequenos, independentes e modulares. Cada microsserviço possui uma responsabilidade bem definida e se comunica com outros serviços através de interfaces bem documentadas. No nosso projeto, os serviços são:

* **Reserva de hotel**
* **Busca de hotel**
* **Cancelamento de reserva**

### Conteúdo

* **Introdução à Arquitetura de Microsserviços:**
    * Microsserviços são uma maneira de dividir um aplicativo em serviços pequenos e independentes.
    * Isso facilita a escalabilidade, a manutenção e o desenvolvimento ágil de aplicações.

* **Vantagens dos Microsserviços:**
    * Escalabilidade independente
    * Facilidade de manutenção
    * Resiliência a falhas
    * Uso de tecnologias diversificadas
    * Desenvolvimento ágil

* **Princípios:**
    * **Autonomia:** Cada microsserviço é independente, podendo ser desenvolvido, implantado e atualizado sem afetar outros serviços.
    * **Coesão:** Cada microsserviço realiza uma única tarefa ou conjunto de tarefas relacionadas, tornando seu propósito claro e fácil de manter.
    * **Comunicação através de APIs:** Os microsserviços se comunicam por APIs, que definem como eles interagem entre si. Isso permite uma integração flexível e desacoplada entre os serviços.

* **Aplicação da Arquitetura de Microsserviços no Sistema de Reservas de Hoteis:**

    1. **cancelamento-service:**
        * Responsável pela funcionalidade de cancelamento de reservas.
        * Oferece endpoints para:
            * Cancelar reservas existentes.
            * Consultar o status de cancelamento de uma reserva.
            * Interage com o `reserva-service` para obter informações sobre reservas.
    2. **reserva-service:**
        * Responsável pela funcionalidade de gerenciamento de reservas.
        * Oferece endpoints para:
            * Criar novas reservas.
            * Obter informações sobre reservas existentes.
            * Atualizar reservas existentes.
            * Armazena e gerencia dados de reservas.
            * Interage com o `cancelamento-service` para processar cancelamentos de reservas.
    3. **busca-de-hoteis:**
        * Gerencia informações de hotéis e disponibilidade de quartos.
        * Permite buscas avançadas com base em diversos critérios.
        * Integrado com o `cancelamento-service` para verificar o status de cancelamento de reservas.

    **Interações entre os serviços:**

        O `reserva-service` consulta o `busca-de-hoteis` para verificar a disponibilidade de quartos.
        O `busca-de-hoteis` consulta o `cancelamento-service` para verificar o status de cancelamento de reservas.
        O `reserva-service` interage com o `busca-de-hoteis` para atualizar a disponibilidade de quartos após as reservas.
        O `cancelamento-service` notifica o `busca-de-hoteis` sobre cancelamentos de reservas para atualizar os resultados.

##Como rodar o projeto ✅

```
1° Passo: Certifique-se de ter o Node.js instalado em sua máquina
```

```
2° Passo: Faça o download do código que está no repositório
```

Depois, no terminal, digite os seguintes comandos:

```
cd reserva-service/src
```

```
npm install
```

```
npm start
```

Repita os passos 3 a 5 para os outros microsserviços:

* *cancelamento-service* 
* *busca-de-hoteis* 

Documentação

Pesquisa de Hoteis: O sistema permite que os usuários pesquisem hoteis disponíveis em diferentes cidades. O sistema fornece um critério de pesquisa por data.

Disponibilidade de Quartos: Com base nas informações fornecidas pelo usuário, o sistema verifica a disponibilidade de quartos nos hoteis selecionados para as datas especificadas. Ele retorna uma lista dos hoteis que têm quartos disponíveis 

Reserva de Quartos: Depois que o usuário escolhe um hotel disponível, ele pode prosseguir com a reserva. A reserva tem é criada com um método POST e precisa de:
- reservaId
- usuarioId
- quartoId
- dataInicio (checkin)
- dataFim (checkout)

Cancelamento de Reserva: Para fazer o cancelamento de reserva o usuário seleciona a reserva que ele quer cancelar e será direcionado a página de cancelamento dessa reserva.

por exemplo se a reserva é a um 1, ele será direcionado a essa url http://localhost:3001/reservas/1
e o sistema irá deletar essa reserva.


Documentação das Escolhas Arquiteturais:

Foi escolhida a arquitetura de microserviços pois ela permite escalar partes específicas do sistema de acordo com a demanda. Por exemplo, se o serviço de reservas estiver recebendo um grande número de solicitações, apenas essa parte do sistema pode ser escalada, sem afetar outras partes do sistema.



Melhorias e Expansões do Sistema:

  -  Adotar um design responsivo para melhorar a experiência em dispositivos móveis.
    
  - Simplificar a interface para uma navegação mais intuitiva.

  - Utilizar ícones e cores consistentes para facilitar a compreensão.
   
  - Oferecer sugestões inteligentes de quartos com base nas preferências do usuário.
             
  - Integrar um sistema de avaliações e feedback para melhorar o serviço
               
  - Reforçar a segurança dos dados do usuário através de criptografia adequada.

  - Implementar medidas de proteção contra ataques de SQL injection e XSS.

  - Garantir conformidade com regulamentações de privacidade, como GDPR ou LGPD



Tarefa 4.3:
Documentação dos Endpoints:
Na reserva para fazer a criação de reservas foi utilizado o método Post, já para listar as reservas foi utilizado o método get. 
No cancelamento de reserva foi usado o método delete para deletar reservas não desejadas.
