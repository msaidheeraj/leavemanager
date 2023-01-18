import { useState } from "react";
import { Form, Container, Button, Alert, Toast } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
import "./css/Login.css";



function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  var token="sdffsdfsadfsadfsadfsad";
  var type="admin";
  const cookies = new Cookies();
  cookies.remove("token");
  cookies.set("token", { token: token, type: "user", username: username });
  
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username + "  " + password);
    if (username === "") {
      setErrorMessage("*Username is needed");
      setAlert(true);
    } else if (password === "") {
      setErrorMessage("*Password is needed");
      setAlert(true);
    }
    
    cookies.set("token", { token: token, type: type, username: username });
    /*await axios
      .post("http://localhost:5434/api/Login", {
        username: username,
        password: password,
      })
      .then((res) => {
        token= res.data.token;
        type = res.data.type
        console.log(res.data);
      });*/


  };

  return (
    <Container className="d-flex login">
      
      <Form
        style={{
          padding: "40px",
          border: "2px solid #73AD21 ",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        {alert && (
          <Form.Label
            className="text-danger col-12 "
            onClick={() => setAlert(false)}
          >
            {errorMessage}
          </Form.Label>
        )}

        <Form.Group className="  mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className=" mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          className="col-12 align-item-center"
          style={{}}
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;

/* <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >*/
