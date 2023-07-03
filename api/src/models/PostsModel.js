const {DataTypes} = require("sequelize")

module.exports = (sequelize) => { 
    sequelize.define("Post", {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    body:{
        type: DataTypes.STRING,
        allowNull: false,
    },

},
    {timestamps: false} // cuando se agrega un usuario, me agrega la fecha de cuando se creo el usuario, le puse false, no quiero
    )
}