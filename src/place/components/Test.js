import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Test = () => {

    let flag = false;
    
    const handClick = () => {
        flag = !flag;
        console.log(flag)
    }
    const formAct = (data) => {
        console.log(data)
    }

    return(<>
    <BtnBox>
        <form action={formAct} method="get">
            <label htmlFor="sel1"><input type="checkbox" id="sel1" value="1"/>1번</label>
            <label htmlFor="sel2"><input type="checkbox" id="sel2" value="2"/>2번</label>
            <label htmlFor="sel3"><input type="checkbox" id="sel3" value="3"/>3번</label>
            <input type="submit" />
        </form>
        {/* <button><Link to='cofin-map' style={{textDecoration:'none'}}>Test 버튼</Link></button> */}
        {/* <button onClick={handClick}> */}
            {/* 토글버튼 */}
        {/* </button> */}
    </BtnBox>
    <div></div>
    </>)
}

export default Test

const BtnBox = styled.div`
    text-align: center;
`
