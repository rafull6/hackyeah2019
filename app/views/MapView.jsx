import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import HomeButton from "../components/HomeButton";
import microphone from '../assets/microphone.svg';
import location from '../assets/location.svg';

const HomeView = () => {

  useEffect(() => {
    generateMap();
  }, [])

  const generateMap = () => {
    document.addEventListener("deviceready", function () {
      console.log("TCL: generateMap -> generateMap")
      var options = {
        camera: {
          target: { lat: 1, lng: 1 },
          zoom: 19
        }
      };
      var div = document.getElementById("map_canvas");
      var map = plugin.google.maps.Map.getMap(div, options);
      // var button = document.getElementById("button");

      // button.addEventListener("click", function () {

      //   map.animateCamera({
      //     target: { lat: 37.422359, lng: -122.084344 },
      //     zoom: 17,
      //     tilt: 60,
      //     bearing: 140,
      //     duration: 5000
      //   });

      //   var marker = map.addMarker({
      //     position: { lat: 37.422359, lng: -122.084344 },
      //     title: "Welcome to \n" +
      //       "Cordova GoogleMaps plugin for iOS and Android",
      //     snippet: "This plugin is awesome!",
      //     animation: plugin.google.maps.Animation.BOUNCE
      //   });

      //   marker.showInfoWindow();

      //   marker.on(plugin.google.maps.event.INFO_CLICK, function () {
      //     alert("Hello world!");
      //   });
      // });
    })
  };


  return <div className="map_canvas" style={{ width: '300px', height: '300px', display: 'block' }}></div>
};

export default HomeView;
