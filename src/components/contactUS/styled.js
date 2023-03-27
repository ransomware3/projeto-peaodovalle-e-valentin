import styled from "styled-components"

export const AlignLimiter = styled.section`
    display: flex;
    width: 100%;
    height: 670px;
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
    align-items: center;

    @media(max-width: 1000px){
        text-align: center;
    }
`

export const DivContact = styled.div`
    width: 70%;
    height: 300px;
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    margin-top: 50px;
`