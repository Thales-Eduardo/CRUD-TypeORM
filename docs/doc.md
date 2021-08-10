# doc 0.0.1

- Criar produtos. ...sem o avatar

url = http://localhost:3333/create

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
