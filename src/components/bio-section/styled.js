import styled from "styled-components"
import Background from '../../images/fundo-sobre.jpg'

export const AlignLimiter = styled.section`
    width: 100%;
    height: 100%;
    min-height: 687px;
    background-image: url(${Background});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`

export const SectionLimiter = styled.div`
    width: 75%;
    max-width: 1200px;
    padding-top: 60px;

    // @media(max-width: 1000px){
    //     text-align: center;
    // }
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
    margin-bottom: 30px;
`

export const P = styled.p`
    margin-bottom: 80px;
    line-height: 25px;
`