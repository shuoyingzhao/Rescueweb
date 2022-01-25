
import './App.css';
import { BrowserRouter as Router, Route, Routes,Navigate} from "react-router-dom";
import Home from './Pages/Home'
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Labs from './Pages/Labs';
import Publications from './Pages/Publications';
import About from './Pages/About';
import HElab from './Pages/Labpages/HElab';
import ABElab from './Pages/Labpages/ABElab';
import DMMlab from './Pages/Labpages/DMMlab';
import MMFlab from './Pages/Labpages/MMFlab';

function App() {
  return (
    <div className="App">
    <Router>
   
   <Header/>
   
   <Routes>
  
     <Route path="/Home" element={<Home />} />
     <Route path="/" element={<Navigate replace to="/home" />} />
     <Route path="/Labs" element={<Labs />} />
     <Route path="/Publications" element={<Publications />} />
     <Route path="/About" element={<About />} />
     <Route path="/HElab" element={<HElab />} />
     <Route path="/ABElab" element={<ABElab />} />
     <Route path="/DMMlab" element={<DMMlab />} />
     <Route path="/MMFlab" element={<MMFlab />} />
   </Routes>
   
   <Footer/>
 </Router>,
    </div>
  );
}

export default App;
