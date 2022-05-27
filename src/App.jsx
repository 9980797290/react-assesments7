
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Student from './Components/Student';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Details from './Components/Details';
import AddStudent from './Components/Details';
import Update from './Components/Update';
function App() {
 return (
<div className='details'>
  <Details>
  
    
  <div className='black'>
<BrowserRouter>

<Navbar />

<Routes>

<Route path='/home' element={<Home />} />
<Route path='/student' element={<Student />} />
<Route path='/contact' element={<Contact />} />
<Route  path='/add-student' element={<AddStudent />}/>
<Route path='/Update' element={<Update />}/>

</Routes>

</BrowserRouter>


     </div>
    
    </Details>
    </div>
    
  );
 
}

export default App;