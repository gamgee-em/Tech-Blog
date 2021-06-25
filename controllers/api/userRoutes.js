const router = require('express').Router();
//const { Post, User } = require('../models');

router.post('/', async (req, res) => {
    const userData = await User.create(req.body);

    req.session.save(() => {
        req.session.user_id = userData.id;
    });
});

module.exports = router;