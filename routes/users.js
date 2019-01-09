const express = require('express');
const router = express.Router();

// Login and Register Page
router.get('/login', (req, res) => 
    res.render('login', {
        title: 'Dashboard Authentication Login'
    }
));
router.get('/register', (req, res) => 
    res.render('register', {
    title: 'Dashboard Auth Registration'
    }
));

// Registration Data
router.post('/register', (req, res) => {
    const {
        username,
        email,
        password,
        password2
    } = req.body;
    let errors = [];

    // Form requirements
    if (!username || !email || !password || !password2) {
        errors.push({
            msg: 'Please fill in the required fields'
        })
    } else {
        res.render('login');
        console.log('User succesfully registered');
    };
    // Password requirements
    if (password !== password2) {
        error.push({
            msg: 'Passwords do not match'
        })
        return false;
    } else {
        return true;
    }
});

module.exports = router;
