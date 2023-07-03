const axios = require("axios")
const {User, Post} = require("../db")

const createUserDB = async (name, email, phone) => {
    return await User.create({name, email, phone})
}

const getUserDB = async (id, source) => {
    const user = source === "api"
        ? (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data 
        : await User.findByPk(id, {
            include: {
                model: Post,
                attributes: ["title", "body"]
            }
        })
    return user             
}

const infoCleaner = (arr) => {
    return arr.map((user)=> {
        return {
            name:user.name,
            email:user.email,
            phone:user.phone,
            created:false
        }
    })
}

const getAllUsers = async () => {
    const usersDB = await User.findAll({
            include: {
                model: Post,
                attributes: ["title", "body"]
            }
        })
    const usersAPI = (await axios.get(`https://jsonplaceholder.typicode.com/users/`)).data
    const usersAPIOK = infoCleaner(usersAPI)
    return [...usersDB, ...usersAPIOK]
}
const getUserByName = async (name) => {
    const usersAPI = (await axios.get(`https://jsonplaceholder.typicode.com/users/`)).data
    const usersAPIOK = infoCleaner(usersAPI)
    const usersAPIFiltered = usersAPIOK.filter(user=> user.name === name)
    const usersDBFiltered = await User.findAll({where:{name : name}})
    //return [...usersDBFiltered]
    return [...usersAPIFiltered, ...usersDBFiltered]
}

module.exports = {
    createUserDB,
    getUserDB,
    getAllUsers,
    getUserByName
}