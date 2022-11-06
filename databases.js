var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(' :memory: ', (error) => {
    if(error){
        return console.error(error.message);
    }
    console.log('Connected to db');
});

module.exports = db;

db.close();
