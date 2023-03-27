import { 
    Section,
    Iframe,
    Opacity 
} from './styled'

const VideoHome = () => {
    return(
        <>
            <Section>
                <Opacity>
                    <Iframe width="560" height="315" src="https://www.youtube.com/embed/mpfDvFjQ_Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
                </Opacity>
            </Section>
        </>
    )
}

export { VideoHome }