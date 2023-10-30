import Login from './Components/Login'
import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Dashboard from './Components/Dashboard';
import Register from './Components/Register';
import PublicRoute from './Components/PublicRoute';
import PrivateRoute from './Components/PrivateRoute';

const App =()=> {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Login}/>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/register" Component={Register}/>
        <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;