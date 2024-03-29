import React from 'react';
import portadaStyle from './portada.module.css';


interface PortadaProps {
    titulo: string;
    descripcion: string;
    //items: any[]; // Cambia el tipo según el tipo de datos que esperas en 'items'
  }
  
  const Portada: React.FC<PortadaProps> = ({ titulo, descripcion}) => {
    return (
      <section className={portadaStyle.portada}>
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
      </section>
    );
  }
  
  export default Portada;