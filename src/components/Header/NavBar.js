import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navWrapper">
      <section className="app-title">
        <Link to="/">AwesomeBlog</Link>
      </section>
      <section className="pages">
        <Link to="/">Home</Link>
        <Link to="/add-blog">Add Post</Link>
      </section>
    </div>
  );
};
export default NavBar;
