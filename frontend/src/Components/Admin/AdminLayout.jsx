import React from "react";
import Sidebar from "./AdminSidebar";
import AdminInfo from "./AdminInfo"; 
import AdminLogin from "./AdminLogin";


export default function AdminLayout() {
  const { user, logout } = AdminInfo();
  return (
    <>
      {user ? (
        <>
          <Sidebar />
        </>
      ) : (
        <AdminLogin />
      )}
    </>
  );
}
