import Portada from '../componentes/portada/portada';
import TextoPrincipal from '../componentes/textoPrincipal/textoPrincipal';

export default async function Home() {

  const data = await fetch('https://diegobarakus.github.io/apiAlimantador/Pages.json');
  const pages = await data.json();

  const customTitulo = <h1>DES<span style={{opacity: "0.4"}}>CUBRE & EX</span>PLORA</h1>;

  return (
      <>
      <Portada descripcion="Te contamos todo sobre tú proximo destino" tituloEspecial={customTitulo} />
      <TextoPrincipal contenidoPayload={pages[0].texto_introduccion} modus={true} />
      </>

  );
}
