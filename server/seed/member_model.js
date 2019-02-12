'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var memberSchema = new Schema({
  first_name: String,
  last_name: String,
  address: String,
  city: String,
  zipcode: String,
  State: String,
  phone: String,
  email: String,
  agent_id: Number
}, {
  timestamps: true
});

exports.default = _mongoose2.default.model('Member', memberSchema);
