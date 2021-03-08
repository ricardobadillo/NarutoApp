import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getNinjaById } from '../../selectors/getNinjaById';
import styled from '@emotion/styled';

const Div = styled.div`
    display: flex;
    flex-direction: row;
`;

const DivImagen = styled.div`
    flex: 0 0 40%;
    padding-right: 2rem;

    @media screen and (max-width: 768px){
        flex: 0 0 50%;
        padding-right: 1rem;
    }
`;

const DivTexto = styled.div`
    background-color: rgba(255, 255, 255, 0.904);
    border: 1px solid lightgray;
    border-radius: 10px;
    flex: 0 0 50%;
    padding-top: .7rem;
`;

const Imagen = styled.img`
    width: 100%;
`;

const H3 = styled.h3`
    padding-left: 1rem;
`;

const Parrafo = styled.p`
    margin-left: 2rem;
    margin-right: 1rem;

    @media screen and (max-width: 768px){
        font-size: .8rem;
        margin-left: 1.5rem;
    }
`;

const Button = styled.button`
    background-color: rgba(255, 255, 255, 0.904);
    border: 3px solid lightgray;
    border-radius: 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-left: 2rem;
    margin-bottom: 1rem;

    &:hover{
        background-color: lightgray;
        color: white;
    }

    @media screen and (max-width:768px){
        margin-left: 1.5rem;
    }
`;

export const NinjaScreen = ({history}) => {

    const {ninjaId} = useParams();

    const ninja = useMemo(() => getNinjaById(ninjaId), [ninjaId])

    if (!ninja){
        return <Redirect to="/" />
    }

    const handleReturn = () => {

        if (history.length <=2){
            history.push('/');
        } else{
            history.goBack();
        }
    }

    const {id, name, village, techniques, phrase} = ninja;

    return (
        <>
            <h1>Personajes de Naruto</h1>
            <hr/>
            <Div>
                <DivImagen>
                    <Imagen src={`/public/assets/Naruto/${id}.jpg`} className="animate__animated animate__fadeInLeft" alt={name} />
                </DivImagen>

                <DivTexto>
                    <H3>{name}</H3>
                    <hr/>
                    <div>
                        <Parrafo>
                            <b>Aldea:</b> {village}
                        </Parrafo>
                        <Parrafo>
                            <b>Técnica:</b> {techniques}
                        </Parrafo>
                        <Parrafo>
                            <b>Frase:</b> {phrase}
                        </Parrafo>
                        <Button
                            onClick={handleReturn}
                        >Return</Button>
                    </div>
                </DivTexto>
            </Div>
        </>
    )
}

export default NinjaScreen;