import './App.css';
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import { Route, Routes } from "react-router-dom";

import Header from "./Header/Header"
import Main from "./Main/Main"
import Login from "./Login/Login"
import Register from "./Register/Register"
import Footer from "./Footer/Footer"


function App() {

  //const isLogin = true

  return (
    <div className='app'>
      <CurrentUserContext.Provider>
        <Header />
        <Routes>
          {/* <Route
            path="*"
            element={
              isLogin ? (
                <Navigate to="/" replace />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          /> */}
          <Route
            path="/signin"
            element={
              <Login />
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <Register />
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              {/* <Profile /> */ }
            }
          ></Route>
          <Route
            path="/movies"
            element={<>
              {/* <Movies /> */}
              <Footer />
            </>
            }
          ></Route>
          <Route
            path="/saved-movies"
            element={<>
              {/* <SavedMovies /> */}
              <Footer />
            </>
            }
          ></Route>
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
