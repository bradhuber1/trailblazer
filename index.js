const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/home'))
  .get('/fractal', (req, res) => res.render('pages/fractal'))
  .get('/loops', (req, res) => res.render('pages/loops'))
  .get('/conditionals', (req, res) => res.render('pages/conditionals'))
  .get('/contact', (req, res) => res.render('pages/contact'))
  .get('/about', (req, res) => res.render('pages/about'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));