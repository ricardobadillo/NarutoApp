import {ninjas} from '../data/Ninjas';

export const getNinjaByName = (name = '') => {

    if (name === ''){
        return [];
    }

    name = name.toLocaleLowerCase();
    return ninjas.filter(ninja => ninja.name.toLocaleLowerCase().includes(name));
}
