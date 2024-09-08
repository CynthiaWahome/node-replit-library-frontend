const express = require("express");
const Database = require("@replit/database");


const app = express();
const port =  process.env.PORT || 3000;

const db = new Database();
app.use(express.json()); // middleware to [arse JSON bodies

// functions to generate the next ID
const getNextId = async () => {
  const keysObj = await db.list();
  const keys = (keysObj.value || []).map(Number).filter((key) => !isNaN(key));
  return keys.length > 0 ? string(Math.max(...keys) + 1) : "1";
};

app.get("/", (_req,res) => {
  // console.log(req.path);
  res.status(200).send("Hello World!");
});

app.post("/api/books", (req, res) => {
  getNextId()
    .then((myId) => {
    const book = {
      id: myId,
      title: req.body.title,
      author: req.body.author,
    };
      
    return db.set(myId, book).then(() => {
      console.log(myId, book);
      res.status(201).send(book);
    });
  })
  .catch ((error) => res.status(500).send(`${error} - Error saving the book`));
});


app.get("/api/books", (req,res) => {
  db.list()
    .then((keysObj) => {
      const keys = keysObj.value || [];
      return Promise.all(keys.map((key) => db.get(key)));
    })
    .then((books) => res.status(200).send(books))
    .catch((error) => 
      res.status(500).send(`${error} - Errror getting the books`),
    );
});

app.get("/api/books/:id", (req, res) => {
  db.get(req.params.id)
  .then((bookObj) => {
    const book = bookObj.value;
    if (!book) {
      return res.status(404).send("Book Not Found!")
    }
    res.send(book);
  })
  .catch ((error) => 
    res.status(500).send(`${error} - Error retrieving the book`),
  );
});

app.put("/api/books/:id", (req, res) => {
  db.get(req.params.id)
  .then((bookObj) => {
    const book = bookObj.value;
    if (!book) {
      return res.status(404).send("Book Not Found")
    }
    
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;

    return db.set(req.params.id, book).then(() => {
      console.log("Updated Book: ", {[req.params.id]: book});
      res.send(book);
    });
  })
  .catch ((error) => 
    res.status(500).send(`${error} - Error updating the book`),
    );
});

app.delete("/api/books/:id", (req, res) => {
  db.get(req.params.id)
    .then((bookObj) => {
      const book = bookObj.value;
      if (!book) {
        return res.status(404).send("Book Not Found");
      }
      
      return db.delete(req.params.id).then(() => 
        res.status(204).send());
    })
    .catch((error) => 
      res.status(500).send(`${error} - Error deleting the book`),
    );
  });

app.delete("/api/delete-database", (req, res) => {
  db.list()
    .then((keysObJ) => {
      const keys = keysObj.value || [];
      return Promise.all(keys.map((key) => db.delete(key)));
    }).then(() => {
      console.warn("Database cleared");
      res.status(500).send(`${error} - Error deleting the database`),
        );
    })
})


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
