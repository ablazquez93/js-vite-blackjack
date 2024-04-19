
import _ from 'underscore'


/**
 * 
 * @param {Array<String>} tiposDeCarta Ejemplo:  ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>}
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    let deck =[]

    if (!tiposDeCarta || tiposDeCarta.length ===0 )
        throw new Error('tiposDeCarta es obligatorio');

        if (!tiposEspeciales || tiposEspeciales.length ===0 )
        throw new Error('tiposDeCarta es obligatorio')

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}