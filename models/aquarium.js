

const mongoose = require('mongoose');

const aquariumSchema = new mongoose.Schema({
  aquarium_type: String,
  size: String,
  cost: Number
});

const Aquarium = mongoose.model('Aquarium', aquariumSchema);

module.exports = Aquarium;
