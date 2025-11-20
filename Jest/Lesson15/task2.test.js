const axios = require('axios');
const { faker } = require('@faker-js/faker');
const User = require('./api/UserAccount/СreateUser');
const env = require('../Lesson15/env/env.json');

const user = new User(env.baseUrl, faker.internet.userName(), '1234d5678*354W');

describe('Homework 15', () => {
  test('User was registered and it`s token was generated', async () => {
    const responseCreateUser = await user.createUser();
    user.userId = responseCreateUser.data.userID;

    const responseGenerateUserToken = await user.generateUserToken();
    user.userToken = responseGenerateUserToken.data.token;

    const responseGetBookList = await axios.get(
      `${env.baseUrl}/BookStore/v1/Books`
    );

    const responseAddBook = await axios.post(
      `${env.baseUrl}/BookStore/v1/Books`,
      {
        userId: user.userId,
        collectionOfIsbns: [
          {
            isbn: responseGetBookList.data.books[0].isbn,
          },
        ],
      },
      {
        validateStatus: false,
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      }
    );
    expect(responseAddBook.data.books[0].isbn).toBe(
      responseGetBookList.data.books[0].isbn
    );
  });
});
