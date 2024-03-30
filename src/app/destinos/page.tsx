
import estilo from './destinos.module.css';
import { useState } from 'react';
import Link from 'next/link';
import ModuloBusqueda from '../../componentes/modulobusqueda/modulobusqueda';

export default async function Destinos(){

        const data = await fetch('https://diegobarakus.github.io/apiAlimantador/destinosLista.json');
        const destinos = await data.json();
    return (
        <ModuloBusqueda data={destinos} />
    );
}