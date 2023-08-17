import { Routes, Route } from "react-router-dom";
import "./Header.css"

import HeaderAuth from "./HeaderAuth/HeaderAuth"
import HeaderLogin from "./HeaderLogin/HeaderLogin"
import HeaderNotLogin from "./HeaderNotLogin/HeaderNotLogin"


function Header() {
  return (
    <Routes>
      <Route
        path="/movies"
        element={
          <HeaderAuth />
        }
      ></Route>
      <Route
        path="/"
        element={
          <HeaderNotLogin />
        }
      ></Route>
      <Route
        path="/signin"
        element={
          <HeaderLogin />
        }
      ></Route>
      <Route
        path="/signup"
        element={
          <HeaderLogin />
        }
      ></Route>
      <Route
        path="/saved-movies"
        element={
          <HeaderAuth />
        }
      ></Route>
      <Route
        path="/profile"
        element={
          <HeaderAuth />
        }
      ></Route>
    </Routes>

  );
}

export default Header;