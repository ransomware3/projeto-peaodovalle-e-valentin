import styled from "styled-components"
import Background from '../../images/fundo-contato.jpg'

export const AlignLimiter = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    background-image: url(${Background});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
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
    width: 100%;
    display: flex;
    gap: 32px;
    justify-content: center;
    flex-flow: row wrap;
    margin: 50px 0;
`

export const Opacity = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 687px;
    background-color: rgba(0, 0, 0, 0.9);
    padding-bottom: 80px; 
`

export const Iframe = styled.iframe`
    border-radius: 10px;
    border: none;
    z-index: 3;

    @media(max-width: 768px){
        transform: scale(0.9);
    }

    @media(max-width: 590px){
        transform: scale(0.8);
    }
`

export const Anchor = styled.a`
    transition: .2s;

    &:hover{
        color: #c66417;
        text-decoration: underline;
    }
`