const describe =
  ("sortByName",
  () => {
    const test =
      ("should sort Pokemon alphabetically by name",
      () => {
        const unsorted = [
          { name: "Bulbasaur" },
          { name: "Charmander" },
          { name: "Squirtle" },
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
      expect(original[0].name).toBe("Bulbasaur");
    });
  });
