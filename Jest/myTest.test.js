const axios = require('axios');
const { baseUrl } = require('./env.json');
const { posts, comments, photos, users } = require('./resources.json');

describe('The posts, comment, foto are loaded', () => {
  test('I can load posts', async () => {
    const response = await axios.get(`${baseUrl}${posts}`);
    expect(response.status).toBe(200);
  });
  test('I can load comments', async () => {
    const response = await axios.get(`${baseUrl}${comments}`);
    expect(response.status).toBe(200);
  });
  test('I can load photos', async () => {
    const response = await axios.get(`${baseUrl}${photos}`);
    expect(response.status).toBe(200);
  });
});

describe('User can be created, fully or partially updated, deleted', () => {
  let newUser = {
    id: '',
    name: 'Artur Rymar',
    phone: 123456789,
    email: 'test@gmailcom',
    company: {
      name: 'AFK',
      catchPhrase: 'Client server oriented',
    },
  };

  test('I can create a new user', async () => {
    const response = await axios.post(`${baseUrl}${users}`, newUser);
    newUser.id = response.data.id;
    expect(response.status).toBe(201);
    expect(response.data).toStrictEqual(newUser);
  });

  test('I can partially update a user', async () => {
    const response = await axios.patch(`${baseUrl}${users}/1`, {
      email: 'updated@gmail.com',
    });
    expect(response.status).toBe(200);
    expect(response.data.email).toBe('updated@gmail.com');
  });

  test('I can fuully update a user', async () => {
    const response = await axios.put(`${baseUrl}${users}/2`, {
      name: 'updated name',
      email: 'updated@gmail.com',
    });
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('updated name');
    expect(response.data.phone).toBe(undefined);
  });

  test('I can delete a user', async () => {
    const response = await axios.delete(`${baseUrl}${users}/3`);
    expect(response.status).toBe(200);
    expect(response.data).toStrictEqual({});
  });
});
