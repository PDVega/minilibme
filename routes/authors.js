const express = require('express');
const router = express.Router();
const db = require('../models')

// //test routing ok
// router.get('/', (req, res) => {
//   res.send('author page ok')
// })

//routing to show author
router.get('/', (req, res) => {
  db.Author.findAll()
  .then(data_authors => {
    res.render('author', {data_authors : data_authors})
  })
})

//routing to show form addauthor
router.get('/addauthor', (req, res, next) => {
  db.Author.findAll()
  .then(data_author => {
    res.render('addauthor', {data_author : data_author})
  })
})

//routing to post data input from form addauthor
router.post('/addauthor', (req, res, next) => {
  let first_name = req.body.first_name
  let last_name = req.body.last_name
    db.Author.create({
      'first_name' : first_name,
      'last_name' : last_name
    })
    .then(data_author => {
      res.redirect('/authors')
    })
})

//routing to

module.exports = router;
