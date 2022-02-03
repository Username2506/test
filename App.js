import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red'
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    }
  });

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default App;
