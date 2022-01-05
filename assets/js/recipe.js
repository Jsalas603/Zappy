
//show recipes when choose calories
var lowCaloriesButton =document.getElementById('low-calories');

var lowList = document.getElementById("low-recipe-list-container");
var averageList = document.getElementById("average-recipe-list-container")
var highList = document.getElementById("high-recipe-list-container")

lowCaloriesButton.onclick = function(event) {
    console.log("click")
    if (lowList.style.display == "none") {
        lowList.style.display = "block";
        averageList.style.display = 'none';
        highList.style.display = 'none';
    } else {
        lowList.style.display = "none";
    }
}

var averageCaloriesButton =document.getElementById('average-calories');
averageCaloriesButton.onclick = function(event) {
    console.log("click")
    
    if (averageList.style.display === "none") {
        averageList.style.display = "block";
        lowList.style.display = 'none';
        highList.style.display = 'none';
      } else {
        averageList.style.display = "none";
      }
}

var highCaloriesButton =document.getElementById('high-calories');
highCaloriesButton.onclick = function(event) {
    console.log("click")
    
    if (highList.style.display === "none") {
        highList.style.display = "block";
        averageList.style.display = 'none';
        lowList.style.display = 'none';
      } else {
        highList.style.display = "none";
      }
}

//get instruction when click on recipe
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
            // data.sections[0].components.forEach(({ ingredient }) => {
            //     console.log('ingredient', ingredient);
            // });
        })
    })
    .catch(err => {
        console.error(err);
    }); 
}

//recipes for each calorie category
var lowCalRecipes = {
    "chicken-stir-fry": 7214,
    "avocado-quinoa-power-salad": 3932,
    "one-pot-garlic-parmesan-pasta": 2932,
    "lemon-chicken-and-asparagus-stir-fry":534,
}

var averageCalRecipes = {
    "classic-baked-mac-and-cheese": 8031,
    "enchilada-inspired-stuffed-shells": 2046,
    "Devil-curry": 7997,
    "cauliflowe-walnut-burritos": 4743,
}

var highCalRecipes = {
    "french-pepper-steak": 2862,
    "country-fried-steak-and-gravy": 5157,
    "roasted-garlic-and-herb-pork-roast" : 7963,
}

getRecipe(lowCalRecipes["one-pot-garlic-parmesan-pasta"]);

//get fortune cookies
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