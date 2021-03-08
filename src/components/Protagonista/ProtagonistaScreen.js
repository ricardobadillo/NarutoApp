import React from 'react';
import { NinjaList } from '../Ninjas/NinjaList';

export const ProtagonistaScreen = () => {
    return (
        <>
            <h1>Protagonistas</h1>
            <hr/>
            <NinjaList Class={"Protagonista"}/>
        </>
    )
}