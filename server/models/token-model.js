const { Schema, model } = require('mongoose');
const db = require('../db.js');
const Sequelize = require('sequelize');

// const TokenSchema = new Schema({
//     user: {type: Schema.Types.ObjectId, ref: 'User'},
//     refreshToken: {type: String, required: true},
// })

// module.exports = model('Token', TokenSchema);

const Token = db.define("token", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  refreshToken: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports =  Token;