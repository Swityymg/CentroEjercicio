import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "./Servicios.css";

function Servicios() {
  const clases = [
    {
      img: "reformer3.jpg",
      title: "Pilates Reformer",
      text: "Fortalece tu núcleo y mejora tu postura, con la ayuda de una máquina especializada."
    },
    {
      img: "yoga.jpg",
      title: "Yoga",
      text: "Conéctate contigo mismo a través de posturas, respiración y meditación. Encuentra equilibrio y bienestar en nuestros diversos estilos."
    },
    {
      img: "mat1.jpg",
      title: "Pilates Mat",
      text: "Entrena con tu propio peso corporal en colchonetas. Mejora el control, la alineación y la flexibilidad en cada sesión."
    },
    {
      img: "spring1.jpg",
      title: "Pilates Springboard",
      text: "Desafía tu cuerpo, con una tabla y resortes. Trabaja fuerza y estabilidad a través de ejercicios dinámicos y variados."
    },
    {
      img: "barre.jpg",
      title: "Barre",
      text: "Tonifica y fortalece con movimientos inspirados en el ballet. Utiliza barras para mejorar tu postura y flexibilidad mientras te diviertes."
    },
    {
      img: "Bici2.jpg",
      title: "Spinning",
      text: "Siente la energía del ciclismo en interiores. Mejora tu condición cardiovascular y tonifica tus piernas con música motivadora y un instructor que te guía.."
    }
  ];

  

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1">
      
        <section className="fondo hero-section py-5 text-center">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-bold">Servicios</h1>
              <p className="lead text-body-secondary">Movimiento. Fuerza. Equilibrio</p>
              <p>
                <a href="registrarse.html" className="btn btn-primary my-2">
                  Reservar clase
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Clases Section */}
        <section className="clases-section py-5">
          <div className="container">
            <h2 className="text-center mb-4">Clases</h2>
            <p className="text-center mb-5">
            Explora nuestra variedad de clases diseñadas para todos los niveles. Desde entrenamientos de alta intensidad hasta sesiones de relajación, ¡encuentra la que mejor se adapte a ti
            </p>

            <div className="clases-grid">
              {clases.map((clase, index) => (
                <div key={index} className="clase-card">
                  <div className="card-image">
                    <img src={`/images/${clase.img}`} alt={clase.title} />
                  </div>
                  <div className="card-content">
                    <h3>{clase.title}</h3>
                    <p>{clase.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       
     

        {/* Salones */}
<section className="container py-5">
  <h2 className="text-center mb-4">Salones</h2>
  <p className="lead text-center">
    Conoce nuestros 3 salones en los que encontrarás clases de diferentes disciplinas y dificultad que se adaptan a tus objetivos.
  </p>

  {/* Salón Flex */}
  <div className="row featurette">
    <div className="col-md-7">
      <h3>Salón Flex</h3>
      <h5 className="text-body-secondary">Capacidad: 12 personas</h5>
      <p className="lead">
        Descripción: Un espacio diseñado para clases de pilates, donde el enfoque principal es la flexibilidad, la postura y el control del cuerpo. Con un ambiente tranquilo y relajante, ideal para trabajar el equilibrio y fortalecer el core.
      </p>
    </div>
    <div className="col-md-5">
      <img src="images/reformer2.jpg" className="bd-placeholder-img featurette-image img-fluid mx-auto" alt="Salón Flex" />
    </div>
  </div>

  <hr className="featurette-divider" />

  {/* Barre Flow */}
  <div className="row featurette">
    <div className="col-md-4 order-md-1">
      <img src="images/mat1.jpg" className="bd-placeholder-img featurette-image img-fluid mx-auto" alt="Barre Flow" />
    </div>
    <div className="col-md-7 order-md-2">
      <h3>Barre Flow</h3>
      <h5 className="text-body-secondary">Capacidad: 20 personas</h5>
      <p className="lead">
        Descripción: Este salón está dedicado a las clases de barre, combinando elementos del ballet, pilates y yoga. Un espacio dinámico y elegante que invita a la fluidez del movimiento, tonificando el cuerpo y mejorando la postura.
      </p>
    </div>
  </div>

  <hr className="featurette-divider" />

  {/* Cycle Beat */}
  <div className="row featurette">
    <div className="col-md-7">
      <h3>Cycle Beat</h3>
      <h5 className="text-body-secondary">Capacidad: 30 personas</h5>
      <p className="lead">
        Descripción: Un salón vibrante y lleno de energía para las clases de spinning. Con música motivadora y un enfoque en el ritmo, este espacio está diseñado para un entrenamiento cardiovascular intenso y eficaz, ayudando a mejorar la resistencia y tonificación.
      </p>
    </div>
    <div className="col-md-5">
      <img src="images/Bici.jpg" className="bd-placeholder-img featurette-image img-fluid mx-auto" alt="Cycle Beat" />
    </div>
  </div>
</section>



{/* Precios  */}
<section className="precios-section">
  <div className="container">
    <h2>Paquetes de Clases</h2>
    <p className="subtitle">¡Invierte en tu bienestar!</p>

    <div className="paquetes-fila">
      {/* Clase suelta */}
      <div className="paquete-card destacado">
      <div className="cabecera-destacada">Clase suelta</div>
      
        <p className="precio">$150<span>/mxn</span></p>
        <ul>
          <li>Válido en todas las clases</li>
          <li>Vigencia: 15 días</li>
        </ul>
        <button className="btn-comprar destacado">Comprar</button>
      </div>

      {/* 8 clases */}
      <div className="paquete-card destacado">
      <div className="cabecera-destacada">8 clases</div>
        <p className="precio">$1,080<span>/mxn</span></p>
        <ul>
          <li>Válido en todas las clases</li>
          <li>Vigencia: 45 días</li>
        </ul>
        <button className="btn-comprar destacado">Comprar</button>
      </div>

      {/* 12 clases */}
      <div className="paquete-card destacado">
      <div className="cabecera-destacada">12 clases</div>
        <p className="precio">$1,620<span>/mxn</span></p>
        <ul>
          <li>Válido en todas las clases</li>
          <li>Vigencia: 45 días</li>
        </ul>
        <button className="btn-comprar destacado">Comprar</button>
      </div>
    </div>

    <div className="paquetes-fila">
      {/* 1 mes */}
      <div className="paquete-card destacado">
        <div className="cabecera-destacada">1 mes</div>
        <div className="contenido-paquete">
          <p className="precio">$3,000<span>/mxn</span></p>
          <ul>
            <li>Válido en todas las clases</li>
            <li>Máximo 2 clases por día</li>
            <li>Vigencia: 30 días</li>
          </ul>
          <button className="btn-comprar destacado">Comprar</button>
        </div>
      </div>

      {/* 6 meses */}
      <div className="paquete-card destacado">
        <div className="cabecera-destacada">6 meses</div>
        <div className="contenido-paquete">
          <p className="precio">$18,000<span>/mxn</span></p>
          <ul>
            <li>Válido en todas las clases</li>
            <li>Máximo 2 clases por día</li>
            <li>Vigencia: 180 días</li>
          </ul>
          <button className="btn-comprar destacado">Comprar</button>
        </div>
      </div>

      {/* 1 año */}
      <div className="paquete-card destacado">
        <div className="cabecera-destacada">1 año</div>
        <div className="contenido-paquete">
          <p className="precio">$35,000<span>/mxn</span></p>
          <ul>
            <li>Válido en todas las clases</li>
            <li>Máximo 2 clases por día</li>
            <li>Vigencia: 365 días</li>
          </ul>
          <button className="btn-comprar destacado">Comprar</button>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      <Footer />
    </div>
  );
}

export default Servicios;
