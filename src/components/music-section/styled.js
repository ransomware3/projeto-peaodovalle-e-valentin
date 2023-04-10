import styled from "styled-components"
import './class-names.css'
import LandMusic from '../../images/fundo-musicas.jpg'

export const AlignLimiter = styled.section`
    display: flex;
    width: 100%;
    min-height: 800px;
    justify-content: center;
    background-image: url(${LandMusic});
    background-position: center;
    background-attachment: fixed;
`

export const SectionLimiter = styled.div`
    width: 75%;
    max-width: 1400px;
    padding: 60px 0;
    display: flex;
    flex-flow: column wrap;

    @media(max-width: 1519px){
        text-align: center;
    }
`

export const OpacityMusic = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
`

export const Ul = styled.ul`
    width: 100%;
    padding-bottom: 80px;
    // border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    // margin-bottom: 80px;
    gap: 60px;
`

export const ContainerMusic = styled.div`
    width: 100%;
    padding-bottom: 80px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 80px;
`

export const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const Anchor = styled.a`
    width: 300px;
    height: 300px;
    display: flex;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 10px;

    @media(max-width: 1839px){
        width: 280px;
        height: 280px;
    }

    @media(max-width: 1733px){
        width: 260px;
        height: 260px;
    }

    @media(max-width: 1627px){
        width: 240px;
        height: 240px;
    }

    @media(max-width: 1519px){
        width: 220px;
        height: 220px;
    }

    @media(max-width: 1413px){
        width: 200px;
        height: 200px;
    }

    @media(max-width: 1307px){
        width: 180px;
        height: 180px;
    }
`

export const H2 = styled.h2`
    margin-bottom: 50px;
`

export const DivIframe = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 20px;
`

export const P = styled.p`
    font-size: 14px;
`