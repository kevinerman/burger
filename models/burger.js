
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(table, col, value, col2, val2, cb) {
        orm.updateOne("burgers", col, val, col2, val2, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;