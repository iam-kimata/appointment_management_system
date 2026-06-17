import './App.css'
import Login from './pages/Auth/Login';
import AdminDashboard from './pages/Admin/Dashboard';
import Users from './pages/Admin/Users'
import AdminCancelledAppointments from './pages/Admin/CancelledAppointments';
import DoctorDashboard from './pages/Doctor/Dashboard';
import DoctorCancelledAppointments from './pages/Doctor/CancelledAppointments';

function App() {
  return (
    <div>
      <AdminDashboard />
    </div>
  );
};

export default App;
