// import "antd/dist/antd.css";
import './App.css';
import About from './components/About';
import Goverment from './components/Goverment';
import Header from './components/Header';
import Main from './components/Main';
import Programs from './components/Programs';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Login from './components/Login';

import { Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element=
        {
          [<Goverment />, <Header />, <Main />, <About />, <Programs />,
          <Carousel />, <Contacts />, <Footer />]
        } />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
