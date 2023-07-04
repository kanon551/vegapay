import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MiniDrawer from './layout/MiniDrawer';
import Home from './pages/Home';
import NoMatch from './components/NoMatch';
import TeamManagementHome from './pages/TeamManagementHome';



function App() {
  return (
      <div>
      <Router>
            <Routes>
            <Route path='*' element={<MiniDrawer><NoMatch /></MiniDrawer>} />
            <Route path="/" element={<Navigate to="/teamManagement" />}/>
            <Route path="/TeamManagement" element={<MiniDrawer><TeamManagementHome /></MiniDrawer>}/>
            <Route path="/cardSale" element={<MiniDrawer><Home /></MiniDrawer>} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
