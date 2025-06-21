import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <p className="hover:opacity-75">Pelle's Cocktail Bar</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id} className="hover:opacity-75">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
