import React, { useState } from 'react';
import { roles } from '../mockData/mockApi';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Modal, TextField } from '@mui/material';
import '../styles/styles.css';

const RoleManagement = () => {
  const [roleList, setRoleList] = useState(roles);
  const [open, setOpen] = useState(false);
  const [newRole, setNewRole] = useState({ name: '', permissions: [] });

  const handleAddRole = () => {
    setRoleList([...roleList, { ...newRole, id: roleList.length + 1 }]);
    setNewRole({ name: '', permissions: [] });
    setOpen(false);
  };

  return (
    <div>
      <h2>Role Management</h2>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Add Role</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Role Name</TableCell>
            <TableCell>Permissions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roleList.map(role => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              <TableCell>{role.permissions.join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ padding: '20px', margin: '100px auto', backgroundColor: 'white', width: '300px' }}>
          <h3>Add New Role</h3>
          <TextField label="Role Name" fullWidth value={newRole.name} onChange={(e) => setNewRole({ ...newRole, name: e.target.value })} />
          <TextField label="Permissions (comma-separated)" fullWidth value={newRole.permissions.join(',')} onChange={(e) => setNewRole({ ...newRole, permissions: e.target.value.split(',') })} />
          <Button onClick={handleAddRole} variant="contained" color="primary" style={{ marginTop: '10px' }}>Save</Button>
        </div>
      </Modal>
    </div>
  );
};

export default RoleManagement;
