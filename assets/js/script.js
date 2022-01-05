var getProducts = function(products) {
    var priceApiUrl ="https://api.kroger.com/v1/products";
    fetch(priceApiUrl).then(function(response) {
        console.log ("products");
    })
};

getProducts();