function getRecipe(recipeId) {
    fetch(`https://tasty.p.rapidapi.com/recipes/detail?id=${recipeId}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tasty.p.rapidapi.com",
            "x-rapidapi-key": "152c498cf3msh0f5746cfa2f4dcfp1e760cjsn3620d249e86f"
        }
    })
    .then(response => {
        response.json().then((data) => {
            console.log(data)
            data.sections[0].components.forEach(({ ingredient }) => {
                console.log('ingredient', ingredient);
                getIngredients(ingredient.name);
            });
        })
    })
    .catch(err => {
        console.error(err);
    }); 
}

function getIngredients(ingredient) {
    fetch(`https://api.kroger.com/v1/products?filter.term=${ingredient}&filter.locationId=03500557&filter.limit=1`, {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ6YXBweS1kZDJlNzhhMzBhNGY5ZGRhZGJmZTY0Y2Q4Yzc1MzZiZjM0NDg0MDEzOTAwMzQwNzA2MTIiLCJleHAiOjE2NDEzNTg4MTEsImlhdCI6MTY0MTM1NzAwNiwiaXNzIjoiYXBpLmtyb2dlci5jb20iLCJzdWIiOiJkOWNmMDFiMy02Y2VhLTUxYWUtOGJkNy0yNDFhMjQwODBiYTkiLCJzY29wZSI6InByb2R1Y3QuY29tcGFjdCIsImF1dGhBdCI6MTY0MTM1NzAxMTI1NjQ5NDU1MSwiYXpwIjoiemFwcHktZGQyZTc4YTMwYTRmOWRkYWRiZmU2NGNkOGM3NTM2YmYzNDQ4NDAxMzkwMDM0MDcwNjEyIn0.LlYA4yUM8_fbdp87xULPL8SyAe_6xuGrGDIsLYpBTThjJMlb9yxm1mgnQ13r5Qdoelii31h9X28sO9NpazGzQwLFCTkIflEdA_1iobL1QdK6URXCKGjkDBmG-DWhxMrxRU4rCbdTu7x_usK2hddHsDSmgHR5jptGpGvtVeRnYQWe2rWkOAcyHt3yVjueD1kLGmV-ffWqJagW-dzLuphg-OCnztn2QtjChXK8xeMaMlAn6euYUd1yxCN4COT2t-sSjlIkHjF_8x6bvxjaG72G5_yXlajP8p24W3yy_H_b0yYh9FwQY--75L2qcdY6hKeyKj58K6anFCiMd-5jjS6o7Q"
        }
    }).then(response => {
        response.json().then((ingredientData) => {
            console.log('ingredientData', ingredientData);
        });
    }).catch(err => {
        console.error(err);
    })
}

var recipes = {
    "chicken-stir-fry": 7214,
    "avocado-quinoa-power-salad": 3932
}

getRecipe(recipes["avocado-quinoa-power-salad"]);