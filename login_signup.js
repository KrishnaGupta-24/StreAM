// Handle form submission for login and signup
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
  
    // Here, you can send the data to the server or handle the login logic
    console.log('Login:', email, password);
  });
  
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
  
    // Here, you can send the data to the server or handle the sign-up logic
    console.log('Sign Up:', name, email, password);
  });
  