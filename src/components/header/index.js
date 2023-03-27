import { NavLink } from 'react-router-dom'
import Logo from '../../images/logo.png'
import './class-names.css'
import {
    HeaderTag,
    ImgLogo,
    Nav,
    Ul,
    Li,
    Limiter
} from './styled'

const Header = () => {

    let activeStyle = {
        color: '#c66417',
    }

    return(
        <>
            <HeaderTag>
                <Limiter>
                    <a href='/'><ImgLogo src={Logo}></ImgLogo></a>
                    <Nav>
                        <Ul>
                            <Li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/">Início</NavLink></Li>
                            <Li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/discografia">Discografia</NavLink></Li>
                            <Li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/biografia">Biografia</NavLink></Li>
                            <Li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/contato">Contato</NavLink></Li>
                        </Ul>
                    </Nav>
                </Limiter>
            </HeaderTag>
        </>
    )
}

export { Header }