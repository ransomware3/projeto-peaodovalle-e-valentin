import styled from "styled-components"
import Land from '../../images/landscape.jpg'

export const Section = styled.section`
    width: 100%;
    height: 600px;
    background-image: url(${Land});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`

export const Opacity = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
`

export const Iframe = styled.iframe`
    transform: scale(1.3);
    border-radius: 10px;
    border: none;
    z-index: 3;
`