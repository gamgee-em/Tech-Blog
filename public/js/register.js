const registerForm = $('#register-form');

const registerHandler = async (event) => {
    event.preventDefault();

    const fName = $('#f_name').val().trim();
    const lName = $('#l_name').val().trim();;
    const email = $('#email').val().trim();;
    const userName = $('#username').val().trim();;
    const password = $('#password').val().trim();;
    let res;

    if (fName && lName && email && userName && password) { 
        res = await fetch('api/users/register', {
            method: 'POST',
            body: JSON.stringify({ f_name, l_name, email, username, password }),
            headers: {'Content-Type': 'application/json' },
        })
     }
     console.log('res:', res);
         if (res) {
            document.location.replace('/blogs');
        } else {
            alert('Please fill out all required feilds');
        }
        
};

registerForm.submit(registerHandler);
