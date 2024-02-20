import React from 'react';
import { Text, View, Switch, StyleSheet, Image } from 'react-native';

export default class App extends React.Component {
  state = {
    switchValue: false,
    backgroundColor: '#000000',
    color: 'lightColor',
    bulbImage: require('./assets/bulb_off.png')
  };

  handleSwitchToggle = (switchValue) => {
    const backgroundColor = switchValue ? '#000000' : '#ffffff';
    const color = switchValue ? 'darkColor' : 'lightColor';
    const bulbImage = switchValue ? require('./assets/bulb_on.png') : require('./assets/bulb_off.png');
    this.setState({ switchValue, backgroundColor, color, bulbImage });
  };

  render(){
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <Text style={[styles.textTitle, styles[this.state.color]]}>Light Bulb with Switches</Text>
        <Text style={[styles.textSubTitle, styles[this.state.color]]}>AMC MP1</Text>
        <Image source={this.state.bulbImage} style={styles.bulbImage} />
        <Switch value={this.state.switchValue} onValueChange={this.handleSwitchToggle}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bulbImage: {
    width: 92,
    height: 110,
    marginBottom: 20,
  },
  textTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textSubTitle: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 50,
  },
  lightColor: {
    color: '#000000',
  },
  darkColor: {
    color: '#ffffff',
  },
});
