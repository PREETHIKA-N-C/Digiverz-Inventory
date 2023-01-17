import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/auth.service";
import Style from './LoginCard.module.css'

const LoginCard = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(Username, Password).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    
    <div className={Style.container}>
    <div className={Style["right-section"]}></div>
  <div className={Style["left-section"]}>
    <div className={Style.header}>
      <h1 className={`${Style.animation} ${Style.a1}`}>Digiverz Inventory</h1>
      <h4 className={`${Style.animation} ${Style.a2}`}>LOGIN </h4>
    </div>
    <div className={Style.form}>
    <form onSubmit={handleLogin}>
    <input
          className={`${Style["form-field"]} ${Style.animation} ${Style.a3}`}
          type="text"
          placeholder="Username"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
        />
      <input
          className={`${Style["form-field"]} ${Style.animation} ${Style.a4}`}
          type="password"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
      <p className={`${Style.animation} ${Style.a5}`}><a href="#">Forgot Password</a></p>
      <button className={`${Style.animation} ${Style.a6} ${Style.Button}`} type="submit">Sign In</button>
      </form>
    </div>
  </div>
  
</div>



    </>

  );
};

export default LoginCard;