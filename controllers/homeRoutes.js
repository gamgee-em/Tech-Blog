const router = require('express').Router();
const { Post, User } = require('../models')
const title = `All Things Tech`;

router.get('/', (req, res) =>
    res.render('home', { title: `Welcome | ${ title }`, logged_in: false }));

router.get('/login', (req, res) =>
    res.render('login', { title: `Login | ${ title }` }));

router.get('/register', (req, res) =>
    res.render('register', { title: `Register | ${ title }` }));

router.get('/blogs', (req, res) =>
    res.render('blogs', {
        title: `Blogs | ${ title }`,
        //! try to get correct value here
        name: req.body.username,
    }));

router.get('*', (req, res) =>
    res.status(404).render('404', { title: `404 | ${ title }`}));


module.exports = router;