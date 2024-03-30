const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/fact', async (req, res) => {
  try {
    const response = await axios.get('https://meowfacts.herokuapp.com');
    console.log(response.data.data[0]);
    res.render('index', { fact: response.data.data[0] });
  } catch (error) {
    res.status(500).send('Error Fetching Data');
  }
});

module.exports = router;
