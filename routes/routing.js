const router = require('express').Router();
//const router = express.Router();
const title = `All Things Tech`;

// routing
router.get('/', (req, res) => {
    res.render('home', { title: `Welcome | ${ title }`, logged_in: false });
});

router.get('/login', (req, res) => {
    res.render('login', { title: `Login | ${ title }` });
});

router.get('/blogs', (req, res) => {
    res.render('blogs', { 
        title: `Blogs | ${ title }`,
        name: 'Sam',
    });
});

router.get('/register', (req, res) => {
    res.render('register', { title: `Register | ${ title }` })
})

router.get('*', (req, res) => 
    res.status(404).render('404', { title: `404 | ${ title }`}));

module.exports = router;