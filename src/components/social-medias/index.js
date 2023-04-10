import {
    Section,
    UlSocial,
    Instagram,
    Facebook,
    Spotify,
    Youtube,
    Deezer,
    Anchor,
    H2,
    Opacity
} from './styled'

const Medias = () => {
    return(
        <>
            <Section>
                <Opacity>
                    <H2>Nossas redes</H2>
                    <UlSocial>
                        <li><Anchor target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/peaodovalle/'><Instagram/>Instagram</Anchor></li>
                        <li><Anchor target='_blank' rel="noopener noreferrer" href='https://web.facebook.com/Peaodovalleevalentin/?locale=pt_BR&_rdc=1&_rdr'><Facebook/>Facebook</Anchor></li>
                        <li><Anchor target='_blank' rel="noopener noreferrer" href='https://open.spotify.com/artist/2L70c8ThI3mpW3YisydTCf?si=ZoR2c7sKRbSLzU13HO8Qcg'><Spotify/>Spotify</Anchor></li>
                        <li><Anchor target='_blank' rel="noopener noreferrer" href='https://www.youtube.com/@PeaodovalleeValentin11'><Youtube/>YouTube</Anchor></li>
                        <li><Anchor target='_blank' rel="noopener noreferrer" href='https://deezer.page.link/R3dteTZdWyXQ1X6RA'><Deezer/>Deezer</Anchor></li>
                    </UlSocial>
                </Opacity>
            </Section>
        </>
    )
}

export { Medias }