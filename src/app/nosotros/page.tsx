import React from 'react';
import Portada from '@/componentes/portada/portada';
import TextoPrincipal from '@/componentes/textoPrincipal/textoPrincipal';

export default async function Nosotros() {
    const data = await fetch('https://diegobarakus.github.io/apiAlimantador/Pages.json');
    const pagina = await data.json();
    return (
        <div>
            <Portada titulo={pagina[3].nombre_pagina} descripcion={pagina[3].titulo_portada} fondo={pagina[3].imagen_portada}/>
            <TextoPrincipal contenidoPayload={pagina[3].texto_introduccion} />
        </div>
    );
}