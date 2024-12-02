const zlib = require('zlib');

function compressData (data) {
  data = JSON.stringify(data);
  return zlib.deflateSync(data);
}

module.exports = compressData;
