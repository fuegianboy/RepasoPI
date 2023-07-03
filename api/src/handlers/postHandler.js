const {createPostDB} = require("../controllers/postControllers.js")

const createPostHandler = async (req, res)=>{
    const {title, body, userId} = req.body
    try {
        const response = await createPostDB(title, body, userId)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }



    // res.status(200).send("CREANDO UN POSTTTTTTeooooo")
}


module.exports = {
    createPostHandler
}