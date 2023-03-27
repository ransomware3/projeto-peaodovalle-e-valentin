import styled from "styled-components"
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { FaSpotify } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import { FaDeezer } from 'react-icons/fa'
import Wood from '../../images/wood-3.jpg'

export const Section = styled.section`
    width: 100%;
    height: 400px;
    background-image: url(${Wood});
    background-size: cover;
    background-repeat: no-repeat;
`

export const Opacity = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
`

export const UlSocial = styled.ul`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 150px;
`

export const Anchor = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const H2 = styled.h2`
    font-size: 35px;
`

export const Instagram = styled(BsInstagram)`
    font-size: 37px;
    color: #c62e90;
    margin-bottom: 15px;
`

export const Facebook = styled(BsFacebook)`
    font-size: 40px;
    color: #1772e9;
    margin-bottom: 15px;
`

export const Spotify = styled(FaSpotify)`
    font-size: 40px;
    color: #1dd05d;
    margin-bottom: 15px;
`

export const Youtube = styled(BsYoutube)`
    font-size: 45px;
    color: #f70000;
    margin-bottom: 15px;
`

export const Deezer = styled(FaDeezer)`
    font-size: 45px;
    color: #fff;
    margin-bottom: 15px;
`