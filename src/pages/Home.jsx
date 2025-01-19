import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAppContext } from "../context/Appcontext";
import Todos from "../components/Todos";

function Home() {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();
  async function handelLogout(params) {
    try {
      console.log(signOut);

      await signOut(auth);
      localStorage.removeItem("email");
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <header>
        <h1>Todo</h1>
        <div className="btn">
          <button onClick={handelLogout}>logout</button>
          <span>{user}</span>
        </div>
      </header>
      <Todos />
    </div>
  );
}

export default Home;
