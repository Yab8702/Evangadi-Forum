import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { motion as m } from "framer-motion";
function SignIn() {
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
            <h2>Login to your account</h2>
            <p>
              <span>Don’t have an account?</span>
              <Link to="/signup"> Create a new account</Link>
            </p>
          </div>
          <div>
            <form action="">
              <input type="text" placeholder="Email address" />
              <input type={show ? "text" : "password"} placeholder="Password" />
              {!click ? (
                <FaRegEyeSlash
                  className="eye"
                  style={{
                    position: "absolute",
                    top: "36%",
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
                    top: "36%",
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
              <div className="forgot">
                <a href="#">Forgot Password</a>
              </div>
              <button>Login</button>
            </form>
          </div>
        </m.div>
      </div>
    </>
  );
}

export default SignIn;
