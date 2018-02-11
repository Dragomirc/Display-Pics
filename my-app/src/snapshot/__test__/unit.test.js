import { generateSearchTerm, searchTerms } from "../../logic";

test("The generated random number should be in the range of 0 and array.length + 1", () => {
  expect(generateSearchTerm(searchTerms)).toBeLessThan(searchTerms.length);
});
