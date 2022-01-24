// require express

const express = require("express");
const { register, login, currentUser } = require("../controllers/user");
const isAuth = require("../middleware/isAuth");
const { registerValidator, validations, loginValidator } = require("../middleware/userValidator");

// require Router

const router = express.Router();

/* test

//router.get('/test', (req, res) => {
    res.send('hello world !!')
})

*/

// @desc: register
// @patch: /register
// @method: POST
// @data : req.body

// 2 register mil controllers->user

router.post('/register', registerValidator(), validations, register)


// @desc: login
// @patch: /login
// @method: POST
// @data : req.body


router.post('/login', loginValidator(), validations, login)


// @desc: current user
// @patch: /current
// @method: GET
// @data : no


router.get('/current', isAuth, currentUser)


module.exports = router;
