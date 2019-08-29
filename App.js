import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

// You can import from local files
import ActionButton from './components/ActionButton';
import Colors from './Colors';

export default class App extends React.Component {
  state = {
    fetching: false,
    location: null,
  };

  fetchLocation = () => {
    this.setState({fetching: true}, () => {
      setTimeout(() => {
        fetch('https://ipinfo.io/', {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        })
          .then(response => response.json())
          .then(json => {
            this.setState({location: json})
          })
          .catch(ex => console.error(ex))
          .finally(() => this.setState({fetching: false}));
      }, 1500);
    });
  };

  didTapOkayButton = () => {
    this.fetchLocation();
  };

  didTapClearButton = () => {
    this.setState({location: null});
  };

  render() {
    const messageFromBeyond = this.props.initMessage;
    let message = 'Your location is not set';
    let mapRegion;
    let mapMarker;
    if (this.state.location) {
      const {city, region, loc} = this.state.location;
      message = `You appear to be in ${city}, ${region}`;

      const [latString, lngString] = loc.split(',');
      const latitude = parseFloat(latString);
      const longitude = parseFloat(lngString);
      mapRegion = {
        latitude,
        longitude,
        latitudeDelta: 0.25,
        longitudeDelta: 0.25,
      };

      mapMarker = (
        <Marker coordinate={{latitude, longitude}} description={`${loc}`} />
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40,
            longitude: -97,
            latitudeDelta: 50,
            longitudeDelta: 50,
          }}
          region={mapRegion}>
          {mapMarker}
        </MapView>
        <View style={styles.textView}>
          <Text style={styles.paragraph}>{message}</Text>
          <Text style={styles.paragraph}>{messageFromBeyond}</Text>
          {this.state.fetching === true && (
            <ActivityIndicator
              style={styles.spinner}
              color={Colors.darkGreen}
              size={'large'}
              hidesWhenStopped={true}
              animating={true}
            />
          )}
          {this.state.fetching === false && (
            <ActivityIndicator
              style={styles.spinner}
              color={Colors.darkGreen}
              size={'large'}
              hidesWhenStopped={true}
              animating={false}
            />
          )}
        </View>
        <View style={styles.actionButtonsView}>
          <ActionButton title={'Clear'} onPress={this.didTapClearButton} />
          <ActionButton default onPress={this.didTapOkayButton} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {paddingTop: 20},
      android: {marginTop: 24},
    }),
    backgroundColor: Colors.bgGrey,
    padding: 8,
  },
  spinner: {
    margin: 12,
  },
  map: {
    width: '100%',
    height: 240,
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actionButtonsView: {
    width: '100%',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
