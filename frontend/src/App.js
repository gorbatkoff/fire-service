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

import { Routes, Route } from 'react-router-dom';

import axios from 'axios';

import {message} from 'antd';

const api = axios.create({ // declaration of API connection
  baseURL: 'http://localhost:4001'
});

function App() {

  const logIn = async (login, password) => {
    try {
      const userLogin = {
        login: login,
        password: password
      };
      
      await api.post('/login', userLogin);
    }
    
    catch (err) {
      console.log(err);
    }
  }

  // const getUsers = async (req, res, next) => {
  //   try {
  //     console.log(res);

  //   } catch (error) {
  //     return res.send(400).json("Something gone wrong");
  //   }
  // }

  return (
    <div>
      <Routes>
        <Route path="/" element=
          {
            [<Goverment />, <Header />, <Main />, <About />, <Programs />,
            <Carousel />, <Contacts />, <Footer />]
          } />
        <Route path="/login" element={<Login logIn={logIn} />} />
      </Routes>

    </div>
  );
}

export default App;
