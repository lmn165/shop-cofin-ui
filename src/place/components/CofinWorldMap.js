import React from 'react'
import { WorldMap } from 'react-svg-worldmap';
import styled from 'styled-components';

const CofinWorldMap = () =>{
    const data =
    [
      { country: "cn", value: 1389618778 }, // china
      { country: "in", value: 1311559204 }, // india
      { country: "us", value: 331883986 },  // united states
      { country: "id", value: 264935824 },  // indonesia
      { country: "pk", value: 210797836 },  // pakistan
      { country: "br", value: 210301591 },  // brazil
      { country: "ng", value: 208679114 },  // nigeria
      { country: "bd", value: 161062905 },  // bangladesh
      { country: "ru", value: 141944641 },  // russia
      { country: "mx", value: 127318112 },   // mexico
      { country: "kr", value: 1 }   // korea
    ]

    const stylingFunction = ({
        countryValue,
        minValue,
        maxValue,
        country,
        color,
      }) => {
        const opacityLevel =
          0.1 + (1.5 * (countryValue - minValue)) / (maxValue - minValue);
        return {
          fill: country === 'US' ? 'blue' : color,
          fillOpacity: opacityLevel,
          stroke: 'green',
          strokeWidth: 1,
          strokeOpacity: 0.2,
          cursor: 'pointer',
        };
      };

    return (<>
        <WorldMapDiv className="App" >
            <WorldMap color="red" title="Top 10 Coronavirus Rates" value-suffix="people" size="xxl" data={data} frame={true} styleFunction={stylingFunction} />
        </WorldMapDiv>
    </>)
}


export default CofinWorldMap;

const WorldMapDiv = styled.div`
  text-align: center;
`