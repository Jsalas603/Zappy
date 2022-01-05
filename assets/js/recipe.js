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
        
            });
        })
    })
    .catch(err => {
        console.error(err);
    }); 
}


var lowCalories = {
    "chicken-stir-fry": 7214,
    "avocado-quinoa-power-salad": 3932
}

getRecipe(lowCalories["chicken-stir-fry"]);

function getFortune() {
    fetch("https://fortune-cookie.p.rapidapi.com/api/1.0/get_fortune_cookie.php", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "x-rapidapi-host": "fortune-cookie.p.rapidapi.com",
            "x-rapidapi-key": "152c498cf3msh0f5746cfa2f4dcfp1e760cjsn3620d249e86f"
        },
        "body": "api_key=9fd81843ad7f202f26c1a174c7357585"
    })
    .then(response => {
        console.log('response', response)
        response.json().then((data) => {
            console.log('fortune', data);
        });
    })
    .catch(err => {
        console.error(err);
    });
}
getFortune();