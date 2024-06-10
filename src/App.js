import Header from './components/Header.jsx';
import "./styles/App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import { PageNotFound } from './components/PageNotFound.jsx';
import { Product } from './components/Product.jsx';
function App() {
  return (
    <Router>
      <Header />
      <Routes>  
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/contact" element={<Contact />} />
        <Route path ="/product/:ide" element={<Product />} />
        <Route path ="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};
export default App;
