# doc 0.0.1

# Criar produtos. ...sem o avatar

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

response.

```json
[
  {
    "id": "f3453d0a-8eb6-488e-8fa5-4f3fad870cdb",
    "name": "bola",
    "category_id": "3d12ef05-b86f-41b2-b32b-2beabf1e3795",
    "price": "12.00",
    "value": "2",
    "created_at": "2021-08-09T19:31:26.308Z",
    "updated_at": "2021-08-09T19:31:26.308Z"
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
