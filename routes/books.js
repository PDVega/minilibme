const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', (req, res) => {
  res.send('books page okay')
})

router.get('/showbooks', (req, res) => {
  db.Book.findAll()
  .then(data_book => {
    res.render('showbooks', {data_book : data_book})
  })
})


module.exports = router;
