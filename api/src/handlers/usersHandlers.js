const {createUserDB, getUserDB, getUserByName, getAllUsers} = require("../controllers/userControllers")

const getUsersHandler = async (req, res)=>{
    const {name} = req.query
    try {
        if (name) {
            const userByName = await getUserByName(name)
            res.status(200).json(userByName)
        } else {
            const response = await getAllUsers()
            res.status(200).json(response)
        }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


const getDetailHandler = async (req, res)=>{
    const {id} = req.params

    const source = isNaN(id) ? "db": "api"
    try {
        const response = await getUserDB(id, source)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const createUserHandler = async (req, res)=>{
    const {name, email, phone} = req.body
    try {
        const response = await createUserDB(name, email, phone)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {
    getUsersHandler,
    getDetailHandler,
    createUserHandler
}