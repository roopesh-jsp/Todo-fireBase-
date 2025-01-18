import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import AppcontextProvider from "./context/Appcontext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <AppcontextProvider>
      <RouterProvider router={router} />
    </AppcontextProvider>
  );
}

export default App;
