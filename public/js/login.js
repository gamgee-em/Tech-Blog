const email = $('#email').val().trim();
const password = $('#password').val().trim();
const loginForm = $('#login-form');
let res;

const loginHandler = async (event) => {
    event.preventDefault();

   if (email && password) {
        res = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password}),
        headers: {'Content-type': 'application/json' },
    });
   };
   console.log('res:', res);
   if (res.ok) {
       document.location.replace('/blogs');
   } else {
       alert(res.statusText);
   }
};

loginForm.submit(loginHandler);