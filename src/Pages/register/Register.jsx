import React, { useContext, useState } from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Link } from "react-router-dom";
import useFormFields from "../../utils/useFormFields";
import LoginContext from "../../utils/loginContext";
import "../register/style.css"

export default function Register() {
  const { fields, handleFields } = useFormFields();
  const [registerMessage,setRegisterMessage]=useState(false)
  const {setUserImage}=useContext(LoginContext)
  const {userImage}=useContext(LoginContext)

  //get userImage
    function handleImageChange(event) {
      const file = event.target.files[0];
      setUserImage(file);
  }

  function RegisterFn(e) {
    e.preventDefault()
    console.log("Sending request with fields:", fields);
   
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields)
      })
      .then(res => res.json())
      .then(data => {
        console.log("user registered:", data);
        setRegisterMessage(true);
      
      })
      .catch(error => console.log(error.message));
    
  }
  return (
    <>
      <div className="formReg "  style={{ width: "500px", margin:"auto" }}>
        <form >
          <div className="mb-3 mt-4">
            <HowToRegIcon
              sx={{
                color: "white",
                display: "block",
                margin: "auto",
                backgroundColor: "var(--third-color)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                padding: "5px",
              }}
            ></HowToRegIcon>
            <h4 style={{ textAlign: "center" }}>Register</h4>
            {/* Email */}
            <label for="InputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="InputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={handleFields}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            {/* password */}
            <label htmlFor="InputImage" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="InputPassword1"
              name="password"
              onChange={handleFields}
            />
          </div>
          <div className="mb-3">
            {/* Image */}
            <label htmlFor="InputImage" className="form-label">
              Image
            </label>
            <input
              type="file"
              id="InputImage"
              className="form-control"
              name="image"
              onChange={(event) => {
                handleFields(event); // Call the first function
                handleImageChange(event); // Call the second function
              }}

            />
          </div>

          <div className="mb-3 ">
            <Link to="/login-register" style={{ textDecoration: "none" }}>
              Already have an account? Login
            </Link>
          </div>
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: "var(--first-color)", width: "100%" }}
            onClick={RegisterFn}
          >
            Registers
          </button>
          {console.log(fields)}
          {console.log(userImage)}
          {registerMessage&&<p className="text-success">Successful Register</p>}
        </form>
      </div>
    </>
  );
}
