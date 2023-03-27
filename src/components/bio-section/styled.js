import styled from "styled-components"

export const AlignLimiter = styled.section`
    display: flex;
    width: 100%;
    height: 800px;
    justify-content: center;
    background-color: #222;
    padding-bottom: 40px;
`

export const SectionLimiter = styled.div`
    width: 75%;
    max-width: 1400px;
    padding-top: 60px;
    display: flex;
    flex-flow: column wrap;

    @media(max-width: 1000px){
        text-align: center;
    }
`

export const H1 = styled.h1`
    margin-bottom: 30px;
`

export const P = styled.p`
    margin-bottom: 25px;
`