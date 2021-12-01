import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import CallOut from "../../ReusebleComponent/CallOut";
import MapView, { Marker, Callout } from "react-native-maps";

const Map = ({data}) => {
  //https://github.com/react-native-maps/react-native-maps
  //https://reactnative.dev/docs/0.63/geolocation

  const myLong = data.longitude;
  const myLati = data.latitude;

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: myLati,
        longitude: myLong,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}
      showsUserLocation={true}
    >
      <Marker
        coordinate={{
          latitude: myLati,
          longitude: myLong
        }}
        //   title="My Location"
        //   description="this is my room"
          identifier="Hotel"
      >
        <Callout tooltip={true}>
          <CallOut data={data}/>
        </Callout>
      </Marker>
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
