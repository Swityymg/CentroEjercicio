import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const localizer = momentLocalizer(moment);

function Clases({ usuarioLogueado, setVista, setUsuarioLogueado }) {
  const [clases, setClases] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('Usuario en Clases:', usuarioLogueado); 
    if (!usuarioLogueado || usuarioLogueado.tipo !== 4) {
      setVista('inicio');
      return;
    }

    const fetchClases = async () => {
      try {
        const response = await axios.get('http://localhost:3000/clases/disponibles');
        const eventos = response.data.map((clase) => ({
          id: clase.IdClaseProgramada,
          title: `${clase.NombreClase} - ${clase.NombreCoach} (${clase.NombreSalon})`,
          start: new Date(clase.FechaHora),
          end: new Date(new Date(clase.FechaHora).getTime() + 60 * 60 * 1000), 
          allDay: false,
          data: clase,
        }));
        setClases(eventos);
      } catch (err) {
        setError('Error al cargar clases: ' + (err.response?.data?.error || err.message));
      }
    };

    fetchClases();
  }, [usuarioLogueado, setVista]);

  const handleReservar = async (clase) => {
    try {
      await axios.post('http://localhost:3000/reservas', {
        idClaseProgramada: clase.id,
        idUsuario: usuarioLogueado.id_usuario,
      });
      setClases(clases.filter((c) => c.id !== clase.id)); 
      alert('Clase reservada correctamente');
    } catch (error) {
      setError(error.response?.data?.error || 'Error al reservar clase');
    }
  };

  const eventPropGetter = () => ({
    style: {
      backgroundColor: '#3174ad',
      color: 'white',
    },
  });

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header setVista={setVista} usuarioLogueado={usuarioLogueado} />
      <main className="flex-grow-1">
        <div className="container py-5 text-center">
          <h1>Mis Clases</h1>
          <p>Bienvenido, {usuarioLogueado?.nombre || 'Usuario'}! Aquí están las clases disponibles.</p>
          {error && <div className="alert alert-danger">{error}</div>}

          <Calendar
            localizer={localizer}
            events={clases}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            messages={{
              next: 'Siguiente',
              previous: 'Anterior',
              today: 'Hoy',
              month: 'Mes',
              week: 'Semana',
              day: 'Día',
            }}
            eventPropGetter={eventPropGetter}
            onSelectEvent={(event) => {
              const clase = event.data;
              if (
                window.confirm(
                  `¿Reservar ${clase.NombreClase} con ${clase.NombreCoach} el ${moment(
                    clase.FechaHora
                  ).format('LLL')} en ${clase.NombreSalon}?`
                )
              ) {
                handleReservar(event);
              }
            }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Clases;