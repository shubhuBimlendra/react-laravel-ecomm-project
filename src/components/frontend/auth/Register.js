import React from "react";
import Navbar from "../../../layouts/frontend/Navbar";

function Register() {
  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header">
                <h1>Register</h1>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group mb-3">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Your Password"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      name="confirm_password"
                      className="form-control"
                      placeholder="Enter Your Password"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
