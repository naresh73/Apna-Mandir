const jwt = require('jsonwebtoken')

const getJWTtoken = (payload)=>{
        const token = jwt.sign({payload},"1234")
        return token
}

const verifyjwt = (token)=>{
    const isValidUser = jwt.verify(token,"1234")
    return isValidUser
}

module.exports = {getJWTtoken,verifyjwt}