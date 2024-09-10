const jwt = require('jsonwebtoken')
const createError = require('http-errors')

module.exports = {

    isValidEmailToken: (req, res, next) => {
        try {
            const emailToken = req.headers["x-access-token"]
            if (!emailToken) throw createError(400, "Token missing")

            let verifiedToken;
            try {
                verifiedToken = jwt.verify(emailToken, process.env.SECRET_KEY)
            } catch (error) {
                throw createError.BadRequest("The password reset link you used is either expired or invalid.")
            }

            if (verifiedToken) {
                next(verifiedToken.id)
            }
        } catch (error) {
            next(error)
        }
    }
}