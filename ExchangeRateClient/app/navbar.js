import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">{props.title}</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;