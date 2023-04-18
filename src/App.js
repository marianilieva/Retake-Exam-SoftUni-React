import { Routes, Route } from 'react-router-dom';

import  Header  from './components/Header/Header';
import Dependencies from './components/Dependencies/Dependencies';

import AllDependencies from './components/AllDependencies/AllDependencies';
import Physical from './components/AllDependencies/Physical/Physical';
import Mind from './components/AllDependencies/Mind/Mind';
import Geographical from './components/AllDependencies/Geographical/Geographical';
import Social from './components/AllDependencies/Social/Social';
import Interests from './components/AllDependencies/Interests/Interests';
import Error from './components/AllDependencies/Error/Error';
import Login from './components/UserInteractions/Login/Login';
import Register from './components/UserInteractions/Register/Register';
import Logout from './components/UserInteractions/Logout/Logout';

import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';

import { RegisteredProvider } from './components/UserInteractions/contexts/RegisteredContext';

import './App.css';

function App() {
  return (
    <div className="App">
      <RegisteredProvider>
        <Menu />
          <Routes>
            <Route path='/' element={<>
                <Header />
                <Dependencies />
                <AllDependencies />
            </>} />
            <Route path='/physical' element={<Physical />} />
            <Route path='/mind' element={<Mind />} />
            <Route path='/geographical' element={<Geographical />} />
            <Route path='/social' element={<Social />} />
            <Route path='/interests' element={<Interests />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<Error />} />
          </Routes>
        <Footer />
      </RegisteredProvider>
    </div>
  );
}

export default App;
