import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";


const Home = () => {
    return (
        <div>
            <h1>Welcome to our Homepage</h1>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;