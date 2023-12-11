// LIBRARY IMPORT
import { Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// COMPONENTS IMPORT
import FadeTransition from "../components/MainComponents/FadeTransition";

// ASSETS IMPORT
import ValidateIcon from "../assets/ValidateIcon.png";

const Validate = () => {
  const navigate = useNavigate();
  const backtoLogin = () => {
    navigate("/");
  };
  return (
    <>
      <FadeTransition>
        <section id="validate">
          <Row className="justify-content-center text-center">
            <img src={ValidateIcon} className="validateIcon pb-3"></img>
            <h2>Validasi Akun</h2>
            <h5>
              Registrasi Akun Anda sedang di validasi, kami akan mengirimkan{" "}
              <br />
              pemberitahuan melalui Email Anda
            </h5>
            <Button className="btn-white mt-5" onClick={backtoLogin}>
              Back to Login
            </Button>
          </Row>
        </section>
      </FadeTransition>
    </>
  );
};
export default Validate;
