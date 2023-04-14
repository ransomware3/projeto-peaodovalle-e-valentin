import styled from "styled-components"
import Banner from '../../images/banner2.png'
import Wood from '../../images/wood.jpg'
import './index.css'

export const Section = styled.section`
    width: 100%;
    height: 700px;
    background-color: #222;
    background-image: url(${Wood});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;

    @media(max-width: 750px){
        max-height: 600px;
    }

    @media(max-width: 490px){
        max-height: 500px;
    }
`

export const SectionImg = styled.div`
    width: 80%;
    max-width: 1300px;
    height: 100%;
    background-image: url(${Banner});
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media(max-width: 1360px){
        width: 90%;
    }

    @media(max-width: 1200px){
        width: 80%;
    }

    @media(max-width: 905px){
        background-position: bottom;
    }

    @media(max-width: 750px){
        justify-content: center;
        align-items: flex-start;
    }
`

export const H1 = styled.h1`
    text-shadow: -3px 0 black, 0 3px black, 3px 0 black, 0 -3px black;
    font-size: 55px;
    color: #c76e02;
    font-family: 'Rio Grande', sans-serif;
    letter-spacing: 3px;

    
    @media(max-width: 750px){
        font-size: 35px;
        text-align: center;
        margin-top: 10%;
    }
`