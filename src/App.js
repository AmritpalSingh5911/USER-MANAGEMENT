import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList'; // your component
import CreateUser from './components/CreateUser'; // your component
import EditUser from './components/EditUser'; // your component
import UserDetail from './components/UserDetail'; // your component
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define a route for the root path ("/") and provide a valid component */}
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
