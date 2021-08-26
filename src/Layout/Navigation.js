import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = () => (
<Nav class="navi">
    <NavList>
        <NavItem><Link to='/home'>홈</Link></NavItem>
    </NavList>
</Nav>
)

export default Navigation

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1d8e4;
`

const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
    padding: 0 auto;
`

const NavItem = styled.li`
    width: 60px;
    margin-left: 14px;
    margin-top: 5px;
    display: flex;
    font-size: 1.3vh;
`