import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav>
        <div>
          <div className="logo">
            <img
              src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
              alt="Logo"
            />
          </div>
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#fe8402" : "",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/how"
                style={({ isActive }) => ({
                  color: isActive ? "#fe8402" : "",
                })}
              >
                How it works
              </NavLink>
            </li>
            <li className="btn">
              <NavLink
                to="/signin"
                style={({ isActive }) => ({
                  color: isActive ? "#fe8402" : "",
                })}
              >
                Sign In
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
