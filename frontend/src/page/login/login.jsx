import { useState } from "react";
import styles from "./login.module.css";
import InputBox from "../../component/inputBox/inputBox";
import Button from "../../component/button/button";

function Login() {
  const [isRegistered, setIsRegister] = useState(false);
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLoginDataChange = (e, text) => {
    const change = e.target.value;
    setLoginData((d) => {
      d[text] = change;
      return { ...d };
    });
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log("this is a prevent function");
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <div className={styles.leftContainer}>
          <form className={styles.loginContainer}>
            <header>
              {isRegistered ? (
                <h1>
                  Welcome Back <span>👋</span>
                </h1>
              ) : (
                <h1>
                  Register a new account <span>👋</span>
                </h1>
              )}
            </header>
            <main>
              {!isRegistered && (
                <InputBox
                  label="Name"
                  name="name"
                  type="text"
                  disabled={false}
                  value={loginData.name}
                  handleChange={handleLoginDataChange}
                  placeholder="Rohit Kumar"
                />
              )}

              <InputBox
                label="Email"
                name="email"
                type="email"
                disabled={false}
                value={loginData.email}
                handleChange={handleLoginDataChange}
                placeholder="example@email.com"
              />

              <InputBox
                label="Password"
                name="password"
                type="password"
                disabled={false}
                value={loginData.password}
                handleChange={handleLoginDataChange}
                placeholder="At least 8 characters"
              />

              <p className={styles.forgotPasswordLink}>Forgot Password?</p>

              <Button
                text={isRegistered ? "Sign in" : "Sign up"}
                type="submit"
                handleClick={handleSubmitButton}
              />
            </main>
            <footer>
              {isRegistered
                ? `Don't have an account?`
                : `Already have an account`}{" "}
              {
                <span
                  onClick={() => {
                    setIsRegister((value) => !value);
                    setLoginData({
                      name: "",
                      email: "",
                      password: "",
                    });
                  }}
                >
                  {isRegistered ? "Sign up" : "Sign in"}
                </span>
              }
            </footer>
          </form>
        </div>
        <div className={styles.rightContainer}>{/* img */}</div>
      </div>
    </div>
  );
}

export default Login;
