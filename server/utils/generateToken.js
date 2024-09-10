const jwt = require("jsonwebtoken")

const generateLoginToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '30d' })
}

const passwordResetToken = async (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '2min' })
}

module.exports = {
    generateLoginToken,
    passwordResetToken
}