import {
    AlignLimiter,
    SectionLimiter,
    UlContact,
    Opacity,
    Iframe,
    Anchor
} from './styled'

const Presentations = () => {
    return (
        <>
            <AlignLimiter>
                <Opacity>
                    <SectionLimiter>
                        <h1>Apresentações na TV</h1>
                        <UlContact>
                            <li>
                                <Iframe width="560" height="315" src="https://www.youtube.com/embed/m0cdvUxJy5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
                            </li>
                            <li>
                                <Iframe width="560" height="315" src="https://www.youtube.com/embed/xGaAArJQUGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
                            </li>
                            <li>
                                <Iframe width="560" height="315" src="https://www.youtube.com/embed/HBRF3Ip7yPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
                            </li>
                            <li>
                                <Iframe width="560" height="315" src="https://www.youtube.com/embed/M_MYFhQSyco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
                            </li>
                        </UlContact>
                        <Anchor target='_blank' rel="noopener noreferrer" href='https://www.youtube.com/@PeaodovalleeValentin11'>Veja mais em nosso canal do Youtube</Anchor>
                    </SectionLimiter>
                </Opacity>
            </AlignLimiter>
        </>
    )
}

export { Presentations }