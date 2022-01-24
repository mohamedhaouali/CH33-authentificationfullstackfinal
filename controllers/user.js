const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');


const User = require("../model/User")

exports.register = async (req, res) => {

    try {

        const { name, email, password, phone } = req.body


        //validateur email unique (chek mail)

        const userToCheck = await User.findOne({ email: email })

        if (userToCheck) {
            return res.status(400).send({ errors: [{ msg: "User already exist !!!" }] })
        }

        //instance of model

        const newUser = new User({ name, email, password, phone })

        //hash password

        const salt = 10

        const hashedPassword = await bcrypt.hash(password, salt)

        newUser.password = hashedPassword

        await newUser.save()

        //token

        const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, { expiresIn: '1h' })


        res.status(200).send({ msg: "Register success ...", user: newUser, token })

    }

    catch (error) {

        return res.status(400).send({ errors: [{ msg: "Register faild !!!" }] })

    }
}

// login

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body

        // check email

        const userToCheck = await User.findOne({ email })

        if (!userToCheck) {

            return res.status(400).send({ errors: [{ msg: "Bad credential !!!" }] })

        }

        // check password

        const isMatch = await bcrypt.compare(password, userToCheck.password)
        if (!isMatch) {
            return res.status(400).send({ errors: [{ msg: "Bad credential !!!" }] })
        }

        const token = jwt.sign({ id: userToCheck._id }, process.env.SECRET_KEY, { expiresIn: '1h' })

        res.status(200).send({ msg: "login success", user: userToCheck, token })

    } catch (error) {

        return res.status(400).send({ errors: [{ msg: "login faild !!!" }] })

    }

}

exports.currentUser = (req, res) => {
    res.send(req.user)
}