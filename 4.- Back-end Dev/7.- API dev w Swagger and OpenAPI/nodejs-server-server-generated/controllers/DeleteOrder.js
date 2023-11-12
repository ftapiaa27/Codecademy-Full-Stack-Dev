'use strict';

var utils = require('../utils/writer.js');
var DeleteOrder = require('../service/DeleteOrderService');

module.exports.delete_order = function delete_order (req, res, next) {
  DeleteOrder.delete_order()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
