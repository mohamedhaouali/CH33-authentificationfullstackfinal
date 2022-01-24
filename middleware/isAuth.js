const jwt = require("jsonwebtoken");
const User = require("../model/User");

const isAuth = async (req, res, next) => {

    try {
        // check token 
        const token = req.headers["authorization"]

        if (!token) {

            return res.status(401).send({ errors: [{ msg: "You are not authorized !!!" }] })

        }

        // decode : id from token

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        //console.log(decoded) // {id : 126651}

        // find the user

        const userToFind = await User.findOne({ _id: decoded.id })
        if (!userToFind) {
            return res.status(401).send({ errors: [{ msg: "You are not authorized !!!" }] })
        }

        res.status(200).send({ msg: "you are authorized", user: userToFind })
        req.user = userToFind

        next()

    } catch (error) {

        return res.status(401).send({ errors: [{ msg: "You are not authorized !!!" }] })

    }

}

module.exports = isAuth