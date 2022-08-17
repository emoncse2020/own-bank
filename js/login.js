// stem number 1:add click event handler with the submit button
document.getElementById('button-submit').addEventListener('click', function () {
    // step 2: get the email address inside the email input field
    // always remember to use .value to get the text form an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3: get password;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //    step 4: 
    if (email === 'your@bank.com' && password === "secret") {
        window.location = 'bank.html';
    }
    else {
        alert('🤪🤪 Password vule gele taka to pabana mama 🤪🤪🤪');
    }


})