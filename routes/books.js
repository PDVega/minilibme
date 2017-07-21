const express = require('express')
const router = express.Router()
const db = require('../models')

// //routing to test that page running ok
// router.get('/', (req, res) => {
//   res.send('books page okay')
// })

router.get('/', (req, res) => {
  let search = req.body.search
  db.Book.findAll({
    order : [['title', 'ASC']]
  })
  .then(data_book => {
    res.render('book', {data_book: data_book})
  })  
})


router.post('/', function(req,res) {
  let search = req.body.search.toLowerCase()
  console.log(search);
  db.Book.findAll({
    where:{
      title:{ $like : `%${search}%` }
    }
  })
  .then(books => {
    res.render('searchbook', { data : books})
  })
  .catch(err => {
    res.render('Buku tidak ditemukan')
  })
})

router.get('/add', (req, res) => {
  res.render('addbook')
})

router.post('/add', (req, res) => {
  let title = req.body.title
  db.Book.create({
    'title' : title
  })
  .then(booktitle => {
    res.redirect('/books')
  })
})

// router.get('/detail/:id', (req, res) => {
//   let id = req.params.id
//   db.AuthorBook.findById({
//     where : { BookId : id },
//     include : [db.Book, db.Author]
//   })
//   .then(allbook => {
//     allbook.forEach(rows => {
//       console.log(rows);
//       res.render('detailbook', {allbook : allbook, rows : rows})  
//     })
//   })
// })


router.get('/detail/:id', (req, res) => {
  let id = req.params.id
  db.Book.findById(id)
  .then(book => {
    res.render('detailbook', {book : book})  
  })
})


router.get('/edit/:id', (req, res) => {
  let id = req.params.id
  db.Book.findById(id)
  .then(book => {
    console.log(book);
    res.render('editbooks', {book:book})
  })
})

router.post('/edit/:id', (req, res) => {
  let id = req.params.id
  let title = req.body.title
  db.Book.findById(id)
  .then(books => {
    books.update({
      'title' : title
    })
    .then(() => {
      res.redirect('/books')
    })
  })
})


router.get('/delete/:id', (req, res) => {
  let id = req.params.id
  db.Book.destroy({
    where : { id : id }
  })
  .then(() => {
    res.redirect('/books')
  })
})


module.exports = router;
