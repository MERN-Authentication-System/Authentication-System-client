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
  const [isValidName, setIsValidName] = useState(null);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [Password, setPassword] = useState("");
  const [isValidPwd, setIsValidPwd] = useState(null);
  const [Rpwd, setRpwd] = useState("");
  const [isValidRPwd, setIsValidRPwd] = useState(null);

  const [Error, setError] = useState("");
  //check password strength

  const checkPasswordStrength = (password) => {
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
      setIsValidPwd(true);
    }

    // Check for other conditions
    else if (
      password.length >= minLength &&
      hasUppercase &&
      hasLowercase &&
      hasNumber
    ) {
      setPassword(password);
      setIsValidPwd(true);
    } else {
      // If none of the above conditions are met, it is considered weak
      setIsValidPwd(false);
    }
  };

  // chack name validity
  const validateName = (name) => {
    // Remove trailing spaces from the name
    const trimmedName = name.trim("");
    // Define the regex pattern for a valid name
    const namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    if (namePattern.test(trimmedName)) {
      setName(name);
      setIsValidName(true);
    } else {
      setIsValidName(false);
    }
  };
  //check email
  const validateEmail = (email) => {
    // Define the regex pattern for a valid email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      setEmail(email);
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };
  //check pwd matches
  const CheckMutchPwd = (pwd, rpwd) => {
    if (pwd !== rpwd) {
      setIsValidRPwd(false);
    }
    setIsValidRPwd(true);
  };

  //set error msg
  const ErrorMsg = () => {
    if (!isValidName) {
      setError("invalid name");
      return false;
    }
    if (!isValidEmail) {
      setError("invalid email");
      return false;
    }

    if (!isValidPwd) {
      setError("weak password");
      return false;
    }
    if (!isValidRPwd) {
      setError("please chack your password");
      return false;
    }
  };
  //check credentials
  const CheckCredentials = () => {
    validateName(name);
    validateEmail(email);
    checkPasswordStrength(Password);
    CheckMutchPwd(Password, Rpwd);
    if (isValidEmail && isValidName && isValidPwd && isValidRPwd) {
      setError("");
      console.log("shah");
      return true;
    } else {
      console.log("ghaltin");
      return ErrorMsg();
    }
  };
  //password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword,setShowRepeatPassword]=useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword);
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
                  onChange={(e) => {
                    setName(e.target.value);
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  label="Your Email"
                  id="form2"
                  type="email"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  id="form3"
                  type={showPassword ? "text" : "password"}
                >
                  <MDBIcon
                    far
                    icon={showPassword ? "eye" :  "eye-slash"}
                    size="lg"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: 'pointer', position: 'absolute', top: '50%', right: '15px', transform: 'translateY(-50%)' }}
                  />
                </MDBInput>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  onChange={(e) => {
                    setRpwd(e.target.value, Password);
                  }}
                  label="Repeat your password"
                  id="form4"
                 
                  type={showRepeatPassword ? "text" : "password"}
                >
                  <MDBIcon
                    far
                    icon={showRepeatPassword ? "eye"  : "eye-slash"}
                    size="lg"
                    onClick={toggleRepeatPasswordVisibility}
                    style={{ cursor: 'pointer', position: 'absolute', top: '50%', right: '15px', transform: 'translateY(-50%)' }}
                  />
                
                </MDBInput>
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

              <MDBBtn onClick={CheckCredentials} className="mb-4" size="lg">
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
