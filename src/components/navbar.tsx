import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white">
      <div className="w-full max-w-screen-xl mx-auto px-8 py-3">
        <Link className="text-4xl font-semibold tracking-wide" to="/">
          NEWS
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
