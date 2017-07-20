const express = require('express');
const router = express.Router();
const db = require('../models')
const crypto = require('crypto');
const hash = require('../helpers/hash')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/login', function(req,res){
  if(req.session.user){
    res.redirect('/books')
  }else {
    res.render('login')
  }
})

router.post('/login', (req,res) => {
  // if(!req.body.username || !req.body.password)
  if(!req.body.username)
  {
    res.send('Please enter username and password')
  }
  else
  {
    db.User.findOne({
      where: {
        username:req.body.username
        // username:req.body.username
      }
    })
    .then(function(data_user){
      const secret = data_user.salt;
      const hashData = hash(secret, req.body.password)
      // console.log('hashData',hashData);
      // console.log('datauser',data_user.password);
      if(hashData == data_user.password)
      {
      // console.log(data_user.username);
          req.session.user = {
            username: data_user.username
          }
      }else
      {
          res.send('Wrong Password')
      }
      res.redirect('/books')
    })
    .catch(function(err){
      res.send('User Not Found')
    })
  }
})

router.get('/logout', function(req,res){
  req.session.destroy( err => {
    res.redirect('/');
  })
})

module.exports = router;
