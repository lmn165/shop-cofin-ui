import React from "react";
import styled from 'styled-components'

const LocalMapInfoBar = () => {
  return (
    <InfoUl>
        <li>
        <LabelDiv><InfoLabel>진료소 A</InfoLabel></LabelDiv>
        <InfoDiv></InfoDiv>
        </li>
        <li>
        <LabelDiv><InfoLabel>진료소 B</InfoLabel></LabelDiv>
        </li>
        <li>
        <LabelDiv><InfoLabel>진료소 C</InfoLabel></LabelDiv>
        </li>
        <li>
        <LabelDiv><InfoLabel>진료소 D</InfoLabel></LabelDiv>
        </li>
    </InfoUl>
  );      
};

export default LocalMapInfoBar

const LayoutDiv = styled.div`
  width: 100%;
`

const MapDiv = styled.div`
min-width: 520px;
width: 80%;
height: 720px;
float: left
`
const LeftSideDiv = styled.div`
float: left;
height: 720px;
min-width: 140px;
width: 8%
`

const RightSideDiv = styled.div`
float: left;
height: 720px;
min-width: 140px;
width: 12%
`

const SelectionUl = styled.ul`
  margin-top: 0;
  list-style: none;
  text-align: center;
  padding-left: 0;
`

const Selection = styled.select`
  width: 130px;
  text-align-last: center;
`

const SelectionLi = styled.li`
  margin-top: 20px;
`

const InfoUl = styled.ul`
margin-top: 0;
list-style: none;
padding-left: 8px;
`

const LabelDiv = styled.div`
  width: 95%;
  height: 50px;
  border: solid 1px black;
  text-align: center;
`
  
  const InfoDiv = styled.div`
  width: 95%;
  height: 400px;
  border: solid 1px black;
  margin: 0;
`

const InfoLabel = styled.label`
  display: inline-block;
  font-size: 1.5em;
  font-weight: 600;
  margin: 5%;
`
