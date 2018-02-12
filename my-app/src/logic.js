const generateSearchTerm = array =>
  Math.floor(Math.random() * (array.length + 1));

const searchTerms = [
  "man",
  "mountain",
  "state",
  "ocean",
  "country",
  "building",
  "cat",
  "airline",
  "wealth",
  "happiness",
  "pride",
  "fear",
  "religion",
  "bird",
  "book",
  "phone",
  "rice",
  "snow",
  "water"
];

const mapColor = color => {
  switch (color) {
    case "yellow":
      return "#FFFD66";
    case "red":
      return "#CD5334";
    case "green":
      return "#C2F970";
    case "purple":
      return "#007EA7";
    default:
  }
};
module.exports = { generateSearchTerm, searchTerms, mapColor };
