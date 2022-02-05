import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import Navigation from './components/Shared/Navigation/Navigation';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { useState } from 'react';
const AUTH=false;
const USER={activated:true};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <GuestRoute path="/" exact>
            <Home/>
          </GuestRoute>
          <GuestRoute path="/authenticate" exact>
            <Login/>
          </GuestRoute>
          <SemiProtectedRoute path="/register" exact>
            <Register/>
          </SemiProtectedRoute>
          <ProtectedRoute path="/rooms" exact>
            <Register/>
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function GuestRoute({children,...rest}) {
  const [isAuth, setisAuth] = useState(AUTH);
  const [User, setUser] = useState(USER);
  return <Route
    render={({location})=>{
      return (
        !isAuth ? 
        (
          children
        ): (isAuth && !User.activated)?(
          <Redirect to={{
            pathname:'/register',
            state:{from:location}
          }}/>
          ) : (
          <Redirect to={{
            pathname:'/rooms',
            state:{from:location}
          }}/>
          )
      )
    }}
  ></Route>;
}

function SemiProtectedRoute({children,...rest}) {
  const [isAuth, setisAuth] = useState(AUTH);
  const [User, setUser] = useState(USER);
  return <Route
    render={({location})=>{
      return (
        !isAuth ? 
        (
          <Redirect to={{
            pathname:'/',
            state:{from:location}
          }}/>
        ): (isAuth && !User.activated)?(
          children
        ) : (
          <Redirect to={{
            pathname:'/rooms',
            state:{from:location}
          }}/>
          )
      )
    }}
  ></Route>;
}

function ProtectedRoute({children,...rest}) {
  const [isAuth, setisAuth] = useState(AUTH);
  const [User, setUser] = useState(USER);
  return <Route
    render={({location})=>{
      return (
        !isAuth ? 
        (
          <Redirect to={{
            pathname:'/',
            state:{from:location}
          }}/>
        ): (isAuth && !User.activated)?(
          <Redirect to={{
          pathname:'/register',
          state:{from:location}
        }}/>
          ) : (
            children
          )
      )
    }}
  ></Route>;
}



export default App;
