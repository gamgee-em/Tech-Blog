const registerForm = $('#register-form');

const registerHandler = async (event) => {
    event.preventDefault();

    const fName = $('#f_name').val().trim();
    const lName = $('#l_name').val().trim();
    const email = $('#email').val().trim();
    const userName = $('#username').val().trim();
    const password = $('#password').val().trim();
    let res;
    console.log('Input Values:',fName, lName, email, userName, password)

    if (fName && lName && email && userName && password) {
        res = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify({ fName, lName, email, userName, password }),
            headers: {'Content-Type': 'application/json' },
        })
     }
     console.log('res:', res);
         if (res.ok) {
            document.location.replace('/register');
        } else {
            alert('Please fill out all required feilds');
        }
        
};

registerForm.submit(registerHandler);
