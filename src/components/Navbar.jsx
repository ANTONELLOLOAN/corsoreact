import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="flex gap-10 mb-10">
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/contatti'}>Contacts</Link>
      </li >
    <li>
      <Link to={'/about'}>About</Link>
      </li >
    <li>
      <Link to={'/cards'}>Cards version 1</Link>
      </li >
    <li>
      <Link to={'/cards-children'}>Card version 2</Link>
      </li >
      
    </ul >
  );
}

export default Navbar;
