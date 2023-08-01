import './App.css';
import  {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddSale from './pages/AddSale';
import TopSale from './pages/TopSale';
import Revenue from './pages/Revenue';
import Login from './pages/Login';
import Registration from './pages/Registration';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
     <Router>
      <NavBar />
      <Routes>
        <Route exact path="/addsale"element={<AddSale />}></Route>
        <Route exact path="/topsale"element={<TopSale />}></Route>
        <Route exact path="/revenue"element={<Revenue />}></Route>
        <Route exact path="/login"element={<Login />}></Route>
        <Route exact path="/"element={<Registration />}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
