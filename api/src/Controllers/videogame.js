//const { get } = require('../routes');
const videogamesApi =require('./videogamesApi');
const videogamesDB =require('./videogamesDB')

module.export=  async function getAllGames() {
   const gamesApi = await videogamesApi();
   const gamesDB = await videogamesDB();
   const allGames = await gamesApi.concat(gamesDB)

   return allGames;
}
