
async function profileGet (email, password) {
  const url = 'https://127.0.0.1:443';

  function compressData (data) {
    const zlib = require('zlib');
    data = JSON.stringify(data);
    return zlib.deflateSync(data);
  }

  try {
    const headers = {
      'Content-Type': 'application/json',
      'Content-Encoding': 'deflate'
    };
    return await fetch(`${url}/launcher/profile/get`, {
      headers,
      method: 'POST',
      body: compressData({ email, password })
    }).then(response => response.json());
  } catch (error) {
    console.log(error);
  }
}

async function App () {
  const get = await profileGet('alex', '');
  console.log(get);
}
App();
