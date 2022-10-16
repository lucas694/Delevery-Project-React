//imports
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import Sabores from './Pages/Sabores/Sabores';
import Cadastro from "./Pages/Cadastro/Cadastro"
import PedirAgora from "./Pages/PedirAgora/PedirAgora"
import Modal from "./componentes/Modal/Modal"


import './App.css';

{/* Tela inicial*/}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Sabores" element={<Sabores/>}/>
              <Route path="/Cadastro" element={<Cadastro/>}/>
              <Route path="/PedirAgora" element={<PedirAgora/>}/>
              <Route path="/Modal" element={<Modal/>}/>

          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
