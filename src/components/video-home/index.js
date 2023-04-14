import {
    Section,
    Iframe,
    Opacity
} from './styled'

const VideoHome = () => {
    return (
        <>
            <Section>
                <Opacity>
                    <Iframe width="560" height="315" src="https://www.youtube.com/embed/8QVP4wusjz8" title="album lagrimas na areia" frameborder="0" allowFullScreen=""></Iframe>
                </Opacity>
            </Section>
        </>
    )
}

export { VideoHome }