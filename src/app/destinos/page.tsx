import estilo from './destinos.module.css';
import { useState } from 'react';
import Link from 'next/link';
import ModuloBusqueda from '../../componentes/modulobusqueda/modulobusqueda';


//redux


export default async function Destinos(){

    return (
        <>
        <ModuloBusqueda />
        </>
    );
}