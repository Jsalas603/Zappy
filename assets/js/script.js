var getProducts = function(products) {
    var priceApiUrl =`https://api.kroger.com/v1/products?filter.term=${TERM}&filter.filter.zipCode.near=75082`;
    fetch(priceApiUrl).then(function(response) {
        console.log ("products");
    })
};

getProducts();

var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {from: '0', size: '20', tags: 'under_30_minutes'},
  headers: {
    'x-rapidapi-host': 'tasty.p.rapidapi.com',
    'x-rapidapi-key': '152c498cf3msh0f5746cfa2f4dcfp1e760cjsn3620d249e86f'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});