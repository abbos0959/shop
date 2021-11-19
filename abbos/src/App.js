
import './App.css';
import { Footer } from './component/Footer';
import { Header } from './component/Header';
import { Shoop } from './component/Shoop';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
        <ToastContainer/>
   <Header/>
   <Shoop/>
   <Footer/>
    </div>
  );
}

export default App;
