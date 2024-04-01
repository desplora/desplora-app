

import Portada from '../componentes/portada/portada';
import { sql } from "@vercel/postgres";
import TextoPrincipal from '@/componentes/textoPrincipal/textoPrincipal';
import SliderMiniaturas from '@/componentes/sliderminiaturas/sliderminiaturas';


export default async function Home(){
 
  const data = await fetch('https://diegobarakus.github.io/apiAlimantador/Pages.json');
  const pagina = await data.json();
  
  const customTitulo = <h1>DES<span style={{opacity: "0.4"}}>CUBRE & EX</span>PLORA</h1>;

  return (
      <>
      <Portada descripcion="Te contamos todo sobre tú proximo destino" tituloEspecial={customTitulo} fondo={pagina[0].imagen_portada} />
      <br/>
      <TextoPrincipal contenidoPayload={pagina[0].texto_introduccion} />
      <br/>
      <h3>Destinos que te podiran interesar</h3>
      <SliderMiniaturas />
      </>

  );
}




