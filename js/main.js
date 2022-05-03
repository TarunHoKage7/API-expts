//remember to add carousel functionality using setInterval and clearInterval when you find the time.

//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let cur = 0;
document.querySelector("#searchButton").addEventListener("click",searchCocktail());
document.querySelector("#rightClick").addEventListener("click",goRight);
document.querySelector("#leftClick").addEventListener("click",goLeft);

function searchCocktail(temp = 0){
  let nameOfTheCocktail = document.querySelector("input").value.toLowerCase();
  nameOfTheCocktail = nameOfTheCocktail.replace(" ","%20")
  console.log(nameOfTheCocktail)
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameOfTheCocktail}`)
  .then(res => res.json())
  .then(data =>
    {
      console.log(`this is the currr ${temp}`)
      console.log(temp)
      console.log(data.drinks)
      document.querySelector("#searchButton").innerText = "I see"
      document.querySelector("h2").innerText = data.drinks.at(temp).strDrink;
      document.querySelector("img").src = data.drinks.at(temp).strDrinkThumb;
      document.querySelector("h3").innerText = data.drinks.at(temp).strInstructions;
      document.querySelector("p").innerText = data.drinks.at(temp).strIngredient1;
    })
    .catch(err => {
      console.log(`error ${err}`)
  });
}

function goLeft(){
  if(cur > -24){
    cur -= 1;
    searchCocktail(cur);
  }
  else{
    cur = 0;
    searchCocktail(cur);
  }
}

function goRight(){
  if(cur<24){
    cur += 1;
    searchCocktail(cur);
  }
  else{
    cur = 0;
    searchCocktail(cur);
  }
}