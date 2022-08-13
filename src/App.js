import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Nowplay from './Nowplay/Nowplay';
import Toprate from './Toprate/Toprate';
import {BrowserRouter as AllRoutes , Routes , Route} from 'react-router-dom';
import Notfound from './Notfound/Notfound';
function App() {
  return (
    <div>
      <AllRoutes>
     
        <Routes>
          <Route path="/" element={<Nowplay/>} />
          <Route path="/now" element={<Nowplay />} /> 
          <Route path="/toprate" element={<Toprate />} />
          <Route path="*" element={ <Notfound />} />
        </Routes>


        <Sidebar />
      </AllRoutes>

 


    


       
    </div>
  );
}

export default App;
