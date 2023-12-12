import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Service  from './Components/Service/Service'
import Footer  from './Components/Footer/Footer'


import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './Home';
import Contact from './secondCompnet/Conatct/Caontact';
function App() {
  return (
<Router>
  {/* npx create-react-app . or my-app */
  
  // npm i -----

  // npm start

  // mkdir filename
  // cd filename
  // cd ..
  
  }
  <Header/>

<Routes>
<Route path='/' element={<Home/>}    />

<Route path='/About' element={<About/>}    />
<Route path='/section' element={<Service/>}    />
<Route path="/conatct" element={<Contact/>}/>
</Routes>

<Footer/>
</Router>
  );
}

export default App;
