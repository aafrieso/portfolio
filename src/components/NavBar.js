import { Link } from "react-router-dom";

function NavBar() {
  return(
    <nav>
      <Link to='/'></Link>
      <ul>
        <li>
          <Link to='/about'></Link>
        </li>
        <li>
          <Link to='/contact'></Link>
        </li>
        <li>
          <Link to='/projects'></Link>
        </li>
        <li>
          <Link to='Resume'></Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar