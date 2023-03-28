import styled from "styled-components"
import Wood from '../../images/wood-3.jpg'

export const FooterTag = styled.footer`
    width: 100%;
    height: 200px;
    background-image: url(${Wood});
    background-size: cover;
    background-repeat: no-repeat;
`

export const Opacity = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const P = styled.p`
    color: #ccc;

    @media(max-width: 500px){
        font-size: 13px;
    }
`