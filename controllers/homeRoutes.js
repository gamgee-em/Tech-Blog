const router = require('express').Router();
const  User = require('../models/User')
const title = `All Things Tech`;
const withAuth = require('../utils/withAuth');
router.get('/', (req, res) =>
    res.render('home', { title: `Welcome | ${ title }`, /* logged_in: false  */}));

router.get('/login', (req, res) =>
    res.render('login', { title: `Login | ${ title }` }));

router.get('/register', (req, res) =>
    res.render('register', { title: `Register | ${ title }` }));

router.get('/blogs', withAuth, async (req, res) =>{
    const user = await User.findOne({})
    if (req.session.logged_in) {
        res.render('blogs', {
            title: `Blogs | ${ title }`,
            username: user.username,
        });
    }
   
    //add handlebars data here
    console.log(req)
    console.log(user.username);
    
});

router.get('/logout', (req, res) =>
    res.render('home'));


router.get('*', (req, res) =>
    res.status(404).render('404', { title: `404 | ${ title }`}));


module.exports = router;