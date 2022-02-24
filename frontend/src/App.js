import './App.css';
import About from './components/About';
import Goverment from './components/Goverment';
import Header from './components/Header';
import Main from './components/Main';
import Programs from './components/Programs';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Login from './components/Login';
import Documents from './components/Documents';

import Home from './components/Cabinet/Home';

import { message } from 'antd';

import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

const api = axios.create({ // declaration of API connection
  baseURL: 'http://localhost:4001'
});

api.interceptors.response.use(null, error => {
  console.log('INTERCEPTOR CALLED');

  const response = error.request.response;
  let textOfError;

  if (!response) {
    textOfError = "Internal Error"
  }

  try {
    textOfError = JSON.parse(response).message;
  }

  catch (e) {
    textOfError = "JSON contains no error";
  }

  message.error(textOfError);

})

function App() {

  let navigate = useNavigate();

  const logIn = async (login, password) => {
    try {
      const userLogin = {
        login: login,
        password: password
      };

      await api.post('/login', userLogin);

      navigate('/home')
    }

    catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Routes>
        <Route path="/" element=
          {
            [<Goverment />, <Header />, <Main />, <About />, <Programs />,
            <Documents />, <Contacts />, <Footer />]
          } />
        <Route path="/login" element={<Login logIn={logIn} />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
