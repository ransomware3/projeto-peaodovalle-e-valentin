import styled from "styled-components"

export const HeaderTag = styled.header`
    width: 100%;
    background-color: #111;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
`

export const Limiter = styled.div`
    width: 85%;
    max-width: 1400px;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
`

export const ImgLogo = styled.img`
    width: 80%;

    @media(max-width: 1000px){
        width: 70%;
    }
`

export const Nav = styled.nav`
    width: 30%;

    @media(max-width: 1000px){
        display: none;
    }
`

export const Ul = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
`

export const Li = styled.li`
    //
`

export const HambNav = styled.nav`
    width: 200px;
    height: 250px;
    background-color: #000;
    position: absolute;
    right: 0;
    top: 60px;
    display: none;
    justify-content: center;
    border: 1px solid #c66417;
    border-radius: 10px;
`

export const HambUl = styled.ul`
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 35px;
`

export const InputCheck = styled.input`
    display: none;
`

export const NavMobList = styled.div`
    display: none;
    position: relative;

    @media(max-width: 1000px){
        display: flex;
    }
`