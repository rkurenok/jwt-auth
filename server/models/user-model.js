const { Schema, model } = require('mongoose');
const db = require('../db.js');
const Sequelize = require('sequelize');
const Token = require('./token-model.js');

// const UserSchema = new Schema({
//     email: { type: String, unique: true, required: true },
//     password: { type: String, required: true },
//     isActivated: { type: Boolean, default: false },
//     activationLink: { type: String },
// })

// module.exports = model('User', UserSchema);

const User = db.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isActivated: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    activationLink: {
        type: Sequelize.STRING
    }
});

User.hasOne(Token);

module.exports = User;