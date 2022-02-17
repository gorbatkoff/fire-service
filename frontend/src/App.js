import './App.css';
import About from './components/About';
import Goverment from './components/Goverment';
import Header from './components/Header';
import Main from './components/Main';
import Programs from './components/Programs';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {

  return (
    <div>
      <Goverment></Goverment>

      <Header></Header>

      <Main></Main>

      <About></About>

      <Programs></Programs>

      <Carousel></Carousel>

      <Contacts></Contacts>

      <Footer></Footer>
    
    </div>
  );
}

export default App;
