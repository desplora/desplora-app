import portadaStyle from './destinoportada.module.css';


export default function DestinoPortada({ tituloCiudad, region, geozona, imagen} : {tituloCiudad: string, region: string, geozona: string, imagen: string}) {

    return (
        <div className={portadaStyle.contenedor}>
            <h1>{tituloCiudad}</h1>
            <img src={`https://desplora.com/medien/${imagen}.webp`}/>
            
        </div>
    )
}