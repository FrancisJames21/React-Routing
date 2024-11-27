
import { Link } from "react-router-dom";


function Header(){
    return (
        <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
              <a className="navbar-brand" href="#">Welcom here</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul
                  className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                  style={{ '--bs-scroll-height': '100px' }} // Fixed style as object
                >
                  <li className="nav-item">
                  <li className="nav-item">
                    <Link  className="nav-link active"  to="/">Home</Link>
                  </li>
                  </li>
                  <li className="nav-item">
                  <li className="nav-item">
                    <Link  className="nav-link active"  to="/contact">Contact</Link>
                  </li>
                  </li>
                  <li className="nav-item">
                    <Link  className="nav-link active"  to="/about">About Us</Link>
                  </li>
                </ul>
                
            
              </div>
            </div>
          </nav>
        </div>
    )
}

export default Header;