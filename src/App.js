import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Inicio from './Inicio';  
import AcercaDe from './AcercaDe';   
import Contacto from './Contacto'; 
import Usuarios from './Usuarios'; 
import Categoria from './Categoria';

function App() {
  return (
    
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/inicio">Acerca de</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/usuarios">Usuarios</Link></li>
          <li><Link to="/categorias">Categorias</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact Component={Inicio}/>
        <Route path="/inicio" Component={AcercaDe}/>
        <Route path="/contacto" Component={Contacto} />
        <Route path="/usuarios" Component={Usuarios} />
        <Route path="/categorias" Component={Categoria} />
      </Routes>
    </Router>
  );
}


export default App;
