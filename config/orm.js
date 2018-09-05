
var connection = require("../config/connection.js");

var orm = {

    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += "("
        queryString += cols
        queryString += ") ";
        queryString += "VALUES (";
        queryString += vals
        queryString += ");"

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    

    updateOne: function(table, col, value, condition, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE" + condition;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
};

module.exports = orm;