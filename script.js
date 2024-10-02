let button = document.querySelector(`#searchButton`);
let textInput = document.querySelector(`#inputBar`);
let pkmnImage = document.querySelector(`#pkmnImage`);
let pkmnName = document.querySelector(`#pkmnName`);
let pkmnTypes = document.querySelector(`#pkmnTypes`);
let pkmnAbility = document.querySelector(`#pkmnAbility`);
let pkmnHeight = document.querySelector(`#pkmnHeight`);
let pkmnMoves = document.querySelector(`#pkmnMoves`);

button.addEventListener('click', async () => {
  let pokemonNameInput = textInput.value.toLowerCase();

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNameInput}`);
    const pokemonData = response.data;

    pkmnName.textContent = pokemonData.name;
    pkmnImage.src = pokemonData.sprites.front_default;

    let typing = pokemonData.types.map(type => type.type.name).join(', ');
    pkmnTypes.textContent = `Types: ${typing}`;
    let abilities = pokemonData.abilities.map(ability => ability.ability.name).join(', ');
    pkmnAbility.textContent = `Abilities: ${abilities}`;
    let height = pokemonData.height;
    pkmnHeight.textContent = `Height: ${height} meters`;

    }
    catch (error) {
    console.error(`Error fetching Pokemon data:`, error);
    pkmnTypes.textContent = ``;
    pkmnAbility.textContent = ``;
    pkmnHeight.textContent = ``;

    pkmnName.textContent = `Pokemon not found!`;
    pkmnImage.src = `assets/question-mark-unown.png`;
  }
});