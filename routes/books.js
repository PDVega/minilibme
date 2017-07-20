const express = require('express')
const router = express.Router()
const db = require('../models')

// //routing to test that page running ok
// router.get('/', (req, res) => {
//   res.send('books page okay')
// })

router.get('/', (req, res) => {
  db.Book.findAll()
  .then(data_book => {
    db.AuthorBook.findAll({
      // where : { AuthorId : Author.id },
      include : [db.Author]
    })
    .then(data_authorbook => {
      // data_authorbook.forEach(authorb => {
        // console.log(JSON.stringify(data_authorbook, null, 2));
        // console.log(JSON.stringify(authorb, null, 2));
        res.render('book', {data_book: data_book, data_authorbook: data_authorbook})
      })
    })  
  })
// })


module.exports = router;
