async function fetchPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    const data = await response.json();

    const pokemons = data.results;

    pokemons.forEach(function(pokemon) {
        fetchPokemonDetails(pokemon.url, pokemon.name);
    });
}

async function fetchPokemonDetails(url, name) {
    const response = await fetch(url);
    const data = await response.json();

    const image = data.sprites.front_default;

    createCard(name, image);
}

function createCard(name, image) {
    const container = document.getElementById("pokemon-container");

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        <button onclick="location.href='details.html?name=${name}'">View Details</button>
    `;

    container.appendChild(card);
}

fetchPokemons();