import {
    AlignLimiter,
    SectionLimiter,
    UlContact,
    Opacity,
    H1,
    Anchor
} from './styled'

const ContactUS = () => {
    return (
        <>
            <AlignLimiter>
                <Opacity>
                    <SectionLimiter>
                        <H1>Contato</H1>
                        <UlContact>
                            <li><Anchor target='_blank' rel="noopener noreferrer" href='mailto:allegrettodigital@gmail.com'>allegrettodigital@gmail.com</Anchor></li>
                            <li><Anchor target='_blank' rel="noopener noreferrer" href='mailto:peaodovalleevalentinoficial@gmail.com'>contato@peaodovalleevalentin</Anchor></li>
                            <li><Anchor target='_blank' rel="noopener noreferrer" href='tel:11-98816-5363'>(11) 98816-5363</Anchor></li>
                            <li><Anchor target='_blank' rel="noopener noreferrer" href='tel:43-9643-5200'>(43) 9643-5200</Anchor></li>
                        </UlContact>
                    </SectionLimiter>
                </Opacity>
            </AlignLimiter>
        </>
    )
}

export { ContactUS }