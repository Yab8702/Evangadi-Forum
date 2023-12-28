import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { motion as m } from "framer-motion";
function SignUp() {
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="sign-form">
        <m.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <div>
            <h2>Join the network</h2>
            <p>
              <span>Already have an account? </span>
              <Link to="/signin"> Sign in</Link>
            </p>
          </div>
          <div>
            <form action="">
              <input type="text" placeholder="Email address" />
              <div className="names">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type={show ? "text" : "password"} placeholder="Password" />
              {!click ? (
                <FaRegEyeSlash
                  className="eye"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "2%",
                    fontSize: "1.3rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setClick(!click);
                    setShow(true);
                  }}
                />
              ) : (
                <MdOutlineRemoveRedEye
                  className="eye"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "2%",
                    fontSize: "1.3rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setClick(!click);
                    setShow(false);
                  }}
                />
              )}
              <div className="agree">
                <p>
                  <span>
                    I agree to the <a href="#"> Privacy Policy </a>and{" "}
                    <a href="#"> terms of service.</a>
                  </span>
                </p>
              </div>
              <button>Agree and Join</button>
              <div className="account">
                <Link to="/signin">Already have an account? </Link>
              </div>
            </form>
          </div>
        </m.div>
      </div>
    </>
  );
}

export default SignUp;
