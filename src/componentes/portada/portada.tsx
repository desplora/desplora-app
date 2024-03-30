import React from 'react';
import portadaStyle from './portada.module.css';
import Image from 'next/image';


interface PortadaProps {
    titulo?: string;
    descripcion?: string;
    tituloEspecial?: any;
    fondo: string ;
    //items: any[]; // Cambia el tipo según el tipo de datos que esperas en 'items'
  }


  
  const Portada: React.FC<PortadaProps> = ({ titulo, tituloEspecial, descripcion, fondo}) => {
    return (
      <section className={portadaStyle.portada}>
        {tituloEspecial}
        <h1>{titulo}</h1>
        <h3>{descripcion}</h3>
        <img src={`https://desplora.com/medien/${fondo}.webp`}/>
      </section>
    );
  }
  
  export default Portada;