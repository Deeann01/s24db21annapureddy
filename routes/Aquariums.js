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

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }

/* GET aquarium */
router.get('/', aquarium_controlers.aquarium_view_all_Page );
router.get('/detail', aquarium_controlers.aquarium_view_one_Page);
router.get('/create', aquarium_controlers.aquarium_create_Page);
// router.get('/update', aquarium_controlers.aquarium_update_Page);
router.get('/delete', aquarium_controlers.aquarium_delete_Page);

/* GET update costume page */
router.get('/update', secured, aquarium_controlers.aquarium_update_Page);

module.exports = router;


