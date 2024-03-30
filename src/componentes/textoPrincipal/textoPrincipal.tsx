import textoStyle from "./textoPrincipal.module.css";

/*function Slider({arrayToMap}){
    return (
        <div className={TP.slider} >
            {arrayToMap.map( (item, index) => (
                <img key={index} className={TP.imagen} title={item} loading="lazy" alt={item} src={`https://desplora.com/medien/${item}.webp`} />
            ))}
        </div>
    )

}*/

interface TextoPrincipalProps {
    contenidoPayload: string[];
}

const TextoPrincipal: React.FC<TextoPrincipalProps> = ({ contenidoPayload }) => {
    return (
        <div className={textoStyle.textoprincipal}>
            {
            
            contenidoPayload.map( (item, index) => (

                item.length < 25 && Array.isArray(item) && item[0] != "_" ?
                /*<Slider key={index} arrayToMap={item} />*/  <p key={item + index} >{item}</p>        
                     
                :

                 item[0] == "_" ? <h3 key={item + " subtitulo"} >{item.substring(1)}</h3> :
                 
                 
                 <p key={item + " etxtoPrincipal"} >{item}</p>
            ))}
        </div>
    );
}

export default TextoPrincipal;