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
// exports.aquarium_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: aquarium update PUT' + req.params.id);
// };
// Handle aquarium update form on PUT.
exports.aquarium_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await aquarium.findById( req.params.id)
// Do updates of properties
if(req.body.aquarium_type)
toUpdate.aquarium_type = req.body.aquarium_type;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.size) toUpdate.size = req.body.size;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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

    // for a specific aquarium.
exports.aquarium_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await aquarium.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

    // Handle aquarium delete on DELETE.
exports.aquarium_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await aquarium.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

// Handle a show one view with id specified by query
exports.aquarium_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await aquarium.findById( req.query.id)
    res.render('aquariumdetail',
   { title: 'aquarium Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a aquarium.
// No body, no in path parameter, no query.
// Does not need to be async
exports.aquarium_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('aquariumcreate', { title: 'aquarium Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


   // Handle building the view for updating a aquarium.
// query provides the id
exports.aquarium_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await aquarium.findById(req.query.id)
    res.render('aquariumupdate', { title: 'aquarium Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    

    // Handle a delete one view with id from query
exports.aquarium_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await aquarium.findById(req.query.id)
    res.render('aquariumdelete', { title: 'aquarium Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


    
    





