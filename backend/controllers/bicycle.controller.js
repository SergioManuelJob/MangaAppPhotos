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
  const manga = {
    title: req.body.title,
    pages: req.body.pages,
    volume: req.body.volume,
    genre: req.body.genre,
    filename: req.file ? req.file.filename : ""
  }

  // Save Bicycle in the database
  Bicycle.create(manga).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Manga"
    })
  });
};

// Retrieve all Bicycles from the database.
exports.findAll = (req, res) => {
  Bicycle.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Mangas"
    })
  })
};

// Find a single Bicycle with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Bicycle.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Manga with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Manga with id=" + id
      });
    });
};

// Update a Bicycle by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Bicycle.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Manga was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Manga with id=${id}. Maybe Manga was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Manga with id=" + id
      });
    });
};
// Delete a Bicycle with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Bicycle.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Manga was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Manga with id=${id}. Maybe Manga was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Manga with id=" + id
      });
    });
};
