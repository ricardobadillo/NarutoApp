import {ninjas} from '../data/Ninjas';

export const getNinjaByClass = (type) => {

    const validarClass = ['Protagonista', 'Secundario', 'Antagonista'];

    if (!validarClass.includes(type)){
        throw Error(`class "${type}" no es correcto`);
    }

    return ninjas.filter(ninja => ninja.type === type);
}