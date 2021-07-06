const loginForm = $('#login-form');

const loginHandler = async (event) => {
    event.preventDefault();

    const username = $('#username').val().trim();
    const password = $('#password').val().trim();
    let res;
    
   if (username && password) {
        res = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password}),
        headers: {'Content-type': 'application/json' },
    });
   };
   console.log(res.ok);
   if (res.ok) {
       document.location.replace('/blogs');
   } else {
       alert(res.statusText);
   }
};

loginForm.submit(loginHandler);