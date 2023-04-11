const Sequelize = require("sequelize");

const sequelize = new Sequelize("authorization", "postgres", "root", {
    dialect: "postgres",
    host: "localhost",
});

module.exports = sequelize;