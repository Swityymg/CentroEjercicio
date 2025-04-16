import Header from './Header';
import Footer from './Footer';

function Contacto({ setVista }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header setVista={setVista} />
      <main className="flex-grow-1">
        <div className="container">
          <h1>Contacto</h1>
          <p>Placeholder para la página de contacto.</p>
          <button onClick={() => setVista('registro')}>Ir a Registro</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contacto;