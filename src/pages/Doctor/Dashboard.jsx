import { useState } from "react";
import Sidebar from "../../components/Doctor/Sidebar";

const Dashboard = () => {
    const [appointments] = useState([
        { id: 1, doctor: "Aloyce Kimata", patient: "Paul Kenedy", date: "12/09/2026", time: "12:00", status: "Scheduled" },
        { id: 2, doctor: "Nyelu Mwamkinga", patient: "Rajabu Shabani", date: "30/10/2026", time: "07:15", status: "Cancelled" },
    ]);

    return (
        <div className="d-flex">
            {/* sidebar */}
            <Sidebar />

            <div className="container py-5 page-content">
                <div className="card">
                    <div className="card-header bg-dark text-light fs-5">Available Appointments</div>
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Doctor Name</th>
                                        <th>Patient Name</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.map((appointment, index) => (
                                        <tr key={appointment.id}>
                                            <td>{index + 1}</td>
                                            <td>{appointment.doctor}</td>
                                            <td>{appointment.patient}</td>
                                            <td>{appointment.date}</td>
                                            <td>{appointment.time}</td>
                                            <td 
                                                className={
                                                    appointment.status === "Scheduled"
                                                        ? "text-success"
                                                        : "text-warning"
                                                }
                                            >
                                                {appointment.status}
                                            </td>
                                            <td>
                                                <button className="btn btn-warning text-light btn-sm">Cancel</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;