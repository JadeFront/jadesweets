import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Cookies from './Components/Cookies';
import Macarons from './Components/Macarons';
import Cupcakes from './Components/Cupcakes';
import Best from './Components/Best';
import Footer from './Components/Footer';
import Menubar from './Components/Menubar';

function App() {
  return (
    <div className="App">
      <Menubar/>
      <Home/>
      <About/>
      <Cookies/>
      <Macarons/>
      <Cupcakes/>
      <Best/>
      <Footer/>
    </div>
  );
}

export default App;
