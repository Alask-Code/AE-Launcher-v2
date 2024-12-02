const compressData = require('./scripts/compressData');

async function profileGet (email, password) {
  const url = 'https://127.0.0.1:443';
  const headers = {
    'Content-Type': 'application/json',
    'Content-Encoding': 'deflate'
  };
  try {
    return await fetch(
      `${url}/launcher/profile/get`,
      {
        headers,
        method: 'POST',
        body: compressData({ email, password })
      }).then(response => response.json());
  } catch (error) { console.log('Failed to fetch.'); }
}

async function App () {
  const get = await profileGet('alex', '');
  console.log(get);
}
App();
