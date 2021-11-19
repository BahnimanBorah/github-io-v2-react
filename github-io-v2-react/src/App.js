//built-in components
import {BrowserRouter as Router, Route} from 'react-router-dom';
//custom components
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

function App() {
// defined variables


  return (
    <Router>
    <div className="container-xl">
      <Header/>
      
      <Route path='/about' component={About} />
      
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
