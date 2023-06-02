# my-donations

Aplicativo feito para a Global Solution de Hybrid Mobile App Development do primeiro semestre da FIAP.

## Endpoints da API usada

- [Login](#login)
- [Cadastro de Usuário](#cadastro-de-usuario)
- [Visualizar Usuário](#visualizar-usuario)
- [Visualizar Usuário por Id](#visualizar-usuario-por-id)
- [Editar Usuário](#editar-usuario)
- [Excluir Usuário](#excluir-usuario)
- [Cadastro de Produtos](#cadastro-de-produtos)
- [Listar Produtos](#listar-produtos)
- [Visualizar Produto por Id](#visualizar-produto-por-id)
- [Editar Produtos](#editar-produtos)
- [Excluir Produtos](#excluir-produto)

### Login

`POST` my-donations/api/v1/usuario/login

**Exemplo de Entrada**

```js
{
  "email": "email@email.com",
  "senha": "123456"
}
```

**Campos de Requisição**
| Campo | Obrigatório | Tipo | Descrição |
|-------|:-------------:|-------|-----------|
| email | sim | string | O email do usuario que foi cadastrado no banco de dados
| senha | sim | string | A senha do usuario que foi cadastrado no banco de dados

**Códigos da Resposta**
|código|descrição
|-|-
200 | o login foi realizado com sucesso
400 | os dados enviados são inválidos

### Cadastro de Usuario

`POST` my-donations/api/v1/usuario/registrar

**Exemplo de Entrada**

```js
{
	"nome": "Nome",
  "cpf": "000.000.000-00",
  "email": "email@email.com",
  "telefone": "(11) 99123-4567",
  "nascimento": "2000-05-31",
  "senha": "123456",
  "endereco": "São Paulo"
}
}
```

**Campos de Requisição**
| Campo | Obrigatório | Tipo | Descrição |
|-------|:-------------:|-------|-----------|
| nome | sim | string | O nome completo do usuário
| cpf | sim | string | O cpf do usuário
| email | sim | string | O email do usuário
| telefone | sim | string | O telefone do usuário
| nascimento | sim | string | A data de nascimento do usuário
| senha | sim | string | A senha do usuário
| endereco | sim | string | O endereço do usuário

**Códigos da Resposta**
|código|descrição
|-|-
200 | o usuário foi cadastrada com sucesso
400 | os dados enviados são inválidos

### Visualizar Usuario

`GET` my-donations/api/v1/usuario

**Exemplo de Saida**

```js
{
	"id": 1,
	"nome": "nome",
	"cpf": "000.000.000-00",
	"email": "email@email.com",
	"telefone": "(11) 99123-4567",
	"nascimento": "2000-05-31",
	"senha": "$2a$10$qQ9Jpddv6rClolfJzSlsqeUbsHOwRQKF8OGYQRS3e7IWimbnPAY/S",
	"endereco": "São Paulo"
}
```

**Códigos da Resposta**
|código|descrição
|-|-
| 200 | os dados do usuário logado foram retornados
| 404 | não existe usuário com o ID informado

### Visualizar Usuario por Id

`GET` my-donations/api/v1/usuario/{id}

**Exemplo de Saida**

```js
{
	"id": 2,
	"nome": "nome2",
	"cpf": "000.000.000-01",
	"email": "email2@email.com",
	"telefone": "(11) 99123-9876",
	"nascimento": "2001-09-19",
	"senha": "$2a$10$qQ9Jpddv6rClolfJzSlsqeUbsHOwRQKF8OGYQRS3e7IWimbnPAY/S",
	"endereco": "São Paulo"
}
```

**Códigos da Resposta**
|código|descrição
|-|-
| 200 | os dados do usuário com o id informado foram retornados
| 404 | não existe usuário com o id informado

### Editar Usuario

`PUT` my-donations/api/v1/usuario

**Exemplo de Entrada**

```js
{
	"id": 1,
	"nome": "nome",
	"cpf": "000.000.000-00",
	"email": "email@email.com",
	"telefone": "(11) 99123-4567",
	"nascimento": "2000-05-31",
	"senha": "$2a$10$qQ9Jpddv6rClolfJzSlsqeUbsHOwRQKF8OGYQRS3e7IWimbnPAY/S",
	"endereco": "São Paulo"
}
```

**Campos de Requisição**
| Campo | Obrigatório | Tipo | Descrição |
|-------|:-------------:|-------|-----------|
| nome | sim | string | O nome completo do usuário
| cpf | sim | string | O cpf do usuário
| email | sim | string | O email do usuário
| telefone | sim | string | O telefone do usuário
| nascimento | sim | string | A data de nascimento do usuário
| senha | sim | string | A senha do usuário
| endereco | sim | string | O endereço do u

**Códigos da Resposta**
|código|descrição
|-|-
| 200 | os dados do usuário foram atualizados
| 404 | não existe usuário com o ID informado

### Excluir Usuario

`DELETE` my-donations/api/v1/usuario

**Códigos da Resposta**
|código|descrição
|-|-
| 200 | os dados do usuário foram excluídos
| 202 | os dados do usuário foram encontrados mas não ainda excluídos
| 204 | houve a ação de excluir mas os dados do usuário não foram encontrados

### Cadastro de Produtos

`POST` my-donations/api/v1/produto

**Exemplo de Entrada**

```js
{
	"usuario": {
		"id": 1,
	},
	"nome": "Arroz",
	"categoria": "Cereais",
	"validade": "2023-12-15",
	"cheiro": 5,
	"aparencia": 4,
	"consistencia": 3,
	"embalagem": 4,
	"qualidade": 5,
	"descricao": "Pacote de arroz novo e fechado",
}
```

**Campos de Requisição**
| Campo | Obrigatório | Tipo | Descrição |
|-------|:-------------:|-------|-----------|
| usuario | sim | object | O objeto contendo o id do usuáiro
| id | sim | int | O id do usuáiro dentro do objeco
| nome | sim | string | O nome do produto
| categoria | sim | string | A categoria do produto
| validade | sim | string | A data de validade do produto
| cheiro | sim | int | O valor da definição das possibilidades do cheiro
| aparencia | sim | int | O valor da definição das possibilidades da aparência
| consistencia | sim | int | O valor da definição das possibilidades da consistência
| embalagem | sim | int | O valor da definição das possibilidades da embalagem
| qualidade | sim | int | O valor da definição das possibilidades da qualidade
| descricao | não | string | A descrição do produto

**Códigos da Resposta**
|código|descrição
|-|-
201 | o produto foi cadastrado com sucesso
400 | os dados enviados são inválidos

### Listar Produtos

`GET` my-donations/api/v1/produto

**Exemplo de Saida**

**Exemplo de Saida**

```js
[
  {
    "usuario": {
      "id": 1,
      "nome": 'nome',
      "cpf": '000.000.000-00',
      "email": 'email@email.com',
      "telefone": '(11) 99123-4567',
      "nascimento": '2000-05-31',
      "senha": '$2a$10$qQ9Jpddv6rClolfJzSlsqeUbsHOwRQKF8OGYQRS3e7IWimbnPAY/S',
      "endereco": 'São Paulo'
    },
    "nome": 'Arroz',
    "categoria": 'Cereais',
    "validade": '2023-12-15',
    "cheiro": 5,
    "aparencia": 4,
    "consistencia": 3,
    "embalagem": 4,
    "qualidade": 5,
    "descricao": 'Pacote de arroz novo e fechado'
  },
  {
    "usuario": {
      "id": 1,
      "nome": 'nome',
      "cpf": '000.000.000-00',
      "email": 'email@email.com',
      "telefone": '(11) 99123-4567',
      "nascimento": '2000-05-31',
      "senha": '$2a$10$qQ9Jpddv6rClolfJzSlsqeUbsHOwRQKF8OGYQRS3e7IWimbnPAY/S',
      "endereco": 'São Paulo'
    },
    "nome": 'Feijão',
    "categoria": 'Cereais',
    "validade": '2024-01-25',
    "cheiro": 4,
    "aparencia": 3,
    "consistencia": 5,
    "embalagem": 5,
    "qualidade": 4,
    "descricao": 'Pacote de feijão novo e fechado'
  }
]
```

**Códigos da Resposta**
|código|descrição
|-|-
200 | os dados dos produtos foram retornados
404 | não existe produto com o id informado

### Visualizar Produto por Id

`GET` my-donations/api/v1/produto/{id}

**Exemplo de Saida**

```js
{
  "usuario": {
    "id": 1,
    "nome": 'nome',
    "cpf": '000.000.000-00',
    "email": 'email@email.com',
    "telefone": '(11) 99123-4567',
    "nascimento": '2000-05-31',
    "senha": '$2a$10$qQ9Jpddv6rClolfJzSlsqeUbsHOwRQKF8OGYQRS3e7IWimbnPAY/S',
    "endereco": 'São Paulo'
  },
  "nome": 'Arroz',
  "categoria": 'Cereais',
  "validade": '2023-12-15',
  "cheiro": 5,
  "aparencia": 4,
  "consistencia": 3,
  "embalagem": 4,
  "qualidade": 5,
  "descricao": 'Pacote de arroz novo e fechado'
}
```

**Códigos da Resposta**
|código|descrição
|-|-
| 200 | os dados do produto com o id informado foram retornados
| 404 | não existe produto com o id informado

### Editar Produtos

`PUT` my-donations/api/v1/produto/{id}

**Exemplo de Entrada**

```js
{
  "usuario": {
    "id": 1,
  },
  "nome": 'Arroz',
  "categoria": 'Cereais',
  "validade": '2023-12-15',
  "cheiro": 5,
  "aparencia": 4,
  "consistencia": 3,
  "embalagem": 4,
  "qualidade": 5,
  "descricao": 'Pacote de arroz novo e fechado'
}
```

**Campos de Requisição**
| Campo | Obrigatório | Tipo | Descrição |
|-------|:-------------:|-------|-----------|
| usuario | sim | object | O objeto contendo o id do usuáiro
| id | sim | int | O id do usuáiro dentro do objeco
| nome | sim | string | O nome do produto
| categoria | sim | string | A categoria do produto
| validade | sim | string | A data de validade do produto
| cheiro | sim | int | O valor da definição das possibilidades do cheiro
| aparencia | sim | int | O valor da definição das possibilidades da aparência
| consistencia | sim | int | O valor da definição das possibilidades da consistência
| embalagem | sim | int | O valor da definição das possibilidades da embalagem
| qualidade | sim | int | O valor da definição das possibilidades da qualidade
| descricao | não | string | A descrição do produto

**Códigos da Resposta**
|código|descrição
|-|-
| 200 | os dados do produto foram atualizados
| 404 | não existe produto com o ID informado

### Excluir Produto

`DELETE` my-donations/api/v1/produto/{id}

**Códigos da Resposta**
|código|descrição
|-|-
| 200 | os dados do produto foram excluídos
| 202 | os dados do produto foram encontrados mas não ainda excluídos
| 204 | houve a ação de excluir mas os dados do produto não foram encontrados
