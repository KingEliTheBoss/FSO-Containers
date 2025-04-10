const express = require('express');
const router = express.Router();

const redis = require('../redis');

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});


router.get("/statistics", async (req, res) => {
  const count = await redis.getAsync("added_todos");
  let cuenta = 0;
  if (count) {
    cuenta = Number(count);
  }
  res.send({ added_todos: cuenta });
});


module.exports = router;
