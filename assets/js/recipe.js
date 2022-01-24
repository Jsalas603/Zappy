
//show recipes when choose calories
var lowCaloriesButton =document.getElementById('low-calories');

var lowList = document.getElementById("low-recipe-list-container");
var averageList = document.getElementById("average-recipe-list-container")
var highList = document.getElementById("high-recipe-list-container")

var fortuneModal = document.getElementById('fortune-modal');
var ingredientsEl = document.getElementById('ingredients');
var instructionsEl = document.getElementById('instructions');
var recipeImageEl = document.getElementById('recipe-image');

var selectedRecipeId;

var showUserName = function() {

    // Pull user info from local storage and display username on page
    var userInfo = localStorage.getItem("userInfo");
    document.querySelector(".cook-text").textContent = "Let's cook, " + JSON.parse(userInfo).userName + "!";
}

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

function displayFortuneModal(recipeId) {
    selectedRecipeId = recipeId;
    fortuneModal.style.display = 'block';
    getFortune().then(fortune => {
        var fortuneMessageEl = document.getElementById('fortune-message');
        fortuneMessageEl.textContent = fortune.data.prediction.result;
    });
}


var fortuneButton = document.getElementById('fortune-button'); 
fortuneButton.onclick= function() {
    fortuneModal.style.display = 'none';
    getRecipe(selectedRecipeId).then(recipe => {
        var recipeImages = recipe.thumbnail_url;
        var ingredients = recipe.sections[0].components;
        var instructions = recipe.instructions;

        while (recipeImageEl.firstChild) {
            recipeImageEl.removeChild(recipeImageEl.firstChild);
        }
        while (ingredientsEl.firstChild) {
            ingredientsEl.removeChild(ingredientsEl.firstChild);
        }

        while (instructionsEl.firstChild) {
            instructionsEl.removeChild(instructionsEl.firstChild);
        }

        var recipeImage = document.createElement('img');
        recipeImage.src = recipeImages;
        recipeImageEl.append(recipeImage) 
        console.log (recipeImageEl);

        var ingredientText = document.createElement('h3');
        ingredientText.classList.add("text");
        ingredientText.textContent= "Ingredients: ";
        ingredientsEl.append(ingredientText)


        ingredients.forEach(measurements => {
            console.log('ingredient', measurements.raw_text);
            var ingredientEl = document.createElement('div');
            ingredientEl.textContent = measurements.raw_text;
            ingredientsEl.append(ingredientEl)
        });

        var instructionText = document.createElement('h3');
        instructionText.classList.add("text");
        instructionText.textContent= "Instructions: ";
        instructionsEl.append(instructionText)

        instructions.forEach(instruction => {
            console.log('instruction', instruction.display_text);
            var instructionEl = document.createElement('div');
            instructionEl.textContent = instruction.display_text;
            instructionsEl.append(instructionEl)
        });
    });
}

//get instruction when click on recipe
function getRecipe(recipeId) {
    return fetch(`https://tasty.p.rapidapi.com/recipes/detail?id=${recipeId}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tasty.p.rapidapi.com",
           // "x-rapidapi-key": "152c498cf3msh0f5746cfa2f4dcfp1e760cjsn3620d249e86f"
            "x-rapidapi-key": "2ce3aceaafmsh735dd48b8aa1b5fp14cc1bjsne82d5623efde"
        }
    })
    .then(response => {
        return response.json().then((data) => {
            console.log(data);
            return data;
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

// getRecipe(lowCalRecipes["one-pot-garlic-parmesan-pasta"]);

//get fortune cookies
function getFortune() {
    return fetch("https://fortune-cookie.p.rapidapi.com/api/1.0/get_fortune_cookie.php", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "x-rapidapi-host": "fortune-cookie.p.rapidapi.com",
          
            "x-rapidapi-key": "99f96aae53msh9a0e5b42e091eeep12e261jsn062edb68215d"
        },
        "body": "api_key=9de6d14fff9806d4bcd1ef555be766cd"
    })
    .then(response => {
        console.log('response', response)
        return response.json().then((data) => {
            console.log('fortune', data);
            return data;
        });
    })
    .catch(err => {
        console.error(err);
    });
}
// getFortune();

showUserName();