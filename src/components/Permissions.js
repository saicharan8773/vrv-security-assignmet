import React, { useState } from 'react';
import { roles } from '../mockData/mockApi';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Modal, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import '../styles/styles.css';

const Permissions = () => {
  const [permissions, setPermissions] = useState(['Read', 'Write', 'Delete']); // Initial permissions
  const [rolePermissions, setRolePermissions] = useState(roles); // Roles with their permissions
  const [newPermission, setNewPermission] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedPermission, setSelectedPermission] = useState('');

  // Add new permission
  const handleAddPermission = () => {
    if (newPermission && !permissions.includes(newPermission)) {
      setPermissions([...permissions, newPermission]);
      setNewPermission('');
      setOpen(false);
    }
  };

  // Assign permission to a role
  const handleAssignPermission = () => {
    if (selectedRole && selectedPermission) {
      setRolePermissions(
        rolePermissions.map(role =>
          role.name === selectedRole && !role.permissions.includes(selectedPermission)
            ? { ...role, permissions: [...role.permissions, selectedPermission] }
            : role
        )
      );
      setSelectedRole('');
      setSelectedPermission('');
    }
  };

  return (
    <div>
      <h2>Permissions Management</h2>
      <div style={{ marginBottom: '20px' }}>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Add Permission</Button>
      </div>

      {/* List all permissions */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Permission Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {permissions.map((permission, index) => (
            <TableRow key={index}>
              <TableCell>{permission}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Assign permission to role */}
      <h3>Assign Permission to Role</h3>
      <FormControl style={{ margin: '10px', minWidth: '200px' }}>
        <InputLabel>Role</InputLabel>
        <Select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
          {rolePermissions.map((role) => (
            <MenuItem key={role.id} value={role.name}>{role.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl style={{ margin: '10px', minWidth: '200px' }}>
        <InputLabel>Permission</InputLabel>
        <Select value={selectedPermission} onChange={(e) => setSelectedPermission(e.target.value)}>
          {permissions.map((permission, index) => (
            <MenuItem key={index} value={permission}>{permission}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="secondary" onClick={handleAssignPermission}>
        Assign
      </Button>

      {/* List roles with their permissions */}
      <h3>Roles with Permissions</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Role</TableCell>
            <TableCell>Permissions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rolePermissions.map(role => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              <TableCell>{role.permissions.join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Modal for adding a new permission */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ padding: '20px', margin: '100px auto', backgroundColor: 'white', width: '300px' }}>
          <h3>Add New Permission</h3>
          <TextField
            label="Permission Name"
            fullWidth
            value={newPermission}
            onChange={(e) => setNewPermission(e.target.value)}
          />
          <Button onClick={handleAddPermission} variant="contained" color="primary" style={{ marginTop: '10px' }}>
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Permissions;
