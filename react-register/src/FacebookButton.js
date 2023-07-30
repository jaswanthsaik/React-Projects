import React, { useState, useEffect } from 'react';

function FacebookLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Load the Facebook SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '1418914228864587',
        cookie     : true,
        xfbml      : true,
        version    : 'v12.0'
      });
      
      window.FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          setIsLoggedIn(true);
        }
      });
    };
  }, []);

  const handleLogin = () => {
    window.FB.login(function(response) {
      if (response.status === 'connected') {
        setIsLoggedIn(true);
        // Redirect to dashboard page
        window.location.href = 'http://localhost:3000/verify-email';
      }
    }, {scope: 'public_profile,email'});
  }

  const handleLogout = () => {
    window.FB.logout(function(response) {
      setIsLoggedIn(false);
    });
  }

  return (
    <div>
      <h1>Facebook Account</h1>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) :  (
        
        <button onClick={handleLogin}>Login with Facebook</button>
      )}
    </div>
  );
}

export default FacebookLogin;
