import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Nav, Form, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Cookies from "universal-cookie";

function UserNav1() {
  const cookies = new Cookies();
  const user = cookies.get("token");

  const nav = useNavigate();

  console.log(user.type);

  const logout = () => {
    cookies.remove("token");
    nav("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Leave Planner</Navbar.Brand>

          <Nav className="me-auto">
            {user.type == "admin" ? (
              <Nav.Link href="/home" >Create User</Nav.Link>
            ) : (
              <Nav.Link href="/user/apply-for-leave">Apply for leave</Nav.Link>
            )}
          </Nav>

          <Button onClick={logout} variant="danger">
            Logout
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default UserNav1;
