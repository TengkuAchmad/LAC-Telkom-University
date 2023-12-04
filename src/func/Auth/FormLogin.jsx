// LIBRARY IMPORT
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { BiEnvelope, BiLockAlt, BiShow, BiHide, BiUser } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// REQUEST IMPORT
import { accountLogin } from "../../api/request";

const FormLogin = () => {
  // NAVIGATOR
  const navigate = useNavigate();

  // SPINNER
  const [isLoading, setIsLoading] = useState(false);

  // FORM DATA LOGIN DATA CONTAINER
  const [formData, setFormData] = useState({
    Email_UA: "",
    Password_UA: "",
  });

  // FORM DATA VALUE ON CHANGE HANDLER
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // FORM DATA VALUE ON SUBMIT HANDLER
  const handleSubmit = async (e) => {
    // RESET CONTAINER
    e.preventDefault();

    // FORM DATA CONTAINER CONSTRUCTOR
    const formData = new FormData(e.target);

    // SPINNER
    setIsLoading(true);

    // REQUEST API
    try {
      await accountLogin(formData);
      setTimeout(() => {
        toast.success("Success login to your account!");
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      setTimeout(() => {
        toast.error("Login failed. Please try again.");
        console.error("Error during registration", error);
        setIsLoading(false);
      }, 3000);
    }
  };
  return (
    <>
      {/* TOAST */}
      <ToastContainer theme="light" style={{ width: "500px" }} />
      {/* FORM LOGIN*/}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Email_UA">
          <InputGroup>
            <InputGroup.Text className="icon-form">
              <BiEnvelope />
            </InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              className="form-custom"
              name="Email_UA"
              value={formData.Email_UA}
              onChange={handleChange}
              required
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-1" controlId="Password_UA">
          <InputGroup>
            <InputGroup.Text className="icon-form">
              <BiLockAlt />
            </InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="Password"
              className="form-custom"
              name="Password_UA"
              value={formData.Password_UA}
              onChange={handleChange}
              required
            />
          </InputGroup>
        </Form.Group>
        <div className="text-end mb-4">
          <a href="#" className="forgot-text">
            Forgot Password?
          </a>
        </div>
        <Button className="btn-submit" type="submit">
          {isLoading ? "Checking your account!" : "Log In"}
        </Button>
      </Form>
    
    </>
  );
};

export default FormLogin;
