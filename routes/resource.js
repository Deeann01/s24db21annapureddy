var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var aquarium_controller = require('../controllers/aquarium');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// acquarium ROUTES ///
// POST request for creating a acquarium.
router.post('/aquarium', aquarium_controller.aquarium_create_post);
// DELETE request to delete acquarium.
router.delete('/aquarium/:id', aquarium_controller.aquarium_delete);
// PUT request to update acquarium.
router.put('/aquarium/:id', aquarium_controller.aquarium_update_put);
// GET request for one acquarium.
router.get('/aquarium/:id', aquarium_controller.aquarium_detail);
// GET request for list of all acquarium items.
router.get('/aquarium', aquarium_controller.aquarium_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"aquarium", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
