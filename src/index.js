describe('sortByName', () => {
  test('should sort Pokemon alphabetically by name', () => {
    const unsorted = [
      { name: "Squirtle" },
      { name: "Bulbasaur" },
      { name: "Charmander" }
    ];
    
    const result = sortByName(unsorted);
    
    // TODO: What order should they be in?
    expect(result[0].name).toBe('Bulbasaur');
    expect(result[1].name).toBe('Charmander');
    expect(result[2].name).toBe('Squirtle');
  });

  test('should not modify original array', () => {
    const original = [/* ... */];
    const sorted = sortByName(original);
    
    // Original should be unchanged!
    expect(original[0].name).toBe(/* first item before sort */);
  });
});