'use client';

import React, { use } from 'react';
import { useState, useEffect } from 'react';
import Miniatura from '../miniatura/miniatura';
import ModuloBusquedaStyle from './moduloBusqueda.module.css';


//redux
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { guardarContinente, guardarCiudad, guardarPais } from '@/redux/features/memoriaSlice';


export default function ModuloBusqueda(){

    
    const data = useAppSelector((state) => state.memoriaReducer.destinos)
    const continenteActual = useAppSelector((state) => state.memoriaReducer.currentContinente)
    const paisActual = useAppSelector((state) => state.memoriaReducer.currentPais)
    const ciudadActual = useAppSelector((state) => state.memoriaReducer.currentCiudad)
    const dispatch = useAppDispatch();


    let nuevaLista = data.filter((i : any) => i.continente == continenteActual)
    let arrayConRepetidos: any = []
    nuevaLista.filter((i : any) =>{  arrayConRepetidos.push(i.pais)} )
    
    const arrayUnico = arrayConRepetidos.reduce((unicos: any, objeto: any) => {
    const existe = unicos.some((item: any )=> JSON.stringify(item) === JSON.stringify(objeto));
    if (!existe) {
    unicos.push(objeto);
    }
    return unicos;
    }, []);


    let filtrados = data.filter( (item: any )=> item.continente.includes(continenteActual) && item.pais.includes(paisActual))

    

    









    const continentes = [ "Africa", "América", "Asia", "Europa", "Oceania"]
    

    return( 


        <>
        <div className={ModuloBusquedaStyle.continentes}>
            {continentes.map((continente: any) => (
                   <div onClick={()=> dispatch(guardarContinente(continente))} key={`visita ${continente} con desplora`} className={ModuloBusquedaStyle.miniatura}>
                    <img src={`https://desplora.com/medien/iconosDesplora/${continente}.webp`} />
                    <p>{continente}</p>
                   </div>
                ))}
           
                </div>


                <div className={`${arrayUnico.length > 0? ModuloBusquedaStyle.paises : ModuloBusquedaStyle.nopaises}`}>
                {arrayUnico.map((pais: any) => (
                   <div onClick={()=> dispatch(guardarPais(pais))} key={`visita ${pais} con desplora`} className={ModuloBusquedaStyle.miniatura}>
                    <img src={`https://desplora.com/medien/iconosDesplora/${pais}.webp`} />
                    <p>{pais}</p>
                   </div>
                ))}
                <p className={`${arrayUnico.length > 0 ? ModuloBusquedaStyle.none : ModuloBusquedaStyle.noDestinos}`} >Pronto podrás ver nuestras experiencias en: {continenteActual}</p>
                </div>

                

                <div className={ModuloBusquedaStyle.ciudades}>
                {filtrados.map((destino: any) => (
                  <Miniatura onClick={()=> dispatch(guardarCiudad(destino))} key={`viajar a ${destino.titulo}, informacion en desplora`} imagen={destino.imagenPrincipal} titulo={destino.titulo} />
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