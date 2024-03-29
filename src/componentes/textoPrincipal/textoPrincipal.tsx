import TP from "./textoPrincipal.module.css";

function Slider({arrayToMap}){
    return (
        <div className={TP.slider} >
            {arrayToMap.map( (item, index) => (
                <img key={index} className={TP.imagen} title={item} loading="lazy" alt={item} src={`https://desplora.com/medien/${item}.webp`} />
            ))}
        </div>
    )

}

export default function TextoPrincipal({contenidoPayload, modus}) {
    return (
        <div className={`${modus ? TP.light : TP.dark}`}>
            {
            
            contenidoPayload.map( (item, index) => (

                item.length < 25 && Array.isArray(item) && item[0] != "_" ?
                <Slider key={index} arrayToMap={item} />           
                     
                :

                 item[0] == "_" ? <p className={TP.subtitulo}><strong>{item.substring(1)}</strong></p> :
                 
                 
                 <p className={TP.textoNormal}>{item}</p>
            ))}
        </div>
    );
}
