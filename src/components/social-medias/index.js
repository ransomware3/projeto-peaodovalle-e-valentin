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
                        <li><Anchor target='_blank' rel="noopener noreferrer" href='https://www.google.com/'><Instagram/>Instagram</Anchor></li>
                        <li><Anchor target='_blank' rel="noopener noreferrer" href='https://www.google.com/'><Facebook/>Facebook</Anchor></li>
                        <li><Anchor target='_blank' rel="noopener noreferrer" href='https://www.google.com/'><Spotify/>Spotify</Anchor></li>
                        <li><Anchor target='_blank' rel="noopener noreferrer" href='https://www.google.com/'><Youtube/>YouTube</Anchor></li>
                        <li><Anchor target='_blank' rel="noopener noreferrer" href='https://www.google.com/'><Deezer/>Deezer</Anchor></li>
                    </UlSocial>
                </Opacity>
            </Section>
        </>
    )
}

export { Medias }