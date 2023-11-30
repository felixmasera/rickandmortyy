
const axios = require("axios");
const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";
const getCharById = (res, id) => {
    axios
        .get(`${URL}/${id}?key=${API_KEY}`)
        .then((Response) => Response.data)
        .then((data) => {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                status: data.status,
                species: data.species,
                image: data.image,
                origin: data.origin,
                location: data.location,
            };
            res
                .writeHead(200, { "Content-Type": "application/json" })
                .end(JSON.stringify(character));
        })
        .catch((error) =>
            res
                .writeHead(500, { "Content-Type": "text/plain" })
                .end({ message: error.message })
        );
};
module.exports = getCharById
