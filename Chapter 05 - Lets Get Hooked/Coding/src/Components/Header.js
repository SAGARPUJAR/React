import logo from "../../Images/logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
