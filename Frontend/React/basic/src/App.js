
import Homepage from './Components/pages/Homepage'
import './App.css';
import Aboutpage from './Components/pages/Aboutpage';
import Contactpage from './Components/pages/Contactpage';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './Components/pages/PageNotFound';
import Adduser from './Components/User/Adduser';
import Edituser from './Components/User/Edituser';
import Viewuser from './Components/User/Viewuser';

function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<Aboutpage />} />
          <Route exact path="/contact" element={<Contactpage />} />
          <Route exact path="/user/add" element={<Adduser />} />
          <Route exact path="/user/edit/:userid" element={<Edituser />} />{/*it is dynamic routing mechanism because everytime userid changes id value is changes*/}
          <Route exact path="/user/view/:userid" element={<Viewuser />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
