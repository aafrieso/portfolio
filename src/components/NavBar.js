import { Link } from "react-router-dom";

function NavBar() {
  return(
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/Contact'>Contact</Link>
        </li>
        <li>
          <Link to='/Projects'>Projects</Link>
        </li>
        <li>
          <Link to='Resume'>Resume</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar