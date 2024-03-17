import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Theme/Layout';
import UserManagement from './pages/Theme/UserManagement';
import FAQ from './pages/FAQ';
import Contact from './pages/Theme/Contact';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/user-management" element={<UserManagement/>}/>
          <Route path="/faq" element={<FAQ />}/>
          <Route path="/contact" element={<Contact />}/>
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
