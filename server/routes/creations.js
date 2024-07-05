const router = require('express').Router();
let Creation = require('../models/creation.model');

router.route('/').get((req, res) => {
  Creation.find()
    .then(creations => res.json(creations))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const userId = req.body.userId;
  const title = req.body.title;
  const description = req.body.description;
  const link = req.body.link;

  const newCreation = new Creation({ userId, title, description, link });

  newCreation.save()
    .then(() => res.json('Creation added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;