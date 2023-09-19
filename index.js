const express = require("express");
const cors = require('cors');

const {prisma}=require('./connection')
require('dotenv').config();

const app = express();

app.use
(cors());
app.use(express.json());


// Read all tweets
app.get("/tweets", async (req, res) => {
  try {
    const tweets = await prisma.tweets.findMany()
    res.json(tweets);
  } catch (error) {
    console.error("Error fetching tweets:", error);
    res.status(500).json({ error: "An error occurred while fetching tweets" });
  }
});

// Get a tweet by id
app.get("/tweets/:id", async (req, res) => {
  try {
    const tweetId = parseInt(req.params.id);
    const tweet = await prisma.Tweets.findMany({
      where: { id: tweetId },
    });

    if (!tweet) {
      return res.status(404).json({ error: "Tweet not found" });
    }

    res.json(tweet);
  } catch (error) {
    console.error("Error fetching tweet:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



// Create a new tweet
app.post("/tweets", async (req, res) => {
  try {
    const { text_message, image } = req.body;

    const tweet = await prisma.tweets.create({
      data: {
        text_message,
        image,
      },
    });

    res.status(201).json(tweet);
  } catch (error) {
    console.error("Error creating tweet:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});





// Start the Express server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





// // Create a new author
// app.post("/authors", async (req, res) => {
  
//     const { FirstName, LastName, BirthDate, Nationality } = req.body;
//     console.log('reqq---------',req.body)
//     const newAuthor = await prisma.author.create({
//       data: {
//         FirstName : FirstName,
//         LastName : LastName,
//         //BirthDate: BirthDate,
//         Nationality: Nationality,
//       },
//     });
//     res.json(newAuthor);
  
// });

// // Read all authors
// app.get("/authors", async (req, res) => {
 
//     const authors = await prisma.author.findMany();
//     res.json(authors);
  
// });

// // Delete an author by ID
// app.delete("/authors/:id", async (req, res) => {

//     const authorId = parseInt(req.params.id);
//     const deletedAuthor = await prisma.author.delete({
//       where: { AuthorID: authorId },
//     });
//     res.json(deletedAuthor);
 
// });



// // updating authors data
// app.patch("/authors/:id", async (req, res) => {
    
//       const authorId = parseInt(req.params.id);
//       const { FirstName, LastName, BirthDate, Nationality } = req.body;
  
//       const updatedAuthor = await prisma.author.update({
//         where: { AuthorID: authorId },
//         data: {
//           FirstName,
//           LastName,
//           BirthDate,
//           Nationality,
//         },
//       });
  
//       res.json(updatedAuthor);
    
//   });
  



//   // Start the Express server
// const PORT = process.env.PORT || 3002;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// // get a author by id

// app.get("/authors/:id", async (req, res) => {
//   try {
//     const authorId = parseInt(req.params.id);
//     const author = await prisma.author.findUnique({
//       where: { AuthorID: authorId },
//     });

//     if (!author) {
//       return res.status(404).json({ error: "Author not found" });
//     }

//     res.json(author);
//   } catch (error) {
//     console.error("Error fetching author:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // ------------------------------------------------------------------------------------------------------------------
  
// // Create a new Book
// app.post("/books", async (req, res) => {
    
//       const newbook = await prisma.Book.create({
//         data: {
//             Title : req.body.title,
//             PublicationYear : req.body.publicationyear,
//             ISBN: req.body.isbn,
//             AuthorID: req.body.authorid,
//         },
//       });
//       res.json(newbook);
    
//   });
  
//   // ...

// // Read all Books
// app.get("/books", async (req, res) => {
   
//       const books = await prisma.book.findMany();
//       res.json(books);
   
//   });


// // Delete an BOOK by ID
// app.delete("/books/:id", async (req, res) => {
  
//       const bookId = parseInt(req.params.id);
//       const deletedbooks = await prisma.book.delete({
//         where: { BookID: bookId },
//       });
//       res.json(deletedbooks);
    
//   });

// // updating books data
// app.patch("/books/:id", async (req, res) => {
 
//       const bookId = parseInt(req.params.id);
//       const { Title, PublicationYear, ISBN, AuthorID } = req.body;
  
//       const updatedBook = await prisma.book.update({
//         where: { BookID: bookId },
//         data: {
//           Title,
//           PublicationYear,
//           ISBN,
//           AuthorID,
//         },
//       });
  
//       res.json(updatedBook);
   
//   })






























































































































































