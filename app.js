const zlib = require('zlib');

async function profileLogin (email, password) {
  const data = JSON.stringify({ email, password });
  const compressedData = zlib.deflateSync(data); // Compacta os dados com zlib

  await fetch('https://127.0.0.1:443/launcher/profile/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Encoding': 'deflate' // Informa ao backend que os dados estão compactados
    },
    body: compressedData
  }).then(async (response) => {
    console.log(await response.text());
  });
}

profileLogin('at', '');
