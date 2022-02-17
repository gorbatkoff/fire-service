// import { Slider } from 'antd';
import './App.css';
import About from './components/About';
import Goverment from './components/Goverment';
import Header from './components/Header';
import Main from './components/Main';
import Programs from './components/Programs';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

// import Slider from './components/Slider';

function App() {

  return (
    <div className="App">
      <Goverment></Goverment>

      <Header></Header>

      <Main></Main>

      <About></About>

      <Programs></Programs>

      <Contacts></Contacts>

      <Footer></Footer>

      {/* <Slider></Slider> */}
    
    </div>
  );
}

export default App;
