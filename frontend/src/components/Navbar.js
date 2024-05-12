import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="" />
        </a>
    
        <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="https://bulma.io" className="navbar-item">
            Home
          </a>
    </div>
    

    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href="https://bulma.io" className="button is-light">
                Log Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
