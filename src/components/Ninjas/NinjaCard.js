import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const DivCard = styled.div`
    background-color: rgba(255, 255, 255, 0.904);
    border: 1px solid lightgray;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    flex-direction: row;
`;

const DivImagen = styled.div`
    flex: 0 0 50%;
`;

const DivTexto = styled.div`
    flex: 0 0 50%;
    margin-left: .3rem;
    margin-right: .2rem;
    margin-top: .2rem;
`;

const Imagen = styled.img`
    width: 100%;
`;

const H5 = styled.h5`
    font-size: 1.4rem;

    @media screen and (max-width: 768px){
        font-size: .8rem;
    }
`;

const P = styled.p`
    font-size: .8rem;
    margin: .4rem;

    @media screen and (max-width: 768px){
        font-size: .6rem;
        margin: .1rem;
        margin-right: .4rem;
    }
`;

const Small = styled.small`
    font-weight: bold;
`;

export const NinjaCard = ({id, name, village, techniques}) => {
    return (
        <DivCard className="animate__animated animate__fadeIn">
            <DivImagen>
                <Imagen src={`./assets/Naruto/${id}.jpg`} alt={name}/>
            </DivImagen>
            
            <DivTexto>
                <H5>{name}</H5> 
                <P>
                    {village}
                </P>
                
                <P>
                    Técnica: <Small>{techniques}</Small>
                </P>

                <P>
                    <Link to={`./Ninja/${id}`}>
                        Más...
                    </Link>
                </P>
            </DivTexto>
        </DivCard>
    )
}
