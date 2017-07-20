//untuk search
router.post('/search/', (req, res, next) => {
  let search = req.body.search
  db.Task.findAll({
    include: {
      model: db.Department
    },
    where: {
      name: {
        $like: `%${search}%`
      }
    }
  })
  .then((tasks) => {
    res.render('search', { data: tasks})
  })
  .catch(err => {
    res.render('error')
  })
})
