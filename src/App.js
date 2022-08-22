import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignIn from "./SignIn/SignIn"
import SignUp from './SignUp/SignUp'
import Orders from "./Orders/Orders";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
