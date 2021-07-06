const registerForm = $('#register-form');

const registerHandler = async (event) => {
    event.preventDefault();

    const f_name = $('#f_name').val().trim();
    const l_name = $('#l_name').val().trim();
    const email = $('#email').val().trim();
    const username = $('#username').val().trim();
    const password = $('#password').val().trim();
    let res;

    console.log('Input Values:',f_name, l_name, email, username, password)

    if (f_name && l_name && email && username && password) {
        res = await fetch('api/users/register', {
            method: 'POST',
            body: JSON.stringify({ f_name, l_name, email, username, password }),
            headers: {'Content-Type': 'application/json' },
        });
     };
     console.log('res:', res);
         if (res.ok) {
            document.location.replace('/login');
        } else {
            alert('Please fill out all required fields');
        };
        
};

registerForm.submit(registerHandler);
