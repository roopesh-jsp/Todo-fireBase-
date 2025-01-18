import React, { useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/Appcontext";
function Login() {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();

  async function handelMailLogin() {
    try {
      const result = await signInWithPopup(auth, provider);

      setUser(result.user.email);
      localStorage.setItem("email", result.user.email);
      navigate("/");
    } catch (error) {
      console.log(error);
      ``;
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <button onClick={handelMailLogin}>sigin with google</button>
    </div>
  );
}

export default Login;
