import Aboutpage from "./Aboutpage";
import {Routes,Link,Route} from 'react-router-dom';
import Contacts from "./pages/Contacts";
import Supportpage from "./pages/Supportpage";
import Homepage from "./Homepage";
function App(){
  return<>
  <header>
    <h3>
      App
    </h3>
  </header>
  <Link to='/'>home</Link>
  <Link to= '/Contacts'>contacts</Link>
  <Link to='/Supportpage'>support page</Link>
  <Link to='/About'>about</Link>
  <Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/About" element={<Aboutpage/>}/>
  <Route path="/Contacts" element={<Contacts/>}/>
  <Route path="/Supportpage" element={<Supportpage/>}/>
  </Routes>
  </>
};

export default App;