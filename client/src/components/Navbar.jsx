import { useContext } from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Notification from "./chat/Notification";
import "./Navbar.css"

const NavBar = () => {

    const {user, logoutUser} = useContext(AuthContext);

    return( 
    <Navbar bg="dark" className="mb-4" style={{height: "3.75rem"}}>
        <Container>
            <h2>
                <Link to="/" className="link-light text-decoration-none" >Chatify</Link>
            </h2>
            {user && <span className="text-warning" >Logged in as {user?.name}</span>}
            <Nav>
                <Stack direction="horizontal" gap={3}>
                    {
                        user && (<>
                            <Notification class="notifications"/>
                            {/* <Link onClick={() => logoutUser()} to="/login" className="link-light text-decoration-none" >Logout</Link> */}
                            <Link onClick={() => logoutUser()} to="/login" class="logout-links" >Logout</Link>
                        </>)
                    }
                    {!user && (<>
                        {/* <Link to="/login" className="link-light text-decoration-none" >Login</Link>
                        <Link to="/register" className="link-light text-decoration-none" >Register</Link> */}
                        <Link to="/login" class="links" >Login</Link>
                        <Link to="/register" class="links" >Register</Link>
                    </>)}
                </Stack>
            </Nav>
        </Container>
    </Navbar>
    );
}

export default NavBar;