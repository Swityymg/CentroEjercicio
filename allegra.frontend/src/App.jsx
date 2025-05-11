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
import Pago from './components/Pago'; // Asegúrate de crear este componente

function App() {
  const [vista, setVista] = useState('inicio');
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);
  const [paqueteSeleccionado, setPaqueteSeleccionado] = useState(null);

  console.log('Vista actual:', vista, 'Usuario logueado:', usuarioLogueado);

  return (
    <div>
      {vista === 'registro' && <Registro setVista={setVista} />}
      {vista === 'inicio' && <Inicio setVista={setVista} />}
      {vista === 'servicios' && (
        <Servicios 
          setVista={setVista} 
          setPaqueteSeleccionado={setPaqueteSeleccionado} 
        />
      )}
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
      {vista === 'pago' && (
        <Pago 
          setVista={setVista} 
          paquete={paqueteSeleccionado} 
        />
      )}
    </div>
  );
}

export default App;
