import React from 'react';
import portadaStyle from './portada.module.css';


interface PortadaProps {
    titulo?: string;
    descripcion?: string;
    tituloEspecial?: any;
    //items: any[]; // Cambia el tipo según el tipo de datos que esperas en 'items'
  }


  
  const Portada: React.FC<PortadaProps> = ({ titulo, tituloEspecial, descripcion}) => {
    return (
      <section className={portadaStyle.portada}>
        {tituloEspecial}
        <h1>{titulo}</h1>
        <h3>{descripcion}</h3>
      </section>
    );
  }
  
  export default Portada;