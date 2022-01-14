const {Router} = require("express");
const gamesApi = require("../Controllers/videogamesApi");

const router = Router();


router.get(gamesApi , async (req,res)=> {
    

})

module.exports = router