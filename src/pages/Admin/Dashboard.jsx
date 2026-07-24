import { useState } from "react";
import Sidebar from "../../components/Admin/Sidebar";

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);

    const [appointments] = useState([
        { id: 1, patient: "Aloyce Kimata", doctor: "Paul Kenedy", date: "12/09/2026", time: "12:00", status: "Scheduled" },
        { id: 2, patient: "Nyelu Mwamkinga", doctor: "Rajabu Shabani", date: "30/10/2026", time: "07:15", status: "Cancelled" },
    ]);

    const [patients] = useState([
        { id: 1, fullName: "Aloyce Kimata" },
        { id: 2, fullName: "Nyelu Mwamkinga" },
        { id: 3, fullName: "Rajabu Shabani" },
    ]);

    const [doctors] = useState([
        { id: 1, fullName: "Rajabu Shabani" },
        { id: 2, fullName: "Denis Junior" },
        { id: 3, fullName: "Asha Mohammed" },
    ]);

    return (
        <div>
            {/* sidebar */}
            <Sidebar />
            
            <div className="container py-5 page-content">
                <div className="row text-center text-light mb-5">
                    <div className="col">
                        <div className="card p-4 bg-success">
                            <i className="bi bi-people-fill fs-1"></i>
                            <h3>15</h3>
                            <p>Total Patients</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card p-4 bg-primary">
                            <i className="bi bi-people-fill fs-1"></i>
                            <h3>10</h3>
                            <p>Total Doctors</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card p-4 bg-warning">
                            <i className="bi bi-calendar-date-fill fs-1"></i>
                            <h3>5</h3>
                            <p>Total Appointments</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header bg-dark text-light fs-5">Appointments
                        <button className="btn btn-light m-2 p-1" onClick={() => setShowModal(true)}>
                            <i className="bi bi-plus"></i>
                        </button>
                    </div>
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Patient Name</th>
                                        <th>Doctor Name</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.map((appointment, index) => (
                                        <tr key={appointment.id}>
                                            <td>{index + 1}</td>
                                            <td>{appointment.patient}</td>
                                            <td>{appointment.doctor}</td>
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
                                            <td>
                                                <button className="btn btn-danger text-light btn-sm">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* modal */}
                {showModal && (
                    <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header bg-success text-light">
                                    <h5 className="modal-title text-center fs-4 w-100">Create Appointment</h5>
                                    <button className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
                                </div>
                                <div className="modal-body p-4">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="patient" className="form-label">Patient Name</label>
                                            <select name="patient" id="patient" className="form-select" defaultValue="">
                                                <option value="" disabled>Select Patient</option>

                                                {patients.map((patient) => (
                                                    <option key={patient.id} value={patient.fullName}>
                                                        {patient.fullName}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="doctor" className="form-label">Doctor Name</label>
                                            <select name="doctor" id="doctor" className="form-select" defaultValue="">
                                                <option value="" disabled>Select Doctor</option>

                                                {doctors.map((doctor) => (
                                                    <option key={doctor.id} value={doctor.fullName}>
                                                        {doctor.fullName}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="date" className="form-label">Date</label>
                                            <input type="date" name="date" id="date" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="time" className="form-label">Time</label>
                                            <input type="time" name="time" id="time" className="form-control" />
                                        </div>

                                        <button type="submit" class="btn btn-success w-100">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;