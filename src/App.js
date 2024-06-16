import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/jadesweets'>
      <header>
        <Navbar />
      </header>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
