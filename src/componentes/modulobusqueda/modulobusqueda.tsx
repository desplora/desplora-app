'use client';

import React, { use } from 'react';
import { useState, useEffect } from 'react';
import Miniatura from '../miniatura/miniatura';
import ModuloBusquedaStyle from './moduloBusqueda.module.css';




export default function ModuloBusqueda({data}: any){

    const [continenteActual, setContinenteActual] = useState("")
    const [destinosData, setDestinosData] = useState([])
    const [paisActual, setPaisActual] = useState([])
    const [resultados, setResultados] = useState([])

    //effect


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://diegobarakus.github.io/apiAlimantador/destinosLista.json');
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
            const jsonData = await response.json();
            setDestinosData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);



      //Store

    let nuevaLista = destinosData.filter((i : any) => i.continente == continenteActual)
    let arrayConRepetidos: any = []
    nuevaLista.filter((i : any) =>{  arrayConRepetidos.push(i.pais)} )
    
    const arrayUnico = arrayConRepetidos.reduce((unicos: any, objeto: any) => {
    const existe = unicos.some((item: any )=> JSON.stringify(item) === JSON.stringify(objeto));
    if (!existe) {
    unicos.push(objeto);
    }
    return unicos;
    }, []);


    let filtrados = destinosData.filter( (item: any )=> item.continente.includes(continenteActual) && item.pais.includes(paisActual))









    const continentes = [ "Africa", "América", "Asia", "Europa", "Oceania"]
    

    return(
        <>
        <div className={ModuloBusquedaStyle.continentes}>
            {continentes.map((continente: any) => (
                   <div onClick={()=> setContinenteActual(continente)} key={`visita ${continente} con desplora`} className={ModuloBusquedaStyle.miniatura}>
                    <img src={`https://desplora.com/medien/iconosDesplora/${continente}.webp`} />
                    <p>{continente}</p>
                   </div>
                ))}

                </div>


                
                

                <div className={`${arrayUnico.length > 0? ModuloBusquedaStyle.paises : ModuloBusquedaStyle.nopaises}`}>
                {arrayUnico.map((pais: any) => (
                   <div onClick={()=> setPaisActual(pais)} key={`visita ${pais} con desplora`} className={ModuloBusquedaStyle.miniatura}>
                    <img src={`https://desplora.com/medien/iconosDesplora/${pais}.webp`} />
                    <p>{pais}</p>
                   </div>
                ))}
                <p className={`${arrayUnico.length > 0 ? ModuloBusquedaStyle.none : ModuloBusquedaStyle.noDestinos}`} >Pronto podrás ver nuestras experiencias en: {continenteActual}</p>
                </div>

                

                <div className={ModuloBusquedaStyle.ciudades}>
                {filtrados.map((destino: any) => (
                  <Miniatura key={`viajar a ${destino.titulo}, informacion en desplora`} imagen={destino.imagenPrincipal} titulo={destino.titulo} />
                ))
                  }
                </div>

                

                <div className={ModuloBusquedaStyle.infoPais}>
                  <div className={ModuloBusquedaStyle.sombra}></div>
                  <div className={`${paisActual.length > 2? ModuloBusquedaStyle.contenidoPais : ModuloBusquedaStyle.nocontenidoPais}`}>
                    <h1>{paisActual}</h1>
                    <p>Información de {paisActual}</p>
                  </div>
                </div>
                </>
            )
}