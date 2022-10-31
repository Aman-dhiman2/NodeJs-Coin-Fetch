
/* Example in Node.js */
const axios = require('axios');


let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get(
      "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "9cbdb624-b8c8-4879-8690-9416196074f6",
        },
      }
    );
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
      console.log(json);
       let coinsData = json.data;

        if (coinsData.length > 0) {
          var cryptoCoin = "";
        }
        
      coinsData.forEach((coin) => {
          cryptoCoin += "<tr>";
          cryptoCoin += `<td> ${coin.uuid} </td>`;
          cryptoCoin += `<td> ${coin.btcPrice} </td>`;
          cryptoCoin += `<td> ${coin.rank}</td>`;
          cryptoCoin += `<td> ${coin.tier} </td>`;
          cryptoCoin += `<td> ${coin.name}</td>`;
          cryptoCoin += `<td> $${Math.round(coin.price)} Billion</td>`;
          cryptoCoin += `<td> ${coin.symbol}</td>`;
          ("<tr>");
        });
        //For Loop Ends
        document.getElementById("data").innerHTML = cryptoCoin;
    
    resolve(json);
  }
});