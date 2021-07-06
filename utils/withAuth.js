const withAuth = (req, res, next) => {
    if(req.session.username) {
        req.session.logged_in = true;
        res.redirect('/blogs');
    } else {
        res.status(404).redirect('404');
    }
};

module.exports = withAuth;