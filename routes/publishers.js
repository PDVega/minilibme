const express = require('express')
const router = express.Router()
const db = require('../models')


// //test routing publishers ok
// router.get('/', (req, res) => {
//   res.send('publisher page ok')
// })

//routing get publishers to show data publishers
router.get('/', (req, res) => {
  db.Publisher.findAll()
  .then(data_publisher => {
    res.render('publisher', {data_publisher : data_publisher})
  })
})

//routing to show form from  add publisher
router.get('/add', (req,res) => {
  db.Publisher.findAll()
  .then(data_publisher => {
    res.render('addpublisher', {data_publisher : data_publisher})
  })
}) 

//routing post to get data inputted from form
router.post('/add', (req,res, next) =>{
  let name = req.body.name
  db.Publisher.create({
    'name' : name
  })
  .then(data_publisher => {
    res.redirect('/publishers')
  })
})

//get page edit form publisher
router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id
  db.Publisher.findById(id)
  .then(data_publisher => {
    res.render('editpublisher', {data_publisher : data_publisher})
  })
})

//post data which have been updated
router.post('/edit/:id', (req, res, next) => {
  let id = req.params.id
  let name = req.body.name
  db.Publisher.findById(id)
  .then(data_publisher => {
    data_publisher.update({
      'name' : name
    })
    .then(() => {
      res.redirect('/publishers')
    })
  })
})



module.exports = router;
