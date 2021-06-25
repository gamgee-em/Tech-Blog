const router = require('express').Router();
const User  = require('../../models/User');

router.post('/register', async (req, res) => {
    console.log('req body:',req.body);

    try {
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);
        //console.log('req body:',req.body);

        /* req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
            res.status(200).json(newUser);
        }); */
    } catch (err) {
        res.status(404).json(err);
    };
});

module.exports = router;