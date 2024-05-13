# microservicos-node
Este repositório contém um projeto de exemplo de microsserviços implementados em Node.js. 

Documentação
Objetivo:


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
