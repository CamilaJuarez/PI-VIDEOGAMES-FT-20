const {Axios, default: axios}= require('axios');
const e = require('express');
const {APIKEY} = process.env;
const {GET_GAMES} = require("../utils/info")

const getApi= async(rec) =>{
    //https://api.rawg.io/api/games
    const llamado = await axios.get(`${GET_GAMES}?key=${APIKEY}&page_size=40`);
    const llamado2 = await axios.get(`${GET_GAMES}?key=${APIKEY}&page=4&page_size=40`);
    const llamado3 = await axios.get(`${GET_GAMES}?key=${APIKEY}&page=8&page_size=20`);

    const games = [];

    llamado.data.results.map(el => {
        games.push({
            name : el.name,
            released : el.released,
            image : el.background_image,
            genres : el.genres,
            rating : el.ratings,
            platforms : el.platforms,

        })
    })

    llamado2.data.results.map(el => {
        games.push({
            name : el.name,
            released : el.released,
            image : el.background_image,
            genres : el.genres,
            rating : el.ratings,
            platforms : el.platforms,

        })
    })

    llamado3.data.results.map(el => {
        games.push({
            name : el.name,
            released : el.released,
            image : el.background_image,
            genres : el.genres,
            rating : el.ratings,
            platforms : el.platforms,

        })
    })

    return games;

}
const gamesApi = getApi;

module.exports = gamesApi