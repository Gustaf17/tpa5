const express = require("express");
const router = express.Router();

const {
  getAllTugas,
  getTugasByID,
  addTugas,
  deleteTugasByID,
  updateTugasByID,
  deleteAllTugas,
} = require("../controllers/tugas.controller");

router.get("/", getAllTugas);
router.get("/:id", getTugasByID);
router.post("/", addTugas);
router.delete("/:id", deleteTugasByID);
router.put("/:id", updateTugasByID);
router.delete("/all/:id",deleteAllTugas)

module.exports = router;
