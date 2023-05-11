import styled from "styled-components"
import Background from '../../images/fundo-contato.jpg'

export const AlignLimiter = styled.section`
    display: flex;
    width: 100%;
    height: 687px;
    justify-content: center;
    background-image: url(${Background});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding-bottom: 40px;
`

export const SectionLimiter = styled.div`
    width: 75%;
    max-width: 1400px;
    padding-top: 60px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    @media(max-width: 1000px){
        text-align: center;
    }
`

export const UlContact = styled.ul`
    width: 70%;
    height: 300px;
    display: flex;
    align-items: center;
    gap: 70px;
    flex-direction: column;
`

export const Opacity = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 687px;
    background-color: rgba(0, 0, 0, 0.9);
    padding-bottom: 40px; 
`

export const H1 = styled.h1`
    margin-bottom: 90px;
`

export const Anchor = styled.a`
    font-size: 20px;
    transition: .2s;

    &:hover{
        color: #c66417;
    }

    @media(max-width: 580px){
        font-size: 16px;
    }
`