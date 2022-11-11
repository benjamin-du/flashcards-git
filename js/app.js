const term = document.querySelector(".term");
const definition = document.querySelector(".definition")
const checkButton = document.querySelector(".check");
const nextButton = document.querySelector(".next");

let words = {
    Hello: "Bonjour",
    Goodbye: "Au revoir",
    "I drink water": "Je bois de l'eau",
}

let data = Object.entries(words)

function getRandomTerm() {
    randomTerm = data[Math.floor(Math.random() * data.length)][0]
    term.innerHTML = `<h3>${randomTerm} </h3>`
}

checkButton.addEventListener("click", function() {
    definition.style.display = "block";
    definition.innerHTML = `<h3>${words[randomTerm]}</h3>`
}
)

nextButton.addEventListener("click", function() {
    definition.style.display = "None";
    getRandomTerm()
}
)
