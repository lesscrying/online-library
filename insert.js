// Добавяне на книги
db.books.insertMany([
  {
    title: "To Kill a Mockingbird",
    author_id: ObjectId("..."), // ID на автор от колекция authors
    genres: ["Classic", "Fiction"],
    published_year: 1960,
    copies_available: 4
  },
  // ... още книги
]);

// Добавяне на автори
db.authors.insertMany([
  {
    name: "Harper Lee",
    birth_year: 1926,
    nationality: "American"
  },
  // ... още автори
]);

// Добавяне на потребители
db.users.insertMany([
  {
    name: "John Doe",
    email: "john@example.com",
    membership_date: new Date("2022-01-01"),
    borrowed_books: []
  },
  // ... още потребители
]);

// Добавяне на заеми
db.loans.insertMany([
  {
    user_id: ObjectId("..."),
    book_id: ObjectId("..."),
    loan_date: new Date("2025-06-01"),
    return_date: null
  },
  // ... още заеми
]);

// Добавяне на рецензии
db.reviews.insertMany([
  {
    book_id: ObjectId("..."),
    user_id: ObjectId("..."),
    rating: 5,
    comment: "Great read!",
    date: new Date()
  },
  // ... още рецензии
]);
