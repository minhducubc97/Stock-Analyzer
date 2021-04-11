import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} className={"margin-top"}>
            <Home />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
