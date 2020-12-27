let db = require('../database/db');

function getAllUsers() {
    return db.query('select * from users');
}

/**** FOR SIGN UP ****/
function createUser(){
    let sql = `INSERT INTO Users (LastName, FirstName, Email, Password, Imageurl) 
    VALUES ('Smith','Adam','adamsmith124@gmail.com','thisisadamsmith','https://randomuser.me/api/portraits/med/men/52.jpg');`;
    return db.query(sql);
}

module.exports = {
    getAllUsers,
    createUser
}