import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';

function LoginPage() {
  const loadGoogleApi = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        gapi.load('auth2', () => {
          gapi.auth2.init({
            client_id: '1013902378767-lj6e8gffap9h7sdjfek0rju1h43hba7i.apps.googleusercontent.com',
          });
          resolve();
        });
      };
      document.body.appendChild(script);
    });
  };

  const handleGoogleLogin = async () => {
    await loadGoogleApi();
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      const profile = googleUser.getBasicProfile();
      console.log('ID: 1013902378767-lj6e8gffap9h7sdjfek0rju1h43hba7i.apps.googleusercontent.com' + profile.getId());
      console.log('Name: jaswanth' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: Jaswanthsai3459@gmail.com ' + profile.getEmail());
      window.location.href = 'http://localhost:3000/verify-email'; 
    });
  };

  useEffect(() => {
    loadGoogleApi();
  }, []);

  return (
    <div>
      <h1>Google Account</h1>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
}

export default LoginPage;
