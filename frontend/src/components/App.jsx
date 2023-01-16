import React, { useState, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Login from './LoginPage.jsx';
import AuthContext from '../contexts/index.js';
import ErrorPage from './ErrorPage.jsx';
import useAuth from '../hooks/index.js';
import ChatPage from './ChatPage.jsx';
import Navbar from './Navbar.jsx';

const AuthProvider = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(currentUser ? { username: currentUser.username } : null);
  const logIn = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser({ username: userData.username });
  };
  const memoizedValue = useMemo(() => ({ logIn, user }), [user]);
  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
};

const PrivateOutlet = () => {
  const auth = useAuth();
  return auth.user ? <Outlet /> : <Navigate to="/login" />;
};

const App = () => (
  <AuthProvider>
    <Router>
      <div className="d-flex flex-column h-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateOutlet />}>
            <Route path="" element={<ChatPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  </AuthProvider>
);

export default App;
