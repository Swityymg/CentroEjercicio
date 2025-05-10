import Header from './Header';
import Footer from './Footer';
import "./Inicio.css";

function Inicio({ setVista }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header setVista={setVista} />
      <main className="flex-grow-1">
  
        <section className="fondo hero-section py-5 text-center">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-bold">Allegra</h1>
              <p className="lead text-body-secondary">Movimiento. Fuerza. Equilibrio</p>
              <p>
                <button className="btn btn-primary my-2" onClick={() => setVista('registro')}>
                  ¡Empieza ahora!
                </button>
              </p>
            </div>
          </div>
        </section>

       {/* Sobre Nosotros */}
<section className="sobre-nosotros py-5">
  <div className="container">
    <div className="row align-items-center">

      <div className="col-lg-7 mb-4 mb-lg-0">
        <h2 className="mb-4">Sobre nosotros</h2>
        <p className="lead">
          Somos un centro de entrenamiento dedicado a ayudarte a alcanzar tus objetivos de salud y bienestar. 
        </p>
        <p>
          Con un equipo de profesionales y un ambiente motivador, ofrecemos clases diseñadas para todos los niveles.
          Nuestra misión es inspirar y motivar a las personas a llevar un estilo de vida activo y saludable.
        </p>
        
        <div className="row mt-4">
          <div className="col-md-6">
            <h5 className="titulo-morado">Nuestros Valores</h5>
            <ul className="valores-list">
              <li>Compromiso con tu transformación</li>
              <li>Diversión en cada clase</li>
              <li>Enfoque personalizado</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="titulo-morado">¿Por qué elegirnos?</h5>
            <ul className="valores-list">
              <li>Entrenadores certificados</li>
              <li>Variedad de clases</li>
              <li>Horarios flexibles</li>
              <li>Instalaciones modernas</li>
            </ul>
          </div>
        </div>
      </div>
      
  
      <div className="col-lg-5">
        <img 
          src="/images/reformer1.jpg" 
          alt="Estudio Allegra" 
          className="img-fluid rounded shadow"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
    </div>
  </div>
</section>

       
      </main>
      <Footer />
    </div>
  );
}

export default Inicio;
