import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
const Register = () => {
  //register variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");
  //check password strength

  const checkPasswordStrength = (password) => {
    //reset error 
    setError("")
    // Define the criteria for a strong password
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(
      password
    );

    // Check if the password meets all the criteria
    if (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecialChar
    ) {
      setPassword(password);
    }

    // Check for other conditions
    else if (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber
    ) {
      setPassword(password);
    } else {
      // If none of the above conditions are met, it is considered weak
      setError("weak password");
    }
  };

  // chack name validity
  const validateName = (name) => {
    setError("")

    // Define the regex pattern for a valid name
    const namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    if (namePattern.test(name)) {
      setName(name);
    } else {
      setError("invalid name ");
    }
  };
  //check email
  const validateEmail = (email) => {
    setError("")

    // Define the regex pattern for a valid email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      setEmail(email);
    } else {
      setError("invalid email !");
    }
  };
  //check pwd matches
  const CheckMutchPwd = (pwd, rpwd) => {
    setError("")

    if (pwd !== rpwd) {
      setError("password doesn't match");
    }
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  //value={name}
                  onBlur={(e) => {
                    validateName(e.target.value);
                  }}
                  label="Your Name"
                  id="form1"
                  type="text"
                  className="w-100"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  onBlur={(e) => {
                    validateEmail(e.target.value);
                  }}
                  label="Your Email"
                  id="form2"
                  type="email"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  onBlur={(e) => {
                    checkPasswordStrength(e.target.value);
                  }}
                  label="Password"
                  id="form3"
                  type="password"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  onBlur={(e) => {
                    CheckMutchPwd(e.target.value, Password);
                  }}
                  label="Repeat your password"
                  id="form4"
                  type="password"
                />
              </div>

              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>
              <div style={{ color: "red" }} className="mb-4">
                {Error}
              </div>

              <MDBBtn className="mb-4" size="lg">
                Register
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Register;
