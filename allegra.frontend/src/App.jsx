import { useState } from 'react';
import './App.css';
import Registro from './components/Registro';
import Inicio from './components/Inicio';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Login from './components/Login';
import Clases from './components/Clases';
import RegistroAdminCoach from './components/RegistroAdminCoach';
import GestionClases from './components/GestionClases';

function App() {
  const [vista, setVista] = useState('inicio');
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);

  console.log('Vista actual:', vista, 'Usuario logueado:', usuarioLogueado); 

  return (
    <div>
      {vista === 'registro' && <Registro setVista={setVista} />}
      {vista === 'inicio' && <Inicio setVista={setVista} />}
      {vista === 'servicios' && <Servicios setVista={setVista} />}
      {vista === 'contacto' && <Contacto setVista={setVista} />}
      {vista === 'login' && (
        <Login setVista={setVista} setUsuarioLogueado={setUsuarioLogueado} />
      )}
      {vista === 'clases' && (
        <Clases
          usuarioLogueado={usuarioLogueado}
          setVista={setVista}
          setUsuarioLogueado={setUsuarioLogueado}
        />
      )}
      {vista === 'registro-admin-coach' && (
        <RegistroAdminCoach setVista={setVista} />
      )}
      {vista === 'gestion-clases' && (
        <GestionClases
          usuarioLogueado={usuarioLogueado}
          setVista={setVista}
          setUsuarioLogueado={setUsuarioLogueado}
        />
      )}
    </div>
  );
}

export default App;