import { useAuth0 } from "@auth0/auth0-react";
import './header.css';

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const getUsername = () => {
    if (isAuthenticated) {
      // Extract the username part before "@" and remove numbers
      const username = user.name.split('@')[0].replace(/\d/g, '');
      // Capitalize the username
      const capitalizedUsername = username.toUpperCase();
      return capitalizedUsername;
    }
    return '';
  }

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <h1>DigitalMyBusinessServices</h1>
        </div>
        <nav className="menu">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#help">Our Help</a>
        </nav>
        {isAuthenticated && (
          <h3>{getUsername()}</h3>
        )}
        {isAuthenticated ? (
          <button className="login-button" onClick={(e) => { logout() }}>Logout</button>
        ) : (
          <button className="login-button" onClick={(e) => { loginWithRedirect() }}>
            Login
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
