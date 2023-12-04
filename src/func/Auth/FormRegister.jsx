// LIBRARY IMPORT
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import { BiEnvelope, BiLockAlt, BiShow, BiHide, BiUser } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// REQUEST IMPORT
import { accountRegister } from "../../api/request";

const FormRegister = () => {
  // NAVIGATOR
  const navigate = useNavigate();

  // SHOW / HIDE PASSWORD
  const [showPassword, setShowPassword] = useState(false);

  // SPINNER
  const [isLoading, setIsLoading] = useState(false);

  // FORM DATA REGISTER DATA CONTAINER
  const [formData, setFormData] = useState({
    FullName_UA: "",
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
      await accountRegister(formData);
      setTimeout(() => {
        toast.success(
          "Success, your account is registered!"
        );
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      setTimeout(() => {
        toast.error("Registration failed. Please try again.");
        console.error("Error during registration", error);
        setIsLoading(false);
      }, 3000);
    }
  };
  return (
    <>
      {/* TOAST */}
      <ToastContainer theme="light" style={{ width: "500px" }} />
      {/* FORM REGISTER*/}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="FullName_UA">
          <InputGroup>
            <InputGroup.Text className="icon-form">
              <BiUser />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Full Name"
              className="form-custom"
              name="FullName_UA"
              value={formData.FullName_UA}
              onChange={handleChange}
              required
            />
          </InputGroup>
        </Form.Group>
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
        <Form.Group className="mb-1" controlId="formPassword">
          <InputGroup>
            <InputGroup.Text className="icon-form">
              <BiLockAlt />
            </InputGroup.Text>
            <Form.Control
              type={showPassword ? <BiHide /> : <BiShow />}
              placeholder="Password"
              className="form-custom"
              name="Password_UA"
              value={formData.Password_UA}
              onChange={handleChange}
              required
            />
          </InputGroup>
        </Form.Group>
        <Button className="btn-submit mt-3" type="submit">
          {isLoading ? "Processing your account!" : "Register"}
        </Button>
      </Form>
    </>
  );
};

export default FormRegister;
