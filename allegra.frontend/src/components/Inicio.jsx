import Header from './Header';
import Footer from './Footer';

function Inicio({ setVista }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header setVista={setVista} />
      <main className="flex-grow-1">
        <div className="container">
          <h1>Inicio</h1>
          <p>Placeholder para la página de inicio.</p>
          <button onClick={() => setVista('registro')}>Ir a Registro</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Inicio;