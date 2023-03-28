import {
    SectionLimiter,
    AlignLimiter,
    Ul,
    Li,
    Anchor,
    DivIframe,
    H2,
    OpacityMusic,
    P
} from './styled'

const Music = () => {
    return (
        <>
            <AlignLimiter>
                <OpacityMusic>
                    <SectionLimiter>
                        <H2>Álbuns em Destaque</H2>
                        <Ul>
                            <Li><Anchor className='lagrimas' target='_blank' rel="noopener noreferrer" href='https://open.spotify.com/album/2KqeafMeMpFEAvQ3xUqGq5?si=PkqacGIPTUmS5nAUawjITw'></Anchor><a target='_blank' rel="noopener noreferrer" href='https://open.spotify.com/album/2KqeafMeMpFEAvQ3xUqGq5?si=PkqacGIPTUmS5nAUawjITw'>Lágrimas na Areia</a></Li>

                            <Li><Anchor className='saudade' target='_blank' rel="noopener noreferrer" href='https://open.spotify.com/album/3i0zOijZu5w3WbSzV1GI66?si=XvEPkJjYSDW3BAzPEF3Lbg'></Anchor><a target='_blank' rel="noopener noreferrer" href='https://open.spotify.com/album/3i0zOijZu5w3WbSzV1GI66?si=XvEPkJjYSDW3BAzPEF3Lbg'>A Saudade é Constante</a></Li>

                            <Li><Anchor className='homem' target='_blank' rel="noopener noreferrer" href='https://open.spotify.com/album/0CVns18XPKnX0wl0LrfGNL?si=WQaJSGnMSGOA_tRJhxGiOg'></Anchor><a target='_blank' rel="noopener noreferrer" href='https://open.spotify.com/album/0CVns18XPKnX0wl0LrfGNL?si=WQaJSGnMSGOA_tRJhxGiOg'>Homem Lata</a></Li>

                            <Li><Anchor className='peao' target='_blank' rel="noopener noreferrer" href='https://open.spotify.com/album/7bx0rbcKIB3Q8fMe6sHoFo?si=Wp2NzUdoTUGtn8zhuGcr-Q'></Anchor><a target='_blank' rel="noopener noreferrer" href='https://open.spotify.com/album/7bx0rbcKIB3Q8fMe6sHoFo?si=Wp2NzUdoTUGtn8zhuGcr-Q'>Peão de Cristo</a></Li>
                        </Ul>
                        <H2>Maiores Sucessos</H2>

                        <DivIframe>
                            <iframe title='Maiores sucessos Peão do Valle e Valentin' style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/2Rk6hvbIB4bIG8Jv1kUfFK?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </DivIframe>
                        <P>* Regule o volume pelo seu dispositivo.</P>
                    </SectionLimiter>
                </OpacityMusic>
            </AlignLimiter>
        </>
    )
}

export { Music }