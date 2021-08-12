# Documentação 1.0.0

# Criar produtos.

- **Método** = `Post`

- **url** = http://localhost:3333/create

request.

```json
{
  "name": "bola de basquete",
  "category": "esportes",
  "price": 13.0,
  "value": 2
}
```

response.

```json
{
  "name": "bola de basquete",
  "category_id": "3d12ef05-b86f-41b2-b32b-2beabf1e3795",
  "price": 13,
  "value": 2,
  "category": {
    "id": "3d12ef05-b86f-41b2-b32b-2beabf1e3795",
    "category": "esportes",
    "created_at": "2021-08-09T19:31:26.249Z",
    "updated_at": "2021-08-09T19:31:26.249Z"
  },
  "id": "3e02c2e7-daf5-41fd-951c-4c96d1adc8f8",
  "created_at": "2021-08-09T19:37:50.898Z",
  "updated_at": "2021-08-09T19:37:50.898Z"
}
```

---

# Listar todos os produtos.

- **Método** = `Get`

- **Url** = http://localhost:3333/list/:id

O id passa no parâmetro da (URL) e da categoria que deseja listar os produtos.

response.

```json
[
  {
    "id": "7f2b00d6-01ed-4d36-b43c-ed6862c48e2a",
    "name": "Bola",
    "category_id": "3d12ef05-b86f-41b2-b32b-2beabf1e3795",
    "price": "13.10",
    "value": "6",
    "avatar": null,
    "created_at": "2021-08-12T18:34:56.440Z",
    "updated_at": "2021-08-12T18:35:08.238Z"
  }
]
```

---

# Listar todos as categorias.

- **Método** = `Get`

- **Url** = http://localhost:3333/categories

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

# Atualizar categoria e produto.

- **Método** = `Put`

- **url** = http://localhost:3333/update/:id

O id que deve passar nos parâmetros da (URL) deve ser o id do produto que deseja atualizar.

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
  "product": {
    "id": "7f2b00d6-01ed-4d36-b43c-ed6862c48e2a",
    "name": "Bola",
    "category_id": "3d12ef05-b86f-41b2-b32b-2beabf1e3795",
    "price": 13.1,
    "value": 6,
    "avatar": null,
    "created_at": "2021-08-12T18:34:56.440Z",
    "updated_at": "2021-08-12T18:35:08.238Z"
  },
  "categoryId": {
    "id": "3d12ef05-b86f-41b2-b32b-2beabf1e3795",
    "category": "Esportes",
    "created_at": "2021-08-09T19:31:26.249Z",
    "updated_at": "2021-08-11T18:22:44.032Z"
  }
}
```

# Deletar produto.

- **Método** = `Delete`

- **url** = http://localhost:3333/delete/:id

O id que deve passar nos parâmetros da (URL) deve ser o id do produto que deseja deletar.

response.

status code `204`.

# Adicionar avtar ao produto.

- **Método** = `Patch`

- **url** = http://localhost:3333/avatar/:id

O id que deve passar nos parâmetros da (URL) deve ser o id do produto.

request.

`MultPart`

"avatar" `file`

response.

```json
{
  "id": "7f2b00d6-01ed-4d36-b43c-ed6862c48e2a",
  "name": "Bola",
  "category_id": "3d12ef05-b86f-41b2-b32b-2beabf1e3795",
  "price": "13.10",
  "value": "6",
  "avatar": "b1d48a43fd9f8a38a5e4-8f5f62d5b40af8b6e30ffb33982ac881.jpg",
  "created_at": "2021-08-12T18:34:56.440Z",
  "updated_at": "2021-08-12T18:35:25.072Z"
}
```
