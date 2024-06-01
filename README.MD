```markdown
# Formula 1 API

## Descrição

Este projeto é uma API simples que fornece informações sobre equipes e motoristas da Fórmula 1. A API é construída usando Fastify, um framework web rápido e leve para Node.js, com suporte para CORS (Cross-Origin Resource Sharing).

## Stacks

1. Node Js
2. Typescript

## Instalação

Para instalar e executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/formula_1.git
    cd formula_1
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Execute o servidor em modo de desenvolvimento:
    ```sh
    npm run start:dev
    ```

## Scripts

- `npm run dist`: Compila o código TypeScript para JavaScript usando `tsup`.
- `npm run start:dev`: Inicia o servidor em modo de desenvolvimento com `tsx`, utilizando o arquivo `.env` para variáveis de ambiente.
- `npm run start:watch`: Inicia o servidor em modo de desenvolvimento com watch, recarregando automaticamente em caso de mudanças no código.
- `npm run start:dist`: Compila o código e inicia o servidor a partir do código compilado.

## Endpoints

A API fornece os seguintes endpoints:

### GET /teams

Retorna uma lista de todas as equipes de Fórmula 1.

#### Exemplo de resposta
```json
[
  { "id": 1, "name": "McLaren", "base": "Woking, United Kingdom" },
  { "id": 2, "name": "Mercedes", "base": "Brackley, United Kingdom" },
  ...
]
```

### GET /drivers

Retorna uma lista de todos os motoristas de Fórmula 1.

#### Exemplo de resposta
```json
[
  { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" },
  { "id": 2, "name": "Sergio Pérez", "team": "Red Bull Racing" },
  ...
]
```

### GET /drivers/:id

Retorna as informações do motorista com o ID especificado.

#### Parâmetros de URL
- `id`: O ID do motorista.

#### Exemplo de resposta
```json
{
  "driver": {
    "id": 1,
    "name": "Max Verstappen",
    "team": "Red Bull Racing"
  }
}
```

#### Exemplo de resposta de erro
```json
{
  "message": "Driver not found"
}
```

## Dependências

- `fastify`: Framework web rápido e leve para Node.js.
- `@fastify/cors`: Plugin para habilitar CORS no Fastify.

## DevDependências

- `@types/node`: Tipos para Node.js.
- `tsup`: Bundler para TypeScript.
- `tsx`: Ferramenta para executar arquivos TypeScript.
- `typescript`: Superset do JavaScript que adiciona tipos estáticos.

## Licença

Este projeto é licenciado sob a licença ISC.
```

Este README oferece uma visão geral do projeto, instruções de instalação, descrição dos scripts disponíveis, documentação dos endpoints da API e uma lista de dependências. Isso deve fornecer todas as informações necessárias para que outros desenvolvedores possam entender e utilizar seu projeto.