
import './App.css';
import{ BrowserRouter,Routes, Route} from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services'; 



function App() {
  return (
 <div className='App'>
<BrowserRouter>
<Routes>
  <Route path='/gallery' element={<Acceuil/>}/>
  <Route path='/Apropos' element={<Apropos/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Portfolio' element={<Portfolio/>}/>
  <Route path='/Services' element={<Services/>}/>
 
</Routes>
</BrowserRouter>
 </div>
  );
}

export default App;
