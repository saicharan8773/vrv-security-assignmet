import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import UserManagement from './UserManagement';
import RoleManagement from './RoleManagement';
import Permissions from './Permissions';
import '../styles/styles.css';

const Dashboard = () => {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>RBAC Admin Dashboard</h1>
        <nav>
          <Link to="/users" style={{ margin: '10px' }}>User Management</Link>
          <Link to="/roles" style={{ margin: '10px' }}>Role Management</Link>
          <Link to="/permissions" style={{ margin: '10px' }}>Permissions</Link>
        </nav>
        <Routes>
          <Route path="/users" element={<UserManagement />} />
          <Route path="/roles" element={<RoleManagement />} />
          <Route path="/permissions" element={<Permissions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Dashboard;
