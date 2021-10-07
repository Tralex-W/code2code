import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Logos from './components/logos';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Logos />
      <Footer />
    </div>
  );
}

export default App;
