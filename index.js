//   to run npm run dev

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Create a new author
app.post("/authors", async (req, res) => {
  
    const { FirstName, LastName, BirthDate, Nationality } = req.body;
    const newAuthor = await prisma.author.create({
      data: {
        FirstName : req.body.firstname,
        LastName : req.body.lastname,
        BirthDate: req.body.birthdate,
        Nationality: req.body.nationality,
      },
    });
    res.json(newAuthor);
  
});

// Read all authors
app.get("/authors", async (req, res) => {
 
    const authors = await prisma.author.findMany();
    res.json(authors);
  
});

// Delete an author by ID
app.delete("/authors/:id", async (req, res) => {

    const authorId = parseInt(req.params.id);
    const deletedAuthor = await prisma.author.delete({
      where: { AuthorID: authorId },
    });
    res.json(deletedAuthor);
 
});



// updating authors data
app.patch("/authors/:id", async (req, res) => {
    
      const authorId = parseInt(req.params.id);
      const { FirstName, LastName, BirthDate, Nationality } = req.body;
  
      const updatedAuthor = await prisma.author.update({
        where: { AuthorID: authorId },
        data: {
          FirstName,
          LastName,
          BirthDate,
          Nationality,
        },
      });
  
      res.json(updatedAuthor);
    
  });
  



  // Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// ------------------------------------------------------------------------------------------------------------------
  
// Create a new Book
app.post("/books", async (req, res) => {
    
      const newbook = await prisma.Book.create({
        data: {
            Title : req.body.title,
            PublicationYear : req.body.publicationyear,
            ISBN: req.body.isbn,
            AuthorID: req.body.authorid,
        },
      });
      res.json(newbook);
    
  });
  
  // ...

// Read all Books
app.get("/books", async (req, res) => {
   
      const books = await prisma.book.findMany();
      res.json(books);
   
  });


// Delete an BOOK by ID
app.delete("/books/:id", async (req, res) => {
  
      const bookId = parseInt(req.params.id);
      const deletedbooks = await prisma.book.delete({
        where: { BookID: bookId },
      });
      res.json(deletedbooks);
    
  });

// updating books data
app.patch("/books/:id", async (req, res) => {
 
      const bookId = parseInt(req.params.id);
      const { Title, PublicationYear, ISBN, AuthorID } = req.body;
  
      const updatedBook = await prisma.book.update({
        where: { BookID: bookId },
        data: {
          Title,
          PublicationYear,
          ISBN,
          AuthorID,
        },
      });
  
      res.json(updatedBook);
   
  })





































































