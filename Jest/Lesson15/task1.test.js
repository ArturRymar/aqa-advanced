const axios = require('axios');

let invalidUrl = "invalid url"

test('Show error message for invalid url on GET', async () => {
  try {
    const response = await axios.get(`${invalidUrl}`);
    expect(response.status).toBe(200);
  } catch {
    console.error('Error - Your requested not valid URL');
  }
});

