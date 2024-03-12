import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/appcontext/appcontext';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/menu/menu'
import Home from './Home';
import Dashboard from './pages/dashboard/dashboard';
import Map from './pages/map/map';
import Footer from './components/footer/footer';

function App() {
  return (
    <AppProvider>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <div style={{ display: 'flex', paddingTop: '70px', marginLeft: '0px' }}>
            <Sidebar />
            <div style={{ flex: 1, paddingLeft: '500px' }}>
              <>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/graph" element={<Home />} />
                <Route path="/map" element={<Map />} />
                <Route path="/dashboard" element={<Dashboard />} />
                {/* Diğer route'larınız buraya eklenebilir */}
              </Routes>
              <Footer />
              </>
            </div>
          </div>
        </div>
    </AppProvider>
  );
}

export default App;