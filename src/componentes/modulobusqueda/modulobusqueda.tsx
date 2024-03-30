'use client';

import React from 'react';
import { useState } from 'react';

import ModuloBusquedaStyle from './moduloBusqueda.module.css';


export default function ModuloBusqueda({data}: any){

    const continentes = [ "Africa", "América", "Asia", "Europa", "Oceania"]

    return(
        <div className={ModuloBusquedaStyle.continentes}>
            {continentes.map((continente: any) => (
                   <div key={`visita ${continente} con desplora`} className={ModuloBusquedaStyle.miniatura}>
                    <img src={`https://desplora.com/medien/iconosDesplora/${continente}.webp`} />
                    <p>{continente}</p>
                   </div>
                ))}

                </div>
            )
}