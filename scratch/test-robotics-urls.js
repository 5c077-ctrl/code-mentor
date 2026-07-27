const https = require('https');

const urls = [
  'https://www.youtube.com/watch?v=33x2xV610wM',
  'https://www.youtube.com/watch?v=481S1E6q__o',
  'https://www.youtube.com/watch?v=f2nNf6M09kY',
  'https://www.youtube.com/watch?v=wfNV0xQflZ0',
  'https://www.youtube.com/watch?v=oXlwWbU8l2o'
];

urls.forEach((url) => {
  https.get(url, (res) => {
    console.log(`URL: ${url} -> Status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`URL: ${url} -> Error: ${err.message}`);
  });
});
