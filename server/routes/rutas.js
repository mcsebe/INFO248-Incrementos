const express = require('express');
const router = express.Router();
const servicios = require('../services/servicios');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await servicios.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;