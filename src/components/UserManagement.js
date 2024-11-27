import React, { useState } from 'react';
import { users } from '../mockData/mockApi';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Modal } from '@mui/material';
import '../styles/styles.css';

const UserManagement = () => {
  const [userList, setUserList] = useState(users);
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '', status: 'Active' });

  const handleAddUser = () => {
    setUserList([...userList, { ...newUser, id: userList.length + 1 }]);
    setNewUser({ name: '', email: '', role: '', status: 'Active' });
    setOpen(false);
  };

  return (
    <div>
      <h2>User Management</h2>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Add User</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ padding: '20px', margin: '100px auto', backgroundColor: 'white', width: '300px' }}>
          <h3>Add New User</h3>
          <TextField label="Name" fullWidth value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
          <TextField label="Email" fullWidth value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
          <TextField label="Role" fullWidth value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })} />
          <Button onClick={handleAddUser} variant="contained" color="primary" style={{ marginTop: '10px' }}>Save</Button>
        </div>
      </Modal>
    </div>
  );
};

export default UserManagement;
