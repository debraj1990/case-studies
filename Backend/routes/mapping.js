var express = require('express');
var router = express.Router();
var Product = require('../model/mapping');



router
  .get('/', function (req, res, next) {
    Product.find((err, data) => {
      if (err)
        res.status(500).json(err)
      res.json(data)
    })
  })
  
  


module.exports = router;
