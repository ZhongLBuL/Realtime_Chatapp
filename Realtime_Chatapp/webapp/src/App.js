import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";

import  Update  from "./pages/update/Update";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div >
     <Router>
       <Routes>
       <Route exact path='/' element= {user ? <Home /> : <Register />} />
       <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
       <Route path='/register' element= {user ? <Navigate to="/" /> : <Register />} />
       <Route path='/messenger' element= {!user ? <Navigate to="/" /> : <Messenger />} />
       <Route path='/profile/:username' element={<Profile/>} />

       <Route path='/update' element={<Update/>} />

       </Routes>
     </Router>
    </div>
  );
}

export default App;
