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
    res.render('book', {data_book : data_book})
  })
})


module.exports = router;
