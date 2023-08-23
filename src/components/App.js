import './App.css';
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "./Header/Header"
import Main from "./Main/Main"
import Login from "./Login/Login"
import Register from "./Register/Register"
import Profile from './Profile/Profile';
import PageNotFound from './PageNotFound/PageNotFound';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Footer from "./Footer/Footer"
import ProtectedRouteElement from './ProtectedRouteElement/ProtectedRouteElement';
import CurrentUserContext from "../contexts/CurrentUserContext.js";

import { useMediaQuery } from "../hooks/useMediaQuery";

import mainApi from "../utils/MainApi.js";
import * as apiAuth from "../utils/ApiAuth.js";
import * as moviesApi from "../utils/MoviesApi.js";

function App() {

  //функционал кнопки еще
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const cardColumnCount = isDesktop ? 3 : isTablet ? 2 : 1;

  const initialCardCount = isDesktop ? 12 : isTablet ? 8 : 5;

  const [visibleCardCount, setVisibleCardCount] = useState(
    initialCardCount
  );

  const roundedVisibleCardCount =
    Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount;

  const handleClick = () => {
    calculateCardCount();
  };

  const calculateCardCount = () => {
    if (isDesktop) {
      return setVisibleCardCount(visibleCardCount + 3);
    }

    if (isTablet) {
      return setVisibleCardCount(visibleCardCount + 2);
    }

    setVisibleCardCount(visibleCardCount + 2);
  };
  //----------------------------------------------------------

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  //отправка данных для авторизация
  const [isLogin, setIsLogin] = useState(null);

  function handleLoginSubmit(email, password) {
    setIsLoading(!isLoading);
    apiAuth.authorize(email, password)
      .then(() => {
        handleTokenCheck()
        navigate("/movies");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  //отправка данных для регистрации
  function handleRegisterSubmit(email, password, name) {
    setIsLoading(!isLoading);
    apiAuth.register(email, password, name)
      .then((res) => {
        if (res) {
          handleLoginSubmit(email, password)
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //выгрузка данных о пользователе с сервера
  const [currentUser, setCurrentUser] = useState("");

  //отправка данный о пользователе на сервер
  function handleUpdateUser(name, email) {
    setIsLoading(!isLoading);
    mainApi.patchUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  //выгрузка фильмов с сервера
  const [allMovies, setAllMovies] = useState([]);

  function handleReceivingMovies() {
    setIsLoading(!isLoading);
    moviesApi.getMovies()
      .then((item) => {
        setAllMovies(item)
        localStorage.setItem('allMovies', JSON.stringify(item))
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  //состояние checkbox ShortMovies
  const [onShortMovies, setOnShortMovies] =
    useState(JSON.parse(localStorage.getItem('onShortMovies')) ?
      JSON.parse(localStorage.getItem('onShortMovies')) : false)
  function handleShortMovies() {
    setOnShortMovies(!onShortMovies)
    localStorage.setItem('onShortMovies', JSON.stringify(!onShortMovies))
  }

  //отправка фильмов в сохраненные путем лайка
  function handleClickLike(movie) {
    const isLiked = saveMovies.find((i) => (i.movieId === movie.id));
    console.log(isLiked)
    !isLiked
      ? mainApi.postMovies(movie)
        .then(() => {
        })
        .catch((err) => console.log(err))
        .finally(() => {
        })
      : mainApi.deleteMoviesById(isLiked._id)
        .then(() => {
        })
        .catch((err) => console.log(err))
        .finally(() => {
        })
  }

  //удаление фильмов из сохраненных путем дизлайка
  function handleClickDelLike(id) {
    mainApi.deleteMoviesById(id)
      .then(() => {
      })
      .catch((err) => console.log(err))
      .finally(() => {
      })
  }


  //выгрузка сохраненных фильмов с сервера
  const [saveMovies, setSaveMovies] = useState([]);

  function handleReceivingSaveMovies() {
    setIsLoading(!isLoading);
    mainApi.getMovieCurrentUser()
      .then((item) => {
        setSaveMovies(item);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  //проверка токена
  const handleTokenCheck = () => {
    apiAuth
      .checkToken()
      .then((res) => {
        if (res) {
          setIsLogin(true);
        } else
          setIsLogin(false)
      })
      .catch((err) => {
        setIsLogin(false);
        console.log(err)
      });
  };

  //удаление токена
  function signOut() {
    mainApi.loginOut()
      .then((data) => {
        if (data) {
          setIsLogin(false);
          localStorage.clear()
        }
      })
  }

  useEffect(() => {
    handleTokenCheck()
    if (isLogin) {
      Promise.all([mainApi.getUserInfo()])
        .then(([data]) => {
          setCurrentUser(data)
          handleReceivingSaveMovies()
        })
        .catch((error) => {
          console.log(error.message);
        });
      ;
    }
  }, [isLogin])

  //экран загрузки
  if (isLogin === null) {
    return (
      <div className="load">
        <p className="load__text">Загрузка...</p>
      </div>
    );

  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Header
          isLogin={isLogin} />
        <Routes>
          <Route
            path="/signin"
            element={
              <Login
                handleLoginSubmit={handleLoginSubmit}
                isLoading={isLoading} />
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <Register
                handleRegisterSubmit={handleRegisterSubmit}
                isLoading={isLoading} />
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
            path="*"
            element={
              <PageNotFound />
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRouteElement
                isLogin={{ isLogin }}
                element={Profile}
                buttonExit={signOut}
                handleUpdateUser={handleUpdateUser}
              />}
          ></Route>
          <Route
            path="/movies"
            element={
              <>
                <ProtectedRouteElement
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  handleReceivingMovies={handleReceivingMovies}
                  handleReceivingSaveMovies={handleReceivingSaveMovies}
                  isLogin={isLogin}
                  setAllMovies={setAllMovies}
                  element={Movies}
                  allMovies={allMovies}
                  saveMovies={saveMovies}
                  handleClick={handleClick}
                  roundedVisibleCardCount={roundedVisibleCardCount}
                  onShortMovies={onShortMovies}
                  setOnShortMovies={setOnShortMovies}
                  handleShortMovies={handleShortMovies}
                  handleClickLike={handleClickLike}
                />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/saved-movies"
            element={
              <>
                <ProtectedRouteElement
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  handleReceivingSaveMovies={handleReceivingSaveMovies}
                  isLogin={isLogin}
                  element={SavedMovies}
                  allMovies={allMovies}
                  saveMovies={saveMovies}
                  handleClick={handleClick}
                  roundedVisibleCardCount={roundedVisibleCardCount}
                  onShortMovies={onShortMovies}
                  handleShortMovies={handleShortMovies}
                  handleClickDelLike={handleClickDelLike}
                />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </div >
    </CurrentUserContext.Provider>

  );
}

export default App;
