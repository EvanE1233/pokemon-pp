import { describe, test, expect } from "vitest";
import {
  filterByType,
  getPokemonNames,
  getStrongestPokemon,
  sortByName,
} from "./utils.js";

// Sample test data
const testPokemon = [
  { id: 1, name: "Bulbasaur", type: "grass", hp: 45, attack: 49, defense: 49 },
  { id: 4, name: "Charmander", type: "fire", hp: 39, attack: 52, defense: 43 },
  { id: 7, name: "Squirtle", type: "water", hp: 44, attack: 48, defense: 65 },
  {
    id: 25,
    name: "Pikachu",
    type: "electric",
    hp: 35,
    attack: 55,
    defense: 40,
  },
];

describe("filterByType", () => {
  test("should return only fire type Pokemon", () => {
    const result = filterByType(testPokemon, "fire");
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Charmander");
  });

  // TODO: Add test for water type
  // TODO: Add test for type that doesn't exist (should return empty array)
});

describe("getPokemonNames", () => {
  test("should return array of Pokemon names", () => {
    const result = getPokemonNames(testPokemon);
    expect(result).toEqual(["Bulbasaur", "Charmander", "Squirtle", "Pikachu"]);
  });

  // ✅ COMPLETE: This test is done
  test("should return empty array for empty input", () => {
    const result = getPokemonNames([]);
    expect(result).toEqual([]);
  });
});

describe("getStrongestPokemon", () => {
  test("should return Pokemon with highest attack", () => {
    const result = getStrongestPokemon(testPokemon);
    expect(result.name).toBe("Pikachu"); // Pikachu has 55 attack
  });
});

describe("sortByName", () => {
  // TODO: Write test to verify Pokemon are sorted alphabetically
  // TODO: Write test to verify original array is not modified (immutability)
});

describe("sortByName", () => {
  test("should sort Pokemon alphabetically by name", () => {
    const unsorted = [
      { name: "Squirtle" },
      { name: "Bulbasaur" },
      { name: "Charmander" },
    ];

    const result = sortByName(unsorted);

    // TODO: What order should they be in?
    expect(result[0].name).toBe("Bulbasaur");
    expect(result[1].name).toBe("Charmander");
    expect(result[2].name).toBe("Squirtle");
  });

  test("should not modify original array", () => {
    const original = [
      /* ... */
    ];
    const sorted = sortByName(original);

    // Original should be unchanged!
    expect(original[0].name).toBe(/* first item before sort */);
  });
});
