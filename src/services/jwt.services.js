const JWTKEY = require("./../constants/keys/JWTKEY");
const jwt = require("jsonwebtoken")
const dataBase = require("./database.services")

const getToken = ()=>{
    return jwt.sign(dataBase, JWTKEY)
}

module.exports = {
    getToken
}