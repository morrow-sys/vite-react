// AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AdminHeader from './components/AdminHeader';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <AdminHeader />
        <main style={{ flexGrow: 1, padding: '20px', backgroundColor: '#f0f2f5' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
