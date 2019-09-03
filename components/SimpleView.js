// @flow
//  Created by react-native-create-bridge

import React from 'react';
import {requireNativeComponent, DeviceEventEmitter} from 'react-native';

const SimpleViewNative = requireNativeComponent('SimpleView');

type Props = {
  title: ?string,
  onClearTapped: ?() => {},
};

export default class SimpleView extends React.Component<Props> {
  render() {
    return <SimpleViewNative {...this.props} />;
  }
}
