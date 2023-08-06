import './App.css';
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import { Route, Routes } from "react-router-dom";

import Header from "./Header/Header"
import Main from "./Main/Main"
import Login from "./Login/Login"
import Footer from "./Footer/Footer"


function App() {

  //const isLogin = true

  return (
    <div className='app'>
      <CurrentUserContext.Provider>
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
              <>
                <Header />
                <Login />
              </>

            }
          ></Route>
          <Route
            path="/signun"
            element={
              <>
                <Header />
                {/* <Register/>  */}
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <><Header />
                <Main />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/profile"
            element={<>
              <Header />
              {/* <Profile /> */}
            </>

            }
          ></Route>
          <Route
            path="/movies"
            element={<>
              <Header />
              {/* <Movies /> */}
              <Footer />
            </>

            }
          ></Route>
          <Route
            path="/saved-movies"
            element={<>
              <Header />
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
