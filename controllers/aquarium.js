var aquarium = require('../models/aquarium');
// List of all aquariums
exports.aquarium_list = function(req, res) {
res.send('NOT IMPLEMENTED: aquarium list');
};
// for a specific aquarium.
exports.aquarium_detail = function(req, res) {
res.send('NOT IMPLEMENTED: aquarium detail: ' + req.params.id);
};
// Handle aquarium create on POST.
exports.aquarium_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: aquarium create POST');
};
// Handle aquarium delete from on DELETE.
exports.aquarium_delete = function(req, res) {
res.send('NOT IMPLEMENTED: aquarium delete DELETE ' + req.params.id);
};
// Handle aquarium update form on PUT.
exports.aquarium_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: aquarium update PUT' + req.params.id);
};

// List of all aquarium
exports.aquarium_list = async function(req, res) {
    try{
    theAquarium = await aquarium.find();
    res.send(theAquarium);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    

    	// VIEWS
	// Handle a show all view
	exports.aquarium_view_all_Page = async function(req, res) {
	    try{
	    theAquarium = await aquarium.find();
	    res.render('aquarium', { title: 'aquarium Search Results', results: theAquarium });
	    }
	    catch(err){
	    res.status(500);
	    res.send(`{"error": ${err}}`);
	    }
    };
// Handle aquarium create on POST.
exports.aquarium_create_post = async function(req, res) {
    console.log(req.body)
    let document = new aquarium();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"aquarium_type":"goat", "cost":12, "size":"large"}
    document.aquarium_type = req.body.aquarium_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{        
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    





