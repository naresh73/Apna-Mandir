const express = require('express');
const cors = require('cors');
const app = express();
const port = 7009;
const db = require('./db/index');
const userModel = require('./model/user.model');
const { getJWTtoken } = require('./servives/jwt');


db();
app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email })
    console.log(user);

    if (!user) {
        return res.send({ message: "user does not exits" })
    }

    if (password !== user.password) {
        return res.send({ message: "password does not match" })
    }

    const Token = getJWTtoken(user)
    // console.log("Token=", Token);
    res.send({ message: "login succussesfully", user, Token })
})

app.post('/register', async (req, res) => {

    const existUser = await userModel.findOne({ email: req.body.email })
    if (existUser) {
        res.send({
            message: "user already exist"
        })
    }
    else {
        try {
            const newUser = userModel( req.body )
            await newUser.save()
            res.send({ message: "Account created successfully", registered: true })
        } catch (error) {
            res.send({ Error: error.message })
        }
    }


    // console.log(user);
})

app.listen(port, console.log("server is listening on port - ", port));