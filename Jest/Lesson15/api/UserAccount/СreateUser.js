const axios = require('axios');

class User {
  constructor(baseUrl, userName, password) {
    this.baseUrl = baseUrl;
    this.userName = userName;
    this.password = password;
  }

  async createUser() {
    const response = await axios.post(`${this.baseUrl}/Account/v1/User`, {
      userName: this.userName,
      password: this.password,
    });
    return response;
  }

  async generateUserToken() {
    const response = await axios.post(
      `${this.baseUrl}/Account/v1/GenerateToken`,
      {
        userName: this.userName,
        password: this.password,
      }
    );
    return response;
  }
}

module.exports = User;
