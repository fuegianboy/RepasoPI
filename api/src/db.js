const {Sequelize} = require("sequelize")  // importamos sequelize para db
require("dotenv").config() // de esta manera traemos las claves de .env a db
const UsersModel = require("./models/UsersModel")  // importamos los models, de users y posts, osea la definicion de las tablas
const PostsModel = require("./models/PostsModel")  // importamos los models, de users y posts, osea la definicion de las tablas

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, 
    {logging:false}
    ) // nos conectamos con la DB, podemos usar info en .env

//---------------------
UsersModel(sequelize) // definicion de modelos a usar
PostsModel(sequelize)

//---------------------
const {Post, User} = sequelize.models

//---------------------
User.hasMany(Post) // un usuario, muchos post, un post, pertenece a un usuario 
Post.belongsTo(User)

//---------------------
module.exports = {
    ...sequelize.models,    // aca exportamos estos modelos
    conn: sequelize
}