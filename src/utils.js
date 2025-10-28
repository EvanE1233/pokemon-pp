export const filterByType = (pokemonList, type) => {
  return pokemonList.filter((pokemon) => pokemon.type === type);
  
};

export const getPokemonNames = (pokemonList) => {
  return pokemonList.map((pokemon) => pokemon.name);
};

export const getStrongestPokemon = (pokemonList) => {
  let strongest = pokemonList[0];
const sortedAttack = structuredClone(pokemonList).sort((a, b) => b.attack - a.attack);
const highestAttack = sortedAttack[0].attack;
return sortedAttack.filter(pokemon => pokemon.attack === highestAttack);
  return strongest;
}; //I learned how to actually sort the list, unlike last week where I did not know how to sort lists.

export const sortByName = (pokemonList) =>
  structuredClone(pokemonList).sort((a, b) => a.name.localeCompare(b.name));

  return pokemonList;


export const calculateAverageHP = (pokemonList) => {
  if (pokemonList.length === 0) return 0;
  const totalHP = pokemonList.reduce((sum, pokemon) => sum + pokemon.hp, 0);
  return totalHP / pokemonList.length;
};
