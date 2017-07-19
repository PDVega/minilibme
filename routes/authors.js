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

//routing post to input database data input from form addauthor
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

//routing to edit data input from show author
router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id
    db.Author.findById(id)
      .then(data_author => {
        res.render('editauthor', {data_author : data_author})
      })
})

//routing post to input database update data input from form editauthor
router.post('/edit/:id', (req, res, next) => {
  let id = req.params.id
  let first_name = req.body.first_name
  let last_name = req.body.last_name
    db.Author.findById(id)
      .then(data_author => {
        data_author.update({
          'first_name' : first_name,
          'last_name' : last_name
        })
        .then(() => {
          res.redirect('/authors')
        })
      })
})


//routing to delete author
router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id
  db.Author.destroy({
    where : {id :id}
  })
  .then(() => {
    res.redirect('/authors')
  })
})



module.exports = router;
