import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <div className="logo d-flex align-items-center">
          <i className="bi bi-github fs-2 text-white px-2"></i>
          <span className="fs-5 text-white">GitHub Finder</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
