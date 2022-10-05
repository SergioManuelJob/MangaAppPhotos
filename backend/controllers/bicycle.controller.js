const db = require("../models");
const Bicycle = db.bicycles;
const Op = db.Sequelize.Op;

// Create and Save a new Bicycle
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title || !req.body.pages || !req.body.volume || !req.body.genre){
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Bicycle
  const bicycle = {
    title: req.body.title,
    pages: req.body.pages,
    volume: req.body.volume,
    genre: req.body.genre,
    imagen: req.file ? req.file.filename : ""
  }

  // Save Bicycle in the database
  Bicycle.create(bicycle).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the bicycle"
    })
  });
};

// Retrieve all Bicycles from the database.
exports.findAll = (req, res) => {
  Bicycle.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Bicycles"
    })
  })
};

// Find a single Bicycle with an id
exports.findOne = (req, res) => {

}

// Update a Bicycle by the id in the request
exports.update = (req, res) => {

};

// Delete a Bicycle with the specified id in the request
exports.delete = (req, res) => {

};
