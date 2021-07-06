const router = require('express').Router();
const User  = require('../../models/User');

router.post('/', (req, res) => {
    console.log('/',req.body);
    /* try {
        const userData = User.create( req.body );

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            //req.session.password = userData.password;
            req.session.logged_in = true;
        });
    }  catch (err) {
        res.status(404).json(err);
    }*/
});

router.post('/register', async (req, res) => {
    console.log('req body:',req.body);

    try {
        const userData = await User.create(req.body);

        /* req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username
            req.session.logged_in = true;
            res.status(200).json(userData);
        }); */
        res.status(200).json(userData);
    } catch (err) {
        console.log("Error in post route for register", err)
        res.status(404).json(err);
    };
});

router.post('/login', async (req, res) => {
    console.log('Login Data:',req.body);
    try {
        const userData = await User.findOne({ where: { username: req.body.username }});
        req.session.save(() => {
            req.session.user_id = userData.id,
            req.session.username = userData.username
            //req.session.logged_in = true,

            res.status(200).json(userData);
            //res.render('/blogs');
        });
    } catch (err) {
        console.error('Error in post route for login', err);
        res.status(404).json(err);
    };
});

router.post('/blogs', (req, res) => {
    res.status(200).render('/blogs');
});

router.post('/logout', async (req, res) => {
    console.log('Logged out', req.body);
    req.session.logged_in ?
    req.session.destory(() => res.status(204).end()) :
    res.status(404).end();
});

module.exports = router;