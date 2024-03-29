import Portada from '../componentes/portada/portada';

export default function Home() {

  const customTitulo = <h1>DES<span style={{opacity: "0.4"}}>CUBRE & EX</span>PLORA</h1>;

  return (
      <>
      <Portada descripcion="Te contamos todo sobre tú proximo destino" tituloEspecial={customTitulo} />
      <h2>Este es un H2</h2>
      <h3>Este es un H3 Destinos que te podrian interesar</h3>
      <p>Este es un paragrafo </p>
      </>

  );
}
