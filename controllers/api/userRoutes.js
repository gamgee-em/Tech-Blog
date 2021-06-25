const router = require('express').Router();
const User  = require('../../models/User');

router.post('/register', async (req, res) => {
    try {
       console.log(req.body)
    } catch {
        res.status(404).render('/404');
    }
  
    
});

module.exports = router;