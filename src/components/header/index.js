import { NavLink } from 'react-router-dom'
import Logo from '../../images/logo.png'
import './class-names.css'
import {
    HeaderTag,
    ImgLogo,
    Nav,
    Ul,
    Li,
    Limiter,
    HambNav,
    HambUl,
    InputCheck,
    NavMobList
} from './styled'

const Header = () => {

    let activeStyle = {
        color: '#c66417',
    }

    return (
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
                    <NavMob/>
                </Limiter>
            </HeaderTag>
        </>
    )
}

const NavMob = () => {

    let activeStyle = {
        color: '#c66417',
    }

    return (
        <NavMobList>
            <InputCheck type="checkbox" id="menu-hamburguer"></InputCheck>

            <label htmlFor="menu-hamburguer">
                <div class="menu">
                    <span class="hamburguer"></span>
                </div>
            </label>

            <HambNav className='nav-mob'>
                <HambUl>
                    <Li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/">Início</NavLink></Li>
                    <Li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/discografia">Discografia</NavLink></Li>
                    <Li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/biografia">Biografia</NavLink></Li>
                    <Li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/contato">Contato</NavLink></Li>
                </HambUl>
            </HambNav>
        </NavMobList>
    )
}

export { Header }