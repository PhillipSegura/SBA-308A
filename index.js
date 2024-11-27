// Starting over but this time with the easy yet reliable pokeapi
// First and for most starting with a Fetch function

/* fetch("https://pokeapi.co/api/v2/pokemon/Spongebob)")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Could not fetchc resource");
    }

    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
  */

// Now let's use async/await for better readability and error handling

fetchData();

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
