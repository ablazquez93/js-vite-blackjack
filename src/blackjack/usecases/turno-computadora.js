// turno de la computadora
import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck 
 * @param {Htmlelement} puntosHTML
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora,deck ) => {

    if(!puntosMinimos) throw new Error ('puntos minimos son necesarios')
    if(!puntosHTML) throw new Error ('puntos HTML son necesarios')

    let puntosComputadora = 0


    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append(imgCarta)

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}