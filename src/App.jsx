import { Redirect, Route, Switch, useHistory } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Tv from './components/Tv/Tv';
import Gallery from './components/Gallery/Gallery';
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { MoviesContextProvider } from "./MoviesContext";


function App() {

  let history = useHistory();

  let [loginUser, setLoginUser] = useState(null);


  function getUserInfo() {
    let encodedToken = localStorage.getItem('userToken');
    let useData = jwtDecode(encodedToken);
    console.log(useData);
    setLoginUser(useData);

  }

  function logOut() {
    localStorage.removeItem('userToken');
    setLoginUser(null);
    history.push('/login');
    //
  }

  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      getUserInfo();
    }
  }, []);



  return (
    <div className="App">
      <Navbar loginUser={loginUser} logOut={logOut} />


      <MoviesContextProvider>

        <Home />
      </MoviesContextProvider>



      <div className="container">
        <Switch>
          <ProtectedRoute path='/movies' component={Movies} />
          <ProtectedRoute path='/tv' component={Tv} />
          <ProtectedRoute path='/gallery' component={Gallery} />
          <ProtectedRoute path='/home' component={Home} loginUser={loginUser} />
          <Route path='/register' render={(props) => <Register {...props} />} />
          <Route path='/login' render={(props) => <Login {...props} getUserInfo={getUserInfo} />} />
          <Redirect from='/' exact to='/home' />

        </Switch>
      </div>


    </div>
  );
}

export default App;
