import {
    AlignLimiter,
    SectionLimiter,
    DivContact,
    Opacity
} from './styled'

const ContactUS = () => {
    return(
        <>
            <AlignLimiter>
                <Opacity>
                    <SectionLimiter>
                        <h1>Contato</h1>
                        <DivContact>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit amet</p>
                        </DivContact>
                    </SectionLimiter>
                </Opacity>
            </AlignLimiter>
        </>
    )
}

export { ContactUS }