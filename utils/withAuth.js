const withAuth = (req, res, next) => {
    //if(req.session.logged_in) {
    if(req.session.username) {
        req.session.logged_in = true;
        res.redirect('api/users/blogs');
    } else {
        res.status(404).redirect('404');
    }
};

module.exports = withAuth;