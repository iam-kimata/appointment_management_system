const Login = () => {
    return (
        <div className="d-flex">
            <div className="container py-5">
                <div className="card login-card">
                    <h2 className="text-center mb-4 fw-bold">Login</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" name="email" id="email" className="form-control" placeholder="Enter Username" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" name="password" id="password" className="form-control" placeholder="Enter Password" />
                        </div>

                        <button type="submit" className="btn btn-success w-100">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;