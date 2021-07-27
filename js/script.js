const form = document.querySelector("form");

const recipes = [
  {
    name: "First Recipe",
    description: "Recipe Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, tortor a ultrices imperdiet, purus sapien faucibus ante, vitae scelerisque.",
    image: "heron.jpg",
    ingredients: [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
    ],
    steps: ["one", "two", "three", "four", "five", "six", "seven", "eight"],
  },

  {
    name: "Second Recipe",
    description: "Recipe Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, tortor a ultrices imperdiet, purus sapien faucibus ante, vitae scelerisque.",
    image: "heron.jpg",
    ingredients: [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
    ],
    steps: ["one", "two", "three", "four", "five", "six", "seven", "eight"],
  },
  {
    name: "Third Recipe",
    description: "Recipe Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, tortor a ultrices imperdiet, purus sapien faucibus ante, vitae scelerisque.",
    image: "heron.jpg",
    ingredients: [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
    ],
    steps: ["one", "two", "three", "four", "five", "six", "seven", "eight"],
  },
  {
    name: "Fourth Recipe",
    description: "Recipe Description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis, tortor a ultrices imperdiet, purus sapien faucibus ante, vitae scelerisque.",
    image: "heron.jpg",
    ingredients: [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
    ],
    steps: ["one", "two", "three", "four", "five", "six", "seven", "eight"],
  },
];

const displayRecipes = () => {
    let container = document.getElementById("recipeContainer")

    let html = ""

    recipes.map((recipe) => {
        let ingredientList = ""
        recipe.ingredients.forEach((ingredient) => {
            ingredientList += `<li>${ingredient}</li>`
        })

        let stepList = ""
        recipe.steps.forEach((step) => {
            stepList += `<li>${step}</li>`
        })


            html += `<div class="recipe">
        <div class="recipeHeader">
            <div class="overlay"></div>
            <img class="pic" src="${recipe.image}"/>
            <div class="recipeDescription">
            <h2>${recipe.name}</h2>
            <p class="descrip">${recipe.description}</p>
            </div>
        </div>
        <div class="instructions">
            <div>
                <h4>Ingredients</h4>
                <ul class="ingredients">
                ${ingredientList}
                </ul>
            </div>
            <div>
                <h4 class="prep">To Prepare the Food...</h4>
                <ol>
                ${stepList}
                </ol>
            </div>
        </div>
    </div>`
})
container.innerHTML += html
}
displayRecipes()

const validateForm = () => {
  const emailInput = document.getElementById("emailInput").value;
  const messageInput = document.getElementById("message").value;

  if (!emailInput.includes("@") || !(emailInput.length > 4)) {
    alert("Please enter a valid email");
  } else if (!messageInput.length) {
    alert("Please include a message");
  } else {
    alert("Thank you for your feedback!");
  }
};
