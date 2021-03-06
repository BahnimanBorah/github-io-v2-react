//built-in components
import {BrowserRouter as Router, Route} from 'react-router-dom';
//custom components
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Projects from './components/Projects';

function App() {
// defined variables


  return (
    <Router>
    <div className="container">
      <Header/>
      <Navigation/>

      {/* routing begins here */}
      <Route exact path='/' render={Home} />
      <Route path='/blogs' component={Blogs} />
      <Route path='/projects' component={Projects} />
      {/* routing ends here */}
      
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
