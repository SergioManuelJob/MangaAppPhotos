module.exports = app => {
  const bicycles = require("../controllers/bicycle.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new manga
  router.post("/", upload.single('file'), bicycles.create);

  // Retrieve all mangas
  router.get("/", bicycles.findAll);

  // Retrieve a single manga with id
  router.get("/:id", bicycles.findOne);

  // Update a manga with id
  router.put("/:id", upload.single('file'), bicycles.update);

  // Delete a manga with id
  router.delete("/:id", bicycles.delete);

  app.use("/api/mangas", router);
}