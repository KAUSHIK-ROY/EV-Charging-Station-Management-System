import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import StationList from './components/StationList';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/stations" element={<StationList />} />
        </Route>
        
      </Routes>
    
  );
}

export default App;
