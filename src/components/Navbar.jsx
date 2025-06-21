import logo from "../assets/logo.png"

const Navbar = () => {

    const links = <>
    
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Why Us</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Testimonials</a></li>
    
    </>


  return (
    <div className="bg-base-100 sticky top-0 z-50">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium text-xl"
            >
              {links}
            </ul>
          </div>
                  <div className="flex items-center gap-1">
                      <img className="w-10 h-10 object-cover" src={logo} alt="logo" />
                      <h3 className="font-bold text-2xl cursor-pointer">Good Luck</h3>
          </div>
        </div>
      
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-lg">{links}</ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar