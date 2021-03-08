import {ninjas} from '../data/Ninjas';

export const getNinjaById = (id) => {

    return ninjas.find(ninja => ninja.id === id);
}