import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

import Navbar from './components/Navbar';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
        <main>
          <Navbar/>
            <Switch>
              <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/services" component={Services}/>
                
            </Switch>

            <Footer/>
        </main>
  );
}

export default App;
