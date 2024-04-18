

const mongoose = require('mongoose');

const aquariumSchema = new mongoose.Schema({
  aquarium_type: {
    type : String,
    required: [true, "aquarium_type is required"],
    minlength : [1, "aquarium_type name should be at least 1"],
    maxlength : [22, "aquarium_type name should be below 19"]
},
  size: {
    type : String,
    required: [true, "size field name needs to be entered"],
    minlength : [1, "size name should be at least 1"],
    maxlength : [10, "size name should be below 10"]
},
  cost: {
    type : Number,
    required: [true, "Cost fied needs to be entered"],
    min : [1, "aquarium Cost should be at least $1"],
    max : [1000, "aquarium cost should be below 1000$"]
  }
});

const Aquarium = mongoose.model('Aquarium', aquariumSchema);

module.exports = Aquarium;
