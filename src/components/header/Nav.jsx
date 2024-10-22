
const Nav = () => {
  return (
    <nav className="row align-items-center">
      <a href="index.html" className="col-6 col-xl-2">
        <img className="logo" src="/assets/images/logo.svg.svg" alt="Silicon" />
        <span className="logo-text">Silicon</span>
      </a>
      <div className="featurs-link d-none d-xl-block col-xl-2 ">
        <a href="#">Features</a>
      </div>
      <div className="col-6 col-xl-8">
        <div className="row justify-content-end align-items-center">
          <label htmlFor="flexSwitchCheckDefault" className="dark-mode-text d-none col-4 d-md-block text-md-end col-xl-2" aria-label="darkmode switch">Dark Mode</label>
          <div className="col-3 col-xl-2 form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
          <div className="col-2 d-xl-none ">
            <div className="row d-flex justify-content-center justify-align-center">
              <button className="navbar-toggle ">
                <span className="navbar-toggle"></span>
              </button>
            </div>
          </div> 
          <button type="button" className="sign-btn transition d-none col-3 col-xl-2 d-xl-block">
          Sign in / up 
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav;