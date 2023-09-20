import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            
        </div>
    );
};

export default Nav;