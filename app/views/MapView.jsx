import React from "react";
import styled from "styled-components";
import MapImg from '../assets/map.png';
import Marker from '../assets/marker.png';
import Locate from '../assets/locate.svg';

const MapWrapper = styled.div`
width: 100%;
height: 100%;
background: url(${MapImg}) no-repeat center center fixed; 
background-size: cover;
position: absolute;
top: 53px;
left: 0;
`;

const SearchWrapper = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 10px 10px 20px #00000017;
  border: 1px solid #F4F3F4;
  border-radius: 5px;
  opacity: 1;
  width: 90%;
  display: block;
  position: relative;
  top: 80px;
  display: flex;
  justify-content: space-between;
  left: 20px;
`;

const SearchTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const SearchTitle = styled.div`
  color: #D81E05;
  font-size: 20px;
`;
const SearchSubtitle = styled.div`
  font-size: 14px;
  color: #424242;
  margin-bottom: 5px;
`;

const SearchButton = styled.img`
  width: 32px;
  height: 100%;
  background-color: #D81E05;
  padding: 22px;
  border-radius: 5px;
`;

const MarkerWrapper = styled.img`
  position: absolute;
  width: 32px;
  top: 253px;
  left: 140px;
`;

const MapView = () => {
  return <MapWrapper>
    <SearchWrapper>
      <SearchTextWrapper>
        <SearchSubtitle>Najbliższy szpital</SearchSubtitle>
        <SearchTitle>Tokarnia 328</SearchTitle>
      </SearchTextWrapper>
      <SearchButton src={Locate}></SearchButton>
    </SearchWrapper>
    <MarkerWrapper src={Marker}></MarkerWrapper>
  </MapWrapper>
};

export default MapView;
