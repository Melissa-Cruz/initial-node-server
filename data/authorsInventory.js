//Cut out the authorsList array from app.js and paste into authorInventory.js.

// Array containing 3 objects, each object representing information about an author. This is a representation of information that would actually be stored in a database. Since we're not to databases yet, we'll use this array instead.
const authors = [
    {
      _id: "001",
      firstName: "Jenny",
      lastName: "Nimmo",
      birthYear: 1944,
      bio: "Jenny Nimmo is a British author of children's books, including fantasy and adventure novels, chapter books, and picture books.",
    },
    {
      _id: "002",
      firstName: "Katsuhiro",
      lastName: "Otomo",
      birthYear: 1954,
      bio: "Katsuhiro Otomo is a Japanese manga artist, screenwriter, animator and film director. He is best known as the creator of Akira, in terms of both the original 1982 manga series and the 1988 animated film adaptation.",
    },
    {
      _id: "003",
      firstName: "Roald",
      lastName: "Dahl",
      birthYear: 1916,
      bio: "Roald Dahl was a British author who penned 19 children's books over his decades-long writing career.",
    },
  ];
  //

  module.exports = authorInventory;