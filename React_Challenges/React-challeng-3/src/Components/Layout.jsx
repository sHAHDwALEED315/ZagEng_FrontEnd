import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <NavLink to="/" style={({ isActive }) => ({textDecoration: isActive ? "underline" : "none"})}>Home</NavLink>
        <NavLink to="/products" style={({ isActive }) => ({textDecoration: isActive ? "underline" : "none"})}>Products</NavLink>
        <NavLink to="/about" style={({ isActive }) => ({textDecoration: isActive ? "underline" : "none"})}>About</NavLink>
      </nav>

      <Outlet />

      <footer> &copy; Product Store</footer>
    </>
  );
};

export default Layout;