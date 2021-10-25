const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const app = express();

const url = 'mongodb://localhost:27017/booksapi';

function log(req, res, next) {
    // log incoming request
    next();
}

function auth(req, res, next) {
    // do auth
    next();
}

app.use(express.json());
app.use(log);
app.use(auth);
app.get("/", auth, function (req, res) {
    res.send("Hello World!");
});

let books;
MongoClient.connect(url, function(err, client) {
    books =  client.db().collection("books");
})

app.get("/book/:isbn", function (req, res) {
    const isbn = req.params.isbn;
    books.findOne({isbn}, { projection: {_id: 0} }, function(err, book) {
        res.json(book);
    });
});
app.post("/book", function(req, res) {
    const {title, authors, isbn, description} = req.body;
    books.updateOne(
        {isbn: isbn},
        { $set: {title, authors, isbn, description} },
        {upsert: true}
    );

    res.json({title, authors, isbn, description});
});

app.use(function notFound(req, res, next) {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500);
    res.json({message: err.message, error: err.stack});
});

module.exports = app;