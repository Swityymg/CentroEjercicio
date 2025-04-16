import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const localizer = momentLocalizer(moment);

function GestionClases({ usuarioLogueado, setVista, setUsuarioLogueado }) {
  const [clases, setClases] = useState([]);
  const [catalogoClases, setCatalogoClases] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [salones, setSalones] = useState([]);
  const [formData, setFormData] = useState({
    idClase: '',
    idCoach: '',
    fechaHora: '',
    capacidad: '',
    idSalon: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('Usuario en GestionClases:', usuarioLogueado); // Log para depurar
    if (!usuarioLogueado || (usuarioLogueado.tipo !== 1 && usuarioLogueado.tipo !== 3)) {
      setVista('inicio');
      return;
    }

    const fetchData = async () => {
      try {
        const [clasesRes, catalogoRes, coachesRes, salonesRes] = await Promise.all([
          axios.get('http://localhost:3000/clases/disponibles'),
          axios.get('http://localhost:3000/catalogo-clases'),
          axios.get('http://localhost:3000/coaches'),
          axios.get('http://localhost:3000/salones'),
        ]);

        const eventos = clasesRes.data.map((clase) => ({
          id: clase.IdClaseProgramada,
          title: `${clase.NombreClase} - ${clase.NombreCoach} (${clase.NombreSalon})`,
          start: new Date(clase.FechaHora),
          end: new Date(new Date(clase.FechaHora).getTime() + 60 * 60 * 1000), // 1 hora
          allDay: false,
        }));
        setClases(eventos);
        setCatalogoClases(catalogoRes.data);
        setCoaches(coachesRes.data);
        setSalones(salonesRes.data);
      } catch (err) {
        setError('Error al cargar datos: ' + (err.response?.data?.error || err.message));
      }
    };

    fetchData();
  }, [usuarioLogueado, setVista]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.idClase || !formData.idCoach || !formData.fechaHora || !formData.capacidad || !formData.idSalon) {
      setError('Todos los campos son obligatorios');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/clases', {
        idClase: parseInt(formData.idClase),
        idCoach: parseInt(formData.idCoach),
        fechaHora: formData.fechaHora.replace('T', ' ') + ':00',
        capacidad: parseInt(formData.capacidad),
        idSalon: parseInt(formData.idSalon),
      });

      const claseSeleccionada = catalogoClases.find((c) => c.IdClase === parseInt(formData.idClase));
      const coachSeleccionado = coaches.find((c) => c.IdCoach === parseInt(formData.idCoach));
      const salonSeleccionado = salones.find((s) => s.IdSalon === parseInt(formData.idSalon));

      const nuevaClase = {
        id: response.data.idClaseProgramada,
        title: `${claseSeleccionada.NombreClase} - ${coachSeleccionado.NombreCoach} (${salonSeleccionado.NombreSalon})`,
        start: new Date(formData.fechaHora),
        end: new Date(new Date(formData.fechaHora).getTime() + 60 * 60 * 1000),
        allDay: false,
      };
      setClases([...clases, nuevaClase]);
      setFormData({
        idClase: '',
        idCoach: '',
        fechaHora: '',
        capacidad: '',
        idSalon: '',
      });
      setError('');
      alert('Clase creada correctamente');
    } catch (error) {
      setError(error.response?.data?.error || 'Error al crear clase');
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header setVista={setVista} usuarioLogueado={usuarioLogueado} />
      <main className="flex-grow-1">
        <div className="container py-5">
          <h1 className="text-center">Gestión de Clases</h1>
          <p className="text-center">Bienvenido, {usuarioLogueado?.nombre || 'Usuario'}!</p>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mb-4">
            <h3>Programar Nueva Clase</h3>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="idClase" className="form-label">
                    Clase
                  </label>
                  <select
                    className="form-control"
                    id="idClase"
                    name="idClase"
                    value={formData.idClase}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccione una clase</option>
                    {catalogoClases.map((clase) => (
                      <option key={clase.IdClase} value={clase.IdClase}>
                        {clase.NombreClase}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="idCoach" className="form-label">
                    Coach
                  </label>
                  <select
                    className="form-control"
                    id="idCoach"
                    name="idCoach"
                    value={formData.idCoach}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccione un coach</option>
                    {coaches.map((coach) => (
                      <option key={coach.IdCoach} value={coach.IdCoach}>
                        {coach.NombreCoach} {coach.ApellidoPaterno}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="fechaHora" className="form-label">
                    Fecha y Hora
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="fechaHora"
                    name="fechaHora"
                    value={formData.fechaHora}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="capacidad" className="form-label">
                    Capacidad
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="capacidad"
                    name="capacidad"
                    value={formData.capacidad}
                    onChange={handleChange}
                    required
                    min="1"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="idSalon" className="form-label">
                    Salón
                  </label>
                  <select
                    className="form-control"
                    id="idSalon"
                    name="idSalon"
                    value={formData.idSalon}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccione un salón</option>
                    {salones.map((salon) => (
                      <option key={salon.IdSalon} value={salon.IdSalon}>
                        {salon.NombreSalon}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">
                    Programar Clase
                  </button>
                </div>
              </div>
            </form>
          </div>

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
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GestionClases;