const express = require('express');
const path = require('path');
const userRoutes = require('./routes/user');

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Parse incoming request bodies
app.use(express.urlencoded({ extended: true }));

// Basic routing
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

// Use the user routes for "/user" endpoints
app.use('/user', userRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});