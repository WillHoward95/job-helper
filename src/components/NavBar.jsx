import SmileyFace from "../faces/Smiley Clicked.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <a href="/">
        <h1>My Happy App</h1>
      </a>
      <img src={SmileyFace} alt="Smiley Face" className="nav-smiley" />
    </div>
  );
};

export default NavBar;
