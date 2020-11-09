var orm = require("../config/orm");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", function (res) {
      cb(res);
    });
  },

  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
