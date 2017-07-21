const express = require('express');
const router = express.Router();
const db = require('../models');

// //test routing connection authorbooks many-to-many
// router.get('/', (req, res) => {
//   res.send('author book m-m okay')
// })

// //routing to show connection many-to-many between authors and books
router.get('/', (req, res) => {
  db.AuthorBook.findAll()
  .then(data_authorbook => {
    console.log(data_authorbook);
    res.render('authorbook', {data_authorbook : data_authorbook})
  })
})


//routing to add data Authors and Books
router.get('/add', (req, res) => {
  db.AuthorBook.findAll()
  .then(data_authorbook => {
    db.Author.findAll()
    .then(data_author => {
      db.Book.findAll()
      .then(data_book => {
        res.render('addauthorbook', {data_authorbook : data_authorbook, data_author : data_author, data_book : data_book})
      })
    })
  })
})

router.post('/add', (req, res) => {
  db.AuthorBook.create({
    AuthorId : req.body.AuthorId,
    BookId : req.body.BookId,
    createdAt : new Date(),
    updatedAt : new Date()
  })
  .then(() => {
    res.redirect('/authorbooks')
  })
})


module.exports = router;
