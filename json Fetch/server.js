var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://static.coinpaper.io/api/coins.json", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));