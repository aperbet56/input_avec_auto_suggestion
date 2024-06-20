// Récupération de l'élément section
const container = document.querySelector(".container");

// Création de la constante vegetables et de la variable userInput
const vegetables = [
  "ail",
  "artichaut",
  "asperge",
  "aubergine",
  "bette",
  "betterave",
  "brocoli",
  "carotte",
  "céleri",
  "chou",
  "chou-chinois",
  "chou-fleur",
  "chou-rave",
  "concombre",
  "courge",
  "courgette",
  "cresson",
  "endive",
  "epinard",
  "fenouil",
  "haricot",
  "laitue",
  "mâche",
  "maïs",
  "navet",
  "oignon",
  "panais",
  "pâtisson",
  "petit-pois",
  "poireau",
  "poivron",
  "potimarron",
  "potiron",
  "radis",
  "salsifis",
  "topinambour",
  "tomate",
];

let userInput = "";

// Création de l'élément HTML input
const inputItem = document.createElement("input");
// Ajout des attributs
inputItem.setAttribute("type", "text");
inputItem.setAttribute("name", "vegetable");
inputItem.setAttribute("placeholder", "Rechercher un légume  🥬");

// Création de l'élément HTML div
const suggestions = document.createElement("div");
// Ajout de la classe suggestions
suggestions.classList.add("suggestions");

// Création de l'élément HTML ul
const suggestionList = document.createElement("ul");

// Ajout des éléments HTML créés dans le DOM
suggestions.appendChild(suggestionList);
container.appendChild(inputItem);
container.appendChild(suggestions);

// Déclaration de la fonction searchVegetable qui va permettre de rechercher un légume
const searchVegetable = (e) => {
  userInput = e.target.value.toLowerCase();
  suggestionList.textContent = "";
  if (userInput === "") {
    return;
  }

  const filteredVegetable = vegetables.filter((vegetableName) => {
    return vegetableName.toLowerCase().includes(userInput);
  });

  filteredVegetable.forEach((vegetableName) => {
    // Création de l'élément HTML li
    const vegetableElement = document.createElement("li");
    vegetableElement.textContent = vegetableName;
    // Ajout de l'élément li dans le DOM
    suggestionList.appendChild(vegetableElement);
  });
};

// Déclaration de la fonction useSuggestion
const useSuggestion = (e) => {
  inputItem.value = e.target.textContent;
  suggestionList.textContent = "";
  suggestions.style.display = "none";
};

// Ecoute de l'événement "keyup" sur l'input
inputItem.addEventListener("keyup", (e) => {
  suggestions.style.display = "block";
  // Appel de la fonction searchVegetable
  searchVegetable(e);
});

// Ecoute de l'événement "click" sur suggestions et appel de la fonction useSuggestion
suggestions.addEventListener("click", useSuggestion);
