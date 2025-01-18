import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAppContext } from "../context/Appcontext";

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
        <button onClick={handelLogout}>logout</button>
      </header>
    </div>
  );
}

export default Home;
