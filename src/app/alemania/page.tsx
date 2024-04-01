import Portada from '@/componentes/portada/portada';
import TextoPrincipal from '@/componentes/textoPrincipal/textoPrincipal';

export default async function Alemania() {
    const data = await fetch('https://diegobarakus.github.io/apiAlimantador/Pages.json');
    const pagina = await data.json();
    return (
        <div>
        <Portada titulo={pagina[2].nombre_pagina} fondo={pagina[2].imagen_portada} descripcion={pagina[2].titulo_portada} />
        <br/>
        <TextoPrincipal contenidoPayload={pagina[2].texto_introduccion} />
        </div>
    );
}