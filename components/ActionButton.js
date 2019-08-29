import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import Colors from '../Colors';

class ActionButton extends React.Component {
  animatedValue = new Animated.Value(0);
  buttonPressIn = () => {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 100,
    }).start();
  };
  buttonPressOut = () => {
    Animated.spring(this.animatedValue, {
      toValue: 0,
      friction: 2,
    }).start();
  };

  render = () => {
    const props = this.props;

    const animatedScale = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.85],
    });

    const animatedStyle = {
      transform: [{scale: animatedScale}],
    };

    return (
      <Animated.View style={animatedStyle}>
        <TouchableOpacity
          onPress={props.onPress}
          onPressIn={this.buttonPressIn}
          onPressOut={this.buttonPressOut}>
          <View
            style={
              props.default ? styles.buttonPrimaryContent : styles.buttonContent
            }>
            <Text
              style={
                props.default ? styles.buttonPrimaryText : styles.buttonText
              }>
              {props.title || 'Okay'}
            </Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };
}

export default ActionButton;

const styles = StyleSheet.create({
  buttonContent: {
    marginLeft: 8,
    padding: 8,
    borderColor: Colors.darkGreen,
    borderWidth: 2,
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.darkGreen,
  },
  buttonPrimaryContent: {
    marginLeft: 8,
    padding: 8,
    borderColor: Colors.darkGreen,
    borderWidth: 2,
    backgroundColor: Colors.darkGreen,
    borderRadius: 5,
  },
  buttonPrimaryText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});
