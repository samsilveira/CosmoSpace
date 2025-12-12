# Levantamento de Requisitos - CosmoSpace

Documento de requisitos para o projeto CosmoSpace como parte do processo de Trainee na Calang.io

## Histórias de Usuário

### Épico 1 - Experiência Visual e Navegação

#### US01 - Visualização Hero

Como visitante, quero ver a "Imagem Astronômica do Dia" ao entrar no site.
**Critérios de aceitação**:

- A imagem deve ser carregada da API da NASA (APOD).
- Deve haver um loader visível enquanto a imagem carrega.
- O título da imagem e a explicação devem estar disponíveis.

#### US02 - Modo Claro/Escuro

Como usuário, quero alternar entre modo claro e modo escuro, para ter conforto visual.
**Critério de aceitação**:

- Toggle posicionado no cabeçalho.
- A preferência deve alterar as cores de fundo e texto de todo o site.

### Épico 2 - Conteúdo e Galeria

#### US03 - Galeria de Imagem

Como entusiasta, quero visualizar uma grade de fotos de Marte ou do espaço, para explorar mais detalhes.
**Critérios de aceitação**:

- Criar uma página extra "Galeria" vinculada ao NavBar.
- As imagens devem vir de uma API.
- Layout em grid responsivo.

### Épico 3 - Interação e Backend

#### US04 - Envio de Mensagem

Como usuário, quero enviar uma mensagem de contato para a equipe através de um formulário.
**Critérios de aceitação**:

- Campos Nome, E-mail, Mensagem.
- Validação no Front-end:
        - Nome obrigatório
        - E-mail válido
        - Mensagem > 10 caracteres
- Ao clicar em enviar, deve acionar a rota POST do backend
- Feedback visual de sucesso ou erro após o envio.

#### US05 - Listagem de Mensagens/Status

Como administrador, quero ver uma lista das mensagens enviadas ou do status do sistema.
**Critérios de aceitação**:

- Uma área (página ou console) que consome a rota GET do backend.
        - Deve exibir os dados que foram salvos em memória pelo formulário anterior.

## Classes
<!-- markdownlint-disable-line no-inline-html -->
| Classe         | Descrição                                        | Atributos                                                       | Métodos                               |
| -------------- | ------------------------------------------------ | --------------------------------------------------------------- | ------------------------------------- |
| Visitante      | Usuário que navega pelo site (não requer login). | preferenciaTema: str                                            | alternarTema()<br>visualizarGaleria()  |
| Mensagem       | Representa o contato enviado pelo formulário.    | nome: str<br>email: str<br>conteudo: str<br>dataEnvio: datetime | validarCampos()<br>enviar()           |
| ImagemEspacial | Representa uma foto retornada pela API da NASA.  | titulo: str<br>url: str<br>explicacao: str<br>data: date        | carregarDetalhes()                    |
| Galeria        | Agrupamento de imagens para exibição             | listaImagens: List\[ImagemEspacial]                             | filtrarPorData()<br>carregarMais()    |

## Relacionamentos

### Galeria e ImagemEspacial (Agregação)

Relação: Um para muitos (1 : 0..N)
Uma galeria é composta por diversas Imagens Espaciais obtidas da API externa. A galeria organiza a exibição, mas as imagens existem independentemente na fonte de dados (NASA).

### Visitante e Mensagem (Associação)

Relação: Um para muitos (1 : 0..N)
Um visitante pode enviar múltiplas mensagens de contato. Cada mensagem pertence a um único remetente.

## Diagrama Backend

### Entidades

| Classe      | Descrição                                               | Atributos                                                                 | Métodos       |
| ----------- | ------------------------------------------------------- | ------------------------------------------------------------------------- | ------------- |
| Contato     | Descreve a estrutura de dados de uma mensagem recebida. | id: int<br>nome: str<br>email: str<br>mensagem: str<br>datahora: DateTime | N/A           |
| RespostaAPI | Padronização de resposta do servidor para o front.      | status: Enum(sucesso, erro)<br>data: Any<br>mensage: str                  | toJson(): str |

### Repositórios

| Classe            | Descrição                                  | Atributos                                       | Métodos                                                                   |
| ----------------- | ------------------------------------------ | ----------------------------------------------- | ----------------------------------------------------------------------- |
| MessageRepository | Armazena as mensagens de contato recebidas | storage: Array\<Contato><br>contadorId: int = init(): void<br>add(msg, Contato): Contato<br>listarTodas(): Contato\[] :  :  |

## Rotas da API

### `POST /api/contact`

Recebe os dados do formulário de contato, valida e armazena.

#### Parâmetros

```json
{
    "nome": "Fulano de Tal",
    "email": "fulano.detal@gmail.com",
    "mensagem": "Excelente projeto!"
}
```

#### Resposta (Sucesso 201)

```json
{
    "success": true,
    "message": "Mensagem recebida!",
    "data": {
        "id": 101,
        "recebidoEm": "2025-12-12T14:00:00Z"
    }
}
```

#### Resposta (Erro 400)

```json
{
    "success": false,
    "message": "Campo 'e-mail' inválido."
}
```

### `GET /api/messages`

Retorna a lista de todas as mensagens enviadas pelos usuários.

#### Parâmetros na URL

Não tem.

#### Resposta (Sucesso 200)

```json
[
  {
    "id": 1,
    "nome": "Fulano",
    "email": "fulano@teste.com",
    "mensagem": "Site incrível!",
    "dataHora": "2025-12-12T10:00:00Z"
  },
  {
    "id": 2,
    "nome": "Beltrana",
    "email": "beltrana@teste.com",
    "mensagem": "Como faço para baixar as fotos?",
    "dataHora": "2025-12-12T11:15:00Z"
  }
]
```

### `GET /api/status`

Rota utilitária para verificar se o servidor backend está online.

#### Resposta

```json
{
    "api": "CosmoSpace API",
    "version": "1.0.0",
    "status": "online"
}
```
