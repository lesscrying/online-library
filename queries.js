// Извличане на всички книги
db.books.find();

// Филтриране по жанр
db.books.find({ genres: "Fiction" });

// Филтриране по няколко полета
db.books.find({ published_year: { $gt: 2000 }, copies_available: { $gt: 0 } });

// Актуализация на копия
db.books.updateOne({ title: "To Kill a Mockingbird" }, { $set: { copies_available: 3 } });

// Изтриване на рецензия
db.reviews.deleteOne({ rating: { $lt: 2 } });

// Агрегиране – групиране на книги по година
db.books.aggregate([
  { $group: { _id: "$published_year", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } }
]);

// Агрегиране – средна оценка на книга
db.reviews.aggregate([
  { $group: { _id: "$book_id", averageRating: { $avg: "$rating" } } },
  { $sort: { averageRating: -1 } }
]);
