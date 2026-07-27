const https = require('https');

const candidates = [
  'https://www.youtube.com/watch?v=33x2xV610wM',
  'https://www.youtube.com/watch?v=481S1E6q__o',
  'https://www.youtube.com/watch?v=f2nNf6M09kY',
  'https://www.youtube.com/watch?v=nL34zDTPkcs',
  'https://www.youtube.com/watch?v=vLnPwxZdW4w'
];

candidates.forEach((url) => {
  https.get(url, (res) => {
    console.log(`URL: ${url} -> Status: ${res.statusCode}`);
  });
});
