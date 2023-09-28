import SmileyFace from "../emoticon-emotion-expression-face-smiley-2-svgrepo-com.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <a href="/">
        <h1>My Happy App</h1>
      </a>
      <img src={SmileyFace} alt="React Logo" />
    </div>
  );
};

export default NavBar;
