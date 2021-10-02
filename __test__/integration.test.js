const axios = require('axios').default;

const url = 'http://localhost:3333';

describe('Integration tests', () => {
  it('Create products and category.', async () => {
    const product = await axios.post(`${url}/create`, {
      name: 'Bike',
      category: 'Esportes',
      price: 13.2,
      value: 2,
    });

    const productData = product.data;
    expect(productData).toHaveProperty('id');
    expect(productData.name).toBe('Bike');
    expect(productData.category.id).toEqual(productData.category_id);

    await axios.delete(`${url}/delete/${productData.id}`);
  });

  it('List products of a category by category id.', async () => {
    const product1 = await axios.post(`${url}/create`, {
      name: 'Bike',
      category: 'Esportes',
      price: 13.2,
      value: 2,
    });

    const product2 = await axios.post(`${url}/create`, {
      name: 'Skate',
      category: 'Esportes',
      price: 13.2,
      value: 2,
    });

    const products = await axios.get(
      `${url}/list/${product1.data.category_id}`,
      {
        params: {
          page: 1,
          limit: 2,
        },
      },
    );

    const productData = products.data;
    expect(productData).toHaveLength(2);

    await axios.delete(`${url}/delete/${product1.data.id}`);
    await axios.delete(`${url}/delete/${product2.data.id}`);
  });

  it('list all categories.', async () => {
    const product1 = await axios.post(`${url}/create`, {
      name: 'Bike',
      category: 'Esportes',
      price: 13.2,
      value: 2,
    });

    const product2 = await axios.post(`${url}/create`, {
      name: 'raspberry pi 4',
      category: 'Hardware',
      price: 130.2,
      value: 2,
    });

    const products = await axios.get(`${url}/categories`, {
      params: {
        page: 1,
        limit: 2,
      },
    });

    const productData = products.data;
    expect(productData).toHaveLength(2);
    expect(products.status).toBe(200);

    await axios.delete(`${url}/delete/${product1.data.id}`);
    await axios.delete(`${url}/delete/${product2.data.id}`);
  });

  it('Update category and product.', async () => {
    const product = await axios.post(`${url}/create`, {
      name: 'Bike',
      category: 'Esportes',
      price: 13.2,
      value: 2,
    });

    const productData = product.data;

    const update = await axios.put(`${url}/update/${productData.id}`, {
      name: 'Bola',
      category: 'Esportes',
      price: 13.1,
      value: 6,
    });

    expect(update.data.name).toBe('Bola');

    await axios.delete(`${url}/delete/${productData.id}`);
  });

  it('Delete a product.', async () => {
    const product = await axios.post(`${url}/create`, {
      name: 'Bike',
      category: 'Esportes',
      price: 13.2,
      value: 2,
    });

    const response = await axios.delete(`${url}/delete/${product.data.id}`);

    expect(response.status).toBe(204);
  });
});
