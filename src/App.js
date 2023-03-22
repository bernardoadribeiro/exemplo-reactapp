import './App.css';

import FirstComponent from "./components/FirstComponent"
import Navbar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <header className=""> 
      </header>
      
      <Navbar /> {/* Carrega componente NavBar */}
      <FirstComponent /> {/* Carrega componente FirstComponent */}

    </div>
  );
}

export default App;
