// LIBRARY IMPORT
import { Row, Col, Stack, Button, Carousel } from "react-bootstrap";

// COMPONENTS IMPORT
import ColoredIcons from "../components/ColoredIcons";
import SeparatorLine from "../components/SeparatorLine";
import CSFloat from "../components/CSFloat";
import FadeTransition from "../components/FadeTransition";

// ASSETS IMPORT
import telkom from "../assets/telkom.png";
import carousel1 from "../assets/loginCars1.jpg";
import carousel2 from "../assets/loginCars2.jpg";
import carousel3 from "../assets/loginCars3.jpg";

// HANDLER IMPORT
import FormRegister from "../func/Auth/FormRegister";

const Register = () => {
  // AUTHENTICATION CHECK
  return (
    <FadeTransition>
      <section id="login">
        <Row className="m-0">
          <Col xs={6} className="padding-login">
            <img src={telkom} alt="logo telkom" className="logo-telkom mb-3" />
            <h3>Register your Account</h3>
            <p>Select existing account to register:</p>
            <Stack direction="horizontal" className="mb-3 mt-4">
              <Button className="line-btn">
                <ColoredIcons icons="office" /> Office 365
              </Button>
              <Button className="line-btn">
                <ColoredIcons icons="google" /> Google
              </Button>
            </Stack>
            <SeparatorLine text="or create new account" />

            <FormRegister />

            <Row className="mt-3 text-create">
              <Col xs="6" className="p-0">
                <p className="text-end">Already have an account?</p>
              </Col>
              <Col xs="6" className="ps-2">
                <p>
                  <a href="/" className="text-start color-create">
                    Continue with Login
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={6} className="login-side">
            <Carousel className="mt-5" controls={false}>
              <Carousel.Item interval={2000}>
                <img src={carousel1} alt="" width={600} height={500} />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img src={carousel2} alt="" width={600} height={500} />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img src={carousel3} alt="" width={600} height={500} />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </section>
      <CSFloat />
    </FadeTransition>
  );
};

export default Register;
