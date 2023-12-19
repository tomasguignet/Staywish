const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Comment", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        rating: {
            type: DataTypes.ENUM("1","2","3","4","5"),
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
        }
    })
}