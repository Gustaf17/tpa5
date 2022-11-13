const Tugas = require("../models/tugas")

module.exports = {
  getAllTugas: async (req, res) => {
    try {
      const tugas = await Tugas.find().populate("user","name")

    res.json({
      message:"succes get data",
      data: tugas
    })
    } catch (error) {
      console.log(error)
    }
    
  },

  getTugasByID: async (req, res) => {
    const tugas = await Tugas.findById(req.params.id)
    .then(tugasFound => {
      if(!tugasFound) {return res.status(404).end();}
      return res.status(200).json(tugasFound);
    })
    .catch(err => next(err));

  },

  addTugas: (req, res) => {
    const data = req.body
    const tugas = new Tugas(data)
    tugas.save()

    res.json({
      message:"data created!!!",
    })
  },

  deleteTugasByID: async (req, res) => {
    const tugas = await Tugas.findByIdAndDelete(req.params.id)
    .then( doc => {
      if(!doc) {return res.status(404).end();}
      return res.status(200).json(doc);
    })
    .catch(err => next(err));
  },

  updateTugasByID: async (req, res) => {
    var conditions = { _id: req.params.id };

    const tugas = await Tugas.updateOne(conditions, req.body)
    .then( doc => {
      if(!doc) {return res.status(404).end();}
      return res.status(200).json({
        doc ,
        message: "tugas telah diupdate"
        });
    })
  },
  deleteAllTugas: async (req, res)=>{ 
    // res.send(req.params.id)
    const tugas = await Tugas.deleteMany({
      "user": req.params.id
    })
    .then( doc => {
      if(!doc) {return res.status(404).end();}
      return res.status(204).json({doc , message: "tugas has been deleted"});
    })
  },
}