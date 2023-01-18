import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";



function NavigationBar() {
  return (
    <>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Leave Planner</Navbar.Brand>          
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
