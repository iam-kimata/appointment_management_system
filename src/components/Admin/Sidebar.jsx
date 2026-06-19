const Sidebar = () => {
    return (
        <>
            <div className="bg-dark text-light position-fixed p-3 sidebar">
                <div className="d-flex fw-bold mb-4 fs-3">
                    <i className="bi bi-emoji-smile me-2"></i>AdminHub
                </div>

                <ul className="nav flex-column">
                    <li className="nav-item mb-4"><i className="bi bi-speedometer me-2"></i>Dashboard</li>
                    <li className="nav-item mb-4"><i className="bi bi-people-fill me-2"></i>Users</li>
                </ul>

                <div className="mt-5 text-danger">
                    <i className="bi bi-box-arrow-right me-2"></i>Logout
                </div>
            </div>
        </>
    );
};

export default Sidebar;