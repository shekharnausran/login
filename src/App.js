import Login from './Components/Login'
import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Dashboard from './Components/Dashboard';
const App =()=> {
  return (
    <>
    
      <Routes>
        <Route exact path="/" Component={Login}/>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/dashboard" Component={Dashboard}/>
      </Routes>
    </>
  );
}

export default App;