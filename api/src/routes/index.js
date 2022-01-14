const { Router } = require('express');
const gamesApi = require("../Controllers/videogamesApi")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/videogames",async(rec, res) =>{
    res.send("ass")
})

router.get("/videogame",async(rec, res) =>{
    res.send("Bienvenidos a mi primera ruta")
})

router.get("/genres",async(rec, res) =>{
    res.send("Bienvenidos")
})

router.post("/videogame",async(rec, res) =>{
    res.send("Busqueda")
})
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
