import { NavLink } from 'react-router-dom'
import Logo from '../../images/peao-do-valle.png'
import './class-names.css'
import {
    HeaderTag,
    ImgLogo,
    Nav,
    Ul,
    Limiter,
    HambNav,
    HambUl,
    InputCheck,
    NavMobList,
    AnchorLogo
} from './styled'

const Header = () => {

    let activeStyle = {
        color: '#c66417',
    }

    return (
        <>
            <HeaderTag>
                <Limiter>
                    <AnchorLogo href='/'><ImgLogo src={Logo}></ImgLogo></AnchorLogo>
                    <Nav>
                        <Ul>
                            <li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/">Inicio</NavLink></li>
                            <li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/discografia">Discografia</NavLink></li>
                            <li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/apresentacoes">Apresentações</NavLink></li>
                            <li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/biografia">Biografia</NavLink></li>
                            <li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/contato">Contato</NavLink></li>
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
                <div className="menu">
                    <span className="hamburguer"></span>
                </div>
            </label>

            <HambNav className='nav-mob'>
                <HambUl>
                    <li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/">Início</NavLink></li>
                    <li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/discografia">Discografia</NavLink></li>
                    <li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/apresentacoes">Apresentações</NavLink></li>
                    <li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/biografia">Biografia</NavLink></li>
                    <li><NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='nav-link' to="/contato">Contato</NavLink></li>
                </HambUl>
            </HambNav>
        </NavMobList>
    )
}

export { Header }