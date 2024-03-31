const express = require('express');
const axios = require('axios');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://meowfacts.herokuapp.com');
    let fact = response.data.data[0];
    res.render('index', { fact: fact });
  } catch (error) {
    res.status(500).send('Error Fetching Data');
  }
});

router.get('/about', async (req, res) => {
  try {
    res.render('about');
  } catch (error) {
    res.status(500).send('Error Fetching Data');
  }
});

router.get('/randomfact', async (req, res) => {
  try {
    const response = await axios.get('https://meowfacts.herokuapp.com');
    res.render('index', { fact: response.data.facts[0] });
  } catch (error) {
    res.status(500).send('Error Fetching Data');
  }
});

router.get('/fact', async (req, res) => {
  try {
    const response = await axios.get('https://meowfacts.herokuapp.com/?count=100');
    let facts = response.data.data;
    let data = { fact: facts };
    res.render('cat', data);
  } catch (error) {
    res.status(500).send('Error Fetching Data');
  }
});


module.exports = router;
