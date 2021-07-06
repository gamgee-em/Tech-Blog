const logoutBtn = $('#logout');

const logoutHandler = async (event) => {
    event.preventDefault();
    try {
        const res = await fetch('api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    console.log('logged out');
    console.log(res);
    res.ok ? document.location.replace('/') : alert(res.statusText);

    } catch (err) {
        res.status(404).json(err);
    }
    
};

logoutBtn.click(logoutHandler);