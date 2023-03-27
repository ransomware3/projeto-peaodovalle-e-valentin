import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { BannerDefault } from "../components/banner-home"
import { Medias } from "../components/social-medias"
import { VideoHome } from "../components/video-home"

const Home = () => {
    return(
        <>
            <Header/>
            <BannerDefault/>
            <Medias/>
            <VideoHome/>
            <Footer/>
        </>
    )
}

export { Home }