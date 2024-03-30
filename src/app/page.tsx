

import Portada from '../componentes/portada/portada';
import { sql } from "@vercel/postgres";
import TextoPrincipal from '@/componentes/textoPrincipal/textoPrincipal';


export default async function Home({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from users`;
  
  const data = await fetch('https://diegobarakus.github.io/apiAlimantador/Pages.json');
  const pagina = await data.json();
  
  const customTitulo = <h1>DES<span style={{opacity: "0.4"}}>CUBRE & EX</span>PLORA</h1>;

  return (
      <>
      <Portada descripcion="Te contamos todo sobre tú proximo destino" tituloEspecial={customTitulo} fondo={pagina[0].imagen_portada} />
      <TextoPrincipal contenidoPayload={pagina[0].texto_introduccion} />
      </>

  );
}




