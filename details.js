async function fetchPokemonDetail() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get("name");

    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    const data = await response.json();

    const container = document.getElementById("pokemon-details");

    container.innerHTML = `
        <img src="${data.sprites.front_default}" alt="${name}">
        <h2>${name}</h2>
        <p>Height: ${data.height}</p>
        <p>Weight: ${data.weight}</p>
        <p>Type: ${data.types[0].type.name}</p>
    `;
}

fetchPokemonDetail();