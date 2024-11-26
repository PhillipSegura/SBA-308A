// Starting over but this time with the easy yet reliable pokeapi
// First and for most starting with a Fetch function

fetch("https://pokeapi.co/api/v2/pokemon/Spongebob)")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Could not fetchc resource");
    }

    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
