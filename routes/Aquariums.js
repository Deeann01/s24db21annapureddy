var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Aquariums', { title: 'Search Results-Aquariums' });
});

module.exports = router;


var express = require('express');
const aquarium_controlers= require('../controllers/aquarium');
var router = express.Router();
/* GET aquarium */
router.get('/', aquarium_controlers.aquarium_view_all_Page );
module.exports = router;