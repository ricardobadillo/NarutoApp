import React, { useMemo } from 'react';
import { getNinjaByClass } from '../../selectors/getNinjaByClass';
import { NinjaCard } from './NinjaCard';
import styled from 'styled-components';


const ContenedorCard = styled.div`
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(3, 32%);

    @media screen and (max-width: 1080px){
        grid-template-columns: repeat(2, 47%);
        grid-gap: 1.2rem;
    }
`;

export const NinjaList = ({Class}) => {

    const ninjas = useMemo(() => getNinjaByClass(Class), [Class])

    return (
        <ContenedorCard>
            {
                ninjas.map(ninja => (
                    <NinjaCard key={ninja.id}
                        {...ninja}
                    />
                ))
            }
        </ContenedorCard>
    )
}

export default NinjaList;