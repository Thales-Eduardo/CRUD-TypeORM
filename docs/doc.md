# Documentação 1.0.0

# Criar produtos.

- **Método** = `Post`

- **url** = http://localhost:3333/create

request.

```json
{
  "name": "Bike",
  "category": "Esportes",
  "price": 13.1,
  "value": 2
}
```

response.

```json
{
  "name": "Bike",
  "category_id": "ed9ff589-3afa-4278-92ae-fc6f14612636",
  "price": 13.1,
  "value": 2,
  "category": {
    "id": "ed9ff589-3afa-4278-92ae-fc6f14612636",
    "category": "Esportes",
    "created_at": "2021-08-14T19:47:55.781Z",
    "updated_at": "2021-08-14T19:47:55.781Z"
  },
  "id": "9446fa8c-786b-4235-8792-dae5094eef34",
  "created_at": "2021-08-14T19:50:54.386Z",
  "updated_at": "2021-08-14T19:50:54.386Z",
  "avatarUrl": null
}
```

---

# Listar todos os produtos.

- **Método** = `Get`

- **Url** = http://localhost:3333/list/:id?page=1&limit=2

- Essa rota contem paginação, `page` => qual a página, `limit` => quantos itens por requisição, se as querys não for passada por padrão `page` = 1 e `limit` = 10 itens.

> O id que deve passar no parâmetro da (URL) e da categoria que deseja listar os produtos.

request.

```js
axios
  .get(`/list/${id}`, {
    params: {
      page: 1,
      limit: 2,
    },
  })
  .then((res) => {
    console.log(res);
  });
```

response.

```json
[
  {
    "id": "7ba21b44-f1eb-48c7-9848-26c92bb60651",
    "name": "bola",
    "category_id": "ed9ff589-3afa-4278-92ae-fc6f14612636",
    "price": "13.10",
    "value": "2",
    "avatar": null,
    "created_at": "2021-08-14T19:50:39.953Z",
    "updated_at": "2021-08-14T19:50:39.953Z",
    "avatarUrl": null
  },
  {
    "id": "9446fa8c-786b-4235-8792-dae5094eef34",
    "name": "Bike",
    "category_id": "ed9ff589-3afa-4278-92ae-fc6f14612636",
    "price": "13.10",
    "value": "2",
    "avatar": null,
    "created_at": "2021-08-14T19:50:54.386Z",
    "updated_at": "2021-08-14T19:50:54.386Z",
    "avatarUrl": null
  }
]
```

---

# Listar todos as categorias.

- **Método** = `Get`

- **Url** = http://localhost:3333/categories?page=1&limit=2

- Essa rota contem paginação, `page` => qual a página, `limit` => quantos itens por requisição, se as querys não for passada por padrão `page` = 1 e `limit` = 10 itens.

request.

```js
axios
  .get('/categories', {
    params: {
      page: 1,
      limit: 2,
    },
  })
  .then((res) => {
    console.log(res);
  });
```

response.

```json
[
  {
    "id": "3d12ef05-b86f-41b2-b32b-2beabf1e3795",
    "category": "esportes",
    "created_at": "2021-08-09T19:31:26.249Z",
    "updated_at": "2021-08-09T19:31:26.249Z"
  },
  {
    "id": "173c6786-803e-4bf5-93f3-6ad804c9548b",
    "category": "hardware",
    "created_at": "2021-08-11T00:41:12.409Z",
    "updated_at": "2021-08-11T00:41:12.409Z"
  }
]
```

---

# Atualizar categoria e produto.

- **Método** = `Put`

- **url** = http://localhost:3333/update/:id

> O id que deve passar nos parâmetros da (URL) deve ser o id do produto.

request.

```json
{
  "name": "Bola",
  "category": "Esportes",
  "price": 13.1,
  "value": 6
}
```

response.

```json
{
  "id": "2938b6d1-e03d-4d30-9ff7-3db04e034ff7",
  "name": "Bola",
  "category_id": "ed9ff589-3afa-4278-92ae-fc6f14612636",
  "price": 13.1,
  "value": 6,
  "avatar": null,
  "created_at": "2021-08-14T19:47:55.839Z",
  "updated_at": "2021-08-14T19:49:17.734Z",
  "avatarUrl": null
}
```

---

# Deletar produto.

- **Método** = `Delete`

- **url** = http://localhost:3333/delete/:id

> O id que deve passar nos parâmetros da (URL) deve ser o id do produto.

response.

status code `204`.

---

# Adicionar avatar ao produto.

- **Método** = `Patch`

- **url** = http://localhost:3333/avatar/:id

> O id que deve passar nos parâmetros da (URL) deve ser o id do produto.

Para ver o arquivo estático http://localhost:3333/files/nomeDaFoto.png

request.

`MultPart`

"avatar" `file`

response.

```json
{
  "id": "2938b6d1-e03d-4d30-9ff7-3db04e034ff7",
  "name": "Bola",
  "category_id": "ed9ff589-3afa-4278-92ae-fc6f14612636",
  "price": "13.10",
  "value": "6",
  "avatar": "97dfc23d2ce6c5fc10d7-21-215651_madara-uchiha-wallpaper-4k.jpg",
  "created_at": "2021-08-14T19:47:55.839Z",
  "updated_at": "2021-08-14T19:49:53.298Z",
  "avatarUrl": "http://localhost:3333/files/97dfc23d2ce6c5fc10d7-21-215651_madara-uchiha-wallpaper-4k.jpg"
}
```
