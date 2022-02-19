import React from 'react';  
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
  return(
        <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div class="app-wrapper-content">
              <BrowserRouter>
                  <Routes>
                    <Route path="/dialogs" element={<Dialogs />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
              </BrowserRouter>
          </div>
        </div>
  );
}

export default App;
