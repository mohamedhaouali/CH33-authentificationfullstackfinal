const { body, validationResult } = require('express-validator');

exports.registerValidator = () => [
    body('name', 'Name is required').notEmpty(),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must contain at least 6 charac !!').isLength({ min: 6 }),


]

exports.loginValidator = () => [

    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must contain at least 6 charac !!').isLength({ min: 6 }),


]

exports.validations = (req, res, next) => {
    // affichage erreur 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // 
    next()
}