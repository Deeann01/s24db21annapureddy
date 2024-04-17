

const mongoose = require('mongoose');

const aquariumSchema = new mongoose.Schema({
  aquarium_type: {
    type : String,
    required: [true, "aquarium_type is required"],
    minlength : [1, "aquarium_type must be at least 1"],
    maxlength : [19, "aquarium_type  must be below 19"]
},
  size: {
    type : String,
    required: [true, "size field needs to be entered"],
    minlength : [2, "size must be at least 2"],
},
  cost: {
    type : Number,
    required: [true, "Cost fied needs to be entered"],
    min: [1, "Cost must be atleast $1"]
  }
});

const Aquarium = mongoose.model('Aquarium', aquariumSchema);

module.exports = Aquarium;
