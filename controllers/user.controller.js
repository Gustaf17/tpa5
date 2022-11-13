const User = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const KEY = "yessir";


module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.find({},"-__v -password")

    res.json({
      message:"succes get data",
      data: users
    })
    } catch (error) {
      console.log(error)
    }
    
  },

  getUserByID: (req, res) => {

  },

  addUser: (req, res) => {
    const data = req.body

    const saltRounds = 10
    const hash = bcrypt.hashSync(data.password, saltRounds)
    data.password = hash

    const user = new User(data)
    user.save()

    res.json({
      message:"data created!!!",
    })
  },

  deleteUserByID: (req, res) => {
 
  },

  updateUserByID: (req, res) => {

  },
  login: async (req,res) =>{
    const data = req.body

    const user = await User.findOne({email : data.email})

    const cekPass = bcrypt.compareSync(data.password, user.password)

    const token = jwt.sign(
      {
        id: user.id,
      },
      KEY ,{expiresIn : '10m'}
    );

    if(cekPass){
      res.json({
        message: "Berhasil login",
        token
      })
    } else {
      res.json({
        message: "Ente siapa?"
      })
    }
  },
  
}