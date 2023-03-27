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

    // &::after{
    //     content: "";
    //     width: 100%;
    //     height: 100%;
    //     background: -moz-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100%);
    //     background: linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 40%, #000 100%);
    //     position: absolute;
    //     top: 0;
    //     right: 0;
    // }
`

export const Opacity = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(34, 34, 34, 0.8);
`

export const Iframe = styled.iframe`
    transform: scale(1.5);
    border-radius: 10px;
    border: none;
    z-index: 3;
`