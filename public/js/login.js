$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = $("form.login");
  const usernameInput = $("input#username-input");
  const passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's a username and password entered
  loginForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username || !userData.password) {
      console.log("return");
      return;
    }

   // console.log("userdata" + userData.password);
    // If we have a username and password we run the loginUser function and clear the form
    loginUser(userData.username, userData.password);
    usernameInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(username, password) {
    
    $.post("/api/login", {
      username: username,
      password: password
    },
    console.log("login" + username))
      .then(() => {
        
        console.log("window replace");
        window.location.replace("/admin");
        
      })
      .catch(err => {
        console.log(err);
      });
  }
});
