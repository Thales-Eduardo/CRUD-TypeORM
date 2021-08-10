# Produtos

[Documentação](./docs/doc.md)

**Requisito Funcionais.**

- [x] = Criar um produto com sua categoria.

- [] = Criar uma migration para adicionar uma coluna, avatar.

- [] = Adicionar Foto do produto.

- [x] = Listar todos os produtos a partir do id da categoria.

- [] = Listar todas as categorias a partir do id ou nome da categoria.

- [] = Atualizar o nome da categoria e os produtos.

- [] = validar dados na rotas.

- [] = Para atualizar o produto sera necessário o id do produto.

- [] = Para deletar o produto sera necessário o id do produto.

- [] = Para listar os produtos da categoria, sera necessário id da categoria.

**Requisito Não Funcionais.**

- [x] = Para Criar, deletar, etc. Usar o `TypeORM`.

- [x] = Banco de dados `PostgreSQL`.

- [] = Para salvar a foto no disco, usar o `multer`.

- [] = Para testes usar o `jest`.

- [x] = Injeção de dependência com `tsyringe`.

- [] = Para validar os dados usar o `celebrate`.

- [] = Usar `transformer` para controlar as respostas.

**Regra de Negócios.**

- [x] = Somente criar se a categoria não existir no banco.

- [x] = Ao criar produto deve criar junto a categoria do produto.

- [] = Para criar um avatar do produto deve checar se o produto existe.

- [] = Para atualizar produto deve checar se o produto existe.

- [] = Para deletar produto deve checar se o produto existe.

- [x] = Para listar os produtos o id da categoria deve ser igual ao category_id da tabela products.
