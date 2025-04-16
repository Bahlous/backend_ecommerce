
const express =require('express')
const { getAllUsers, deleteUser } = require("../controllers/user.controllers");
const isAdmin = require('../middleware/isAdmin');




const router = express.Router();

// test route user
// router.get("/test", (req, res)=>{
//     res.send("test 2");
// });

// // get all users 
router.get("/allUsers",isAdmin, getAllUsers );
// // delete one user 
router.delete('/:id',isAdmin, deleteUser)

module.exports= router