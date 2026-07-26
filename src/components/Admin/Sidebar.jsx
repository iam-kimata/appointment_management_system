import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className="bg-dark text-light position-fixed p-3 sidebar">
                <div className="d-flex fw-bold mb-4 fs-3">
                    <i className="bi bi-emoji-smile me-2"></i>AdminHub
                </div>

                <ul className="nav flex-column">
                    <li className="nav-item mb-4">
                        <Link to="/dashboard" className="nav-link text-light">
                            <i className="bi bi-speedometer me-2"></i>
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item mb-4">
                        <Link to="/users" className="nav-link text-light">
                            <i className="bi bi-people-fill me-2"></i>
                            Users
                        </Link>
                    </li>
                </ul>

                <div className="mt-5 text-danger">
                    <i className="bi bi-box-arrow-right me-2"></i>Logout
                </div>
            </div>
        </>
    );
};

export default Sidebar;