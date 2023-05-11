const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let books = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.post('/books', (req, res) => {

    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        publishedDate: req.body.publishedDate
    };
    console.log(req.body);
    books.push(book);  //adding the books
    res.json(book);    
});

app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
       console.log(req.body);

    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books.splice(index, 1); //deleting 
        res.send( 'Book is deleted successfully.' );
        res.end();
    } else {

        res.status(404).send('There is no book');
        res.end();
    }
});

app.listen(8080, () => {
    console.log(`Server starting`);
});
