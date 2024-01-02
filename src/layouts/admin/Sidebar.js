import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Core</div>
          <Link class="nav-link" to="dashboard">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </Link>
          <Link class="nav-link" to="add-category">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            Category
          </Link>
          <Link class="nav-link" to="view-category">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            View Category
          </Link>
          <Link class="nav-link" to="profile">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            Profile
          </Link>
          <div class="sb-sidenav-menu-heading">Interface</div>
          <Link
            class="nav-link collapsed"
            to="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseProduct"
            aria-expanded="false"
            aria-controls="collapseProduct"
          >
            <div class="sb-nav-link-icon">
              <i class="fas fa-columns"></i>
            </div>
            Product
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </Link>
          <div
            class="collapse"
            id="collapseProduct"
            aria-labelledby="headingOne"
            data-bs-parent="#sidenavAccordion"
          >
            <nav class="sb-sidenav-menu-nested nav">
              <Link class="nav-link" to="/admin/add-product">
                Add Product
              </Link>
              <Link class="nav-link" to="/admin/view-product">
                View Product
              </Link>
            </nav>
          </div>
          <Link
            class="nav-link collapsed"
            to="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePages"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <div class="sb-nav-link-icon">
              <i class="fas fa-book-open"></i>
            </div>
            Pages
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </Link>
          <div
            class="collapse"
            id="collapsePages"
            aria-labelledby="headingTwo"
            data-bs-parent="#sidenavAccordion"
          >
            <nav
              class="sb-sidenav-menu-nested nav accordion"
              id="sidenavAccordionPages"
            >
              <Link
                class="nav-link collapsed"
                to="#"
                data-bs-toggle="collapse"
                data-bs-target="#pagesCollapseAuth"
                aria-expanded="false"
                aria-controls="pagesCollapseAuth"
              >
                Authentication
                <div class="sb-sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </Link>
              <div
                class="collapse"
                id="pagesCollapseAuth"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordionPages"
              >
                <nav class="sb-sidenav-menu-nested nav">
                  <Link class="nav-link" to="login.html">
                    Login
                  </Link>
                  <Link class="nav-link" to="register.html">
                    Register
                  </Link>
                  <Link class="nav-link" to="password.html">
                    Forgot Password
                  </Link>
                </nav>
              </div>
              <Link
                class="nav-link collapsed"
                to="#"
                data-bs-toggle="collapse"
                data-bs-target="#pagesCollapseError"
                aria-expanded="false"
                aria-controls="pagesCollapseError"
              >
                Error
                <div class="sb-sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </Link>
              <div
                class="collapse"
                id="pagesCollapseError"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordionPages"
              >
                <nav class="sb-sidenav-menu-nested nav">
                  <Link class="nav-link" to="401.html">
                    401 Page
                  </Link>
                  <Link class="nav-link" to="404.html">
                    404 Page
                  </Link>
                  <Link class="nav-link" to="500.html">
                    500 Page
                  </Link>
                </nav>
              </div>
            </nav>
          </div>
          <div class="sb-sidenav-menu-heading">Addons</div>
          <Link class="nav-link" to="charts.html">
            <div class="sb-nav-link-icon">
              <i class="fas fa-chart-area"></i>
            </div>
            Charts
          </Link>
          <Link class="nav-link" to="tables.html">
            <div class="sb-nav-link-icon">
              <i class="fas fa-table"></i>
            </div>
            Tables
          </Link>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>
        Start Bootstrap
      </div>
    </nav>
  );
};

export default Sidebar;
