'use client'

import DestinoPortada from '../../../componentes/destinoportada/destinoportada';
import  { useSelector } from 'react-redux';
import TextoPrincipal from '../../../componentes/textoPrincipal/textoPrincipal';
import GaleriaFotos from '../../../componentes/galeriaFotosSlider/galeriaFotos';

export default function Page({ params} : any) {

    const paramURL = decodeURIComponent(params.ciudad).toLowerCase()

    const destinos = useSelector((state: any) => state.memoriaReducer.destinos); 
    const ciudad = destinos.filter((item: any) => item.titulo.trim().toLowerCase() === paramURL);
    const dame = ciudad[0]
        console.log(ciudad)
    return (
        <div>
            {destinos.length > 1?
            <>
            <DestinoPortada tituloCiudad={dame.titulo} imagen={dame.imagenPrincipal} region={dame.region} geozona={dame.GeoZona} />
            <GaleriaFotos contenidoPayload={dame.galeria} />
            <TextoPrincipal contenidoPayload={dame.texto} />
            <br/>
            <h3>Alojamiento</h3>
            <TextoPrincipal contenidoPayload={dame.Alojamiento} />
            <br/>
            <h3>Recomendaciones</h3>
            <TextoPrincipal contenidoPayload={dame.recomendaciones} />
            <br/>
            <h3>Cosas para hacer</h3>
            <br/>
            <br/>
            <p>publicado con amor el 04.03.2024</p>

            </>
             
             
             
             
             
             
             : <p>loading...</p>}
        </div>
    )
}