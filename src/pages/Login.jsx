// LIBRARY IMPORT
import { Row, Col, Stack, Button, Carousel } from "react-bootstrap";

// ASSETS IMPORT
import { BiEnvelope, BiLockAlt, BiShow, BiHide } from "react-icons/bi";
import telkom from "../assets/telkom.png";
import carousel1 from "../assets/loginCars1.jpg";
import carousel2 from "../assets/loginCars2.jpg";
import carousel3 from "../assets/loginCars3.jpg";

// COMPONENT IMPORT
import CSFloat from "../components/CSFloat";
import ColoredIcons from "../components/ColoredIcons";
import SeparatorLine from "../components/SeparatorLine";
import FadeTransition from "../components/FadeTransition";

// HANDLER IMPORT
import FormLogin from "../func/Auth/FormLogin";

const Login = () => {
  // AUTHENTICATION CHECK
  return (
    <FadeTransition>
      <section id="login">
        <Row className="m-0">
          <Col xs={6} className="padding-login">
            <img src={telkom} alt="logo telkom" className="logo-telkom mb-3" />
            <h3>Log in to your Account</h3>
            <p>Welcome back! Select method to log in:</p>
            <Stack direction="horizontal" className="mb-3 mt-4">
              <Button className="line-btn">
                <ColoredIcons icons="office" /> Office 365
              </Button>
              <Button className="line-btn">
                <ColoredIcons icons="google" /> Google
              </Button>
            </Stack>
            <SeparatorLine text="or continue with email" />

            <FormLogin />

            <Row className="mt-3 text-create">
              <Col xs="6" className="p-0">
                <p className="text-end">Don't have an account?</p>
              </Col>
              <Col xs="6" className="ps-2">
                <p>
                  <a href="register" className="text-start color-create">
                    Create an account
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
        <CSFloat />
      </section>
    </FadeTransition>
  );
};

export default Login;
