import React, {component} from 'react';
import styled from 'styled-components';

const Header = () => (
    <Container>
        <Element>
            <ShortCut>로그인/회원가입</ShortCut>
            <Logo>
            <img
                width="100%"
                height="100%"
                src="https://png.pngtree.com/png-clipart/20200401/original/pngtree-stop-corona-virus-design-png-image_5338713.jpg"
                alt="logo"/>
            </Logo>
            <Search><h1>Cofin</h1></Search>
        </Element>
    </Container>
)

export default Header

const Container = styled.div`
    width: 100%;
    height: 110px;
    border-bottom: 1px solid #d1d8e4;
`

const Element = styled.div`
    margin: 0 auto;
    width: 1080px;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
`

const ShortCut = styled.div`
    order: 1;
    width: 100%;
    height: 20px;
    text-align: right;
    background-color: #f1d73e;
`

const Logo = styled.div`
    order: 2;
    width: 200px;
    height: 90px;
`

const Search = styled.div`
    order: 3;
    width: 880px;
    background-color: #ff3d23cc;
    text-align: center;
    color: antiquewhite;
`