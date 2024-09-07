const express = require('express');
const router = express.Router();

// Array to simulate a simple user database
let users = [];

// GET request to display user form
router.get('/add', (req, res) => {
  res.render('form', { title: 'Add User' });
});

// POST request to handle form submission
router.post('/add', (req, res) => {
  const newUser = req.body.name;
  if (newUser) {
    users.push(newUser);
    res.redirect('/user/list');
  } else {
    res.send('Please enter a name!');
  }
});

// GET request to display list of users
router.get('/list', (req, res) => {
  res.render('list', { title: 'User List', users });
});

// DELETE request to remove a user (handled as a GET request for simplicity)
router.get('/delete/:name', (req, res) => {
  const nameToDelete = req.params.name;
  users = users.filter(user => user !== nameToDelete);
  res.redirect('/user/list');
});

module.exports = router;