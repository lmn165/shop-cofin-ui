import React, { useEffect } from "react";
import styled from 'styled-components'
/* global kakao */
const { kakao } = window;

const ConfinMap = () => {
  useEffect(() => {
    let mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
      center: new kakao.maps.LatLng(37.499400, 127.029015), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };
    
    let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
    // 마커가 표시될 위치입니다 
    let markerPosition  = new kakao.maps.LatLng(37.499400, 127.029015); 
    
    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
      position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
      console.log("loading kakaomap");
    }, []);

  return (
    <MapDiv id="map"></MapDiv>
  );      
        
};

export default ConfinMap

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