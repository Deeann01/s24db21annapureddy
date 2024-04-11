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
router.get('/detail', aquarium_controlers.aquarium_view_one_Page);
router.get('/create', aquarium_controlers.aquarium_create_Page);
router.get('/update', aquarium_controlers.aquarium_update_Page);
router.get('/delete', aquarium_controlers.aquarium_delete_Page);


module.exports = router;


