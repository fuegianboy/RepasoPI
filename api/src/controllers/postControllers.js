const {Post} = require("../db")

const createPostDB = async (title, body, userId) => {
    const post = await Post.create({title, body})

    await post.setUser(userId)

    return post
}

module.exports = {
    createPostDB
}