import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashbord from './components/Dashborad/EmployeeDashbord';
import AdminDashbord from './components/Dashborad/AdminDashbord';
import Authprovider, { AuthContext } from './context/Authprovider';

const App = () => {
  const datas = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [whichuserlogin, setwhichuserlogin] = useState(null);

  useEffect(() => {
    const logginuser = localStorage.getItem('logginuser');
    if (logginuser) {
      const parsedUser = JSON.parse(logginuser); // Parse the user from localStorage
      setUser(parsedUser.role); // Set the user role
      setwhichuserlogin(parsedUser); // Store the logged-in user data  
    }
  }, []);

  const handleAuth = (email, password) => {
    if (datas) {
      const admin = datas.admin?.find((a) => a.email === email && a.password === password);
      if (admin) {
        console.log('This is admin');
        setUser('admin');
        setwhichuserlogin(admin);
        localStorage.setItem('logginuser', JSON.stringify({ role: 'admin', ...admin })); // Save the admin data
        return; // Exit the function early
      }

      const employees = datas.employee?.find((e) => e.email === email && e.password === password);
      if (employees) {
        console.log('This is employee');
        setUser('employee');
        setwhichuserlogin(employees);
        localStorage.setItem('logginuser', JSON.stringify({ role: 'employee', ...employees })); // Save the employee data
        return; // Exit the function early
      }
    }

    console.log('Check fields, wrong details');
  };

  return (
    <div>
      {!user ? <Login handleform={handleAuth} /> : ''}
      {user === 'admin' && <AdminDashbord  DATAS={whichuserlogin} />}
      {user === 'employee' && <EmployeeDashbord DATAS={whichuserlogin} />}
    </div>
  );
};

export default App;
