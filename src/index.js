// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter from react-router-dom
import App from './App';


ReactDOM.render(
  <BrowserRouter>
  <Auth0Provider 
    domain="dev-bvdb6co0q1dl5yvf.us.auth0.com"
    clientId="KMbOgjWseIFwZWBUnalATCo6R73bIkVy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <App />
    </Auth0Provider> 
    </BrowserRouter>,
  document.getElementById('root')
);
